import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

/**
 * Every form on the site posts here (components/lead-forms.tsx).
 *
 * The lead's record of existence is the notification email: it lands in the
 * inbox named by VELOK_LEAD_EMAIL (comma-separated for several people). If that
 * send fails the request fails, so the visitor sees an error and can retry
 * rather than being told it worked while nothing was saved. The Resend segment
 * is a secondary, best-effort copy and only with marketing consent.
 */

const formKinds = new Set(['nurture', 'safety', 'prequalification']);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_FROM = 'Velok via Lemonbrand <hello@lemonbrand.io>';
const DEFAULT_TO = 'david@velok.ai';
const SEGMENT_NAME = 'Velok — Parcours IA';

function clean(value: unknown, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : null;
}

function recipients() {
  return (process.env.VELOK_LEAD_EMAIL || DEFAULT_TO)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function linesFor(body: Record<string, unknown>) {
  const ignored = new Set(['website', 'privacyAccepted', 'marketingConsent', 'elapsedMs']);
  return Object.entries(body)
    .filter(([key, value]) => !ignored.has(key) && value !== null && value !== undefined && value !== '')
    .map(([key, value]) => {
      const printable = typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
        ? String(value)
        : JSON.stringify(value);
      return `${key}: ${printable}`;
    })
    .join('\n')
    .slice(0, 12_000);
}

async function addToVelokSegment(resend: Resend, email: string) {
  let segmentId = process.env.VELOK_RESEND_SEGMENT_ID;
  if (!segmentId) {
    const listed = await resend.segments.list();
    segmentId = listed.data?.data?.find((segment) => segment.name === SEGMENT_NAME)?.id;
  }
  if (!segmentId) {
    const created = await resend.segments.create({ name: SEGMENT_NAME });
    segmentId = created.data?.id;
  }
  if (!segmentId) return;

  try {
    await resend.contacts.create({ email, unsubscribed: false });
  } catch {
    // The contact may already exist. Adding by email remains idempotent.
  }
  await resend.contacts.segments.add({ segmentId, email });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: 'Requête invalide.' }, { status: 400 });
  }

  const formKind = clean(body.formKind, 32);
  const email = clean(body.email, 254)?.toLowerCase() ?? null;
  const privacyAccepted = body.privacyAccepted === true;
  const elapsedMs = Number(body.elapsedMs ?? 0);

  if (clean(body.website, 100)) return Response.json({ ok: true });
  if (!formKind || !formKinds.has(formKind) || !email || !emailPattern.test(email)) {
    return Response.json({ ok: false, error: 'Champs invalides.' }, { status: 400 });
  }
  if (!privacyAccepted || !Number.isFinite(elapsedMs) || elapsedMs < 900) {
    return Response.json({ ok: false, error: 'Merci de confirmer les conditions.' }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('velok lead: RESEND_API_KEY is not set');
    return Response.json({ ok: false, error: 'Service indisponible.' }, { status: 503 });
  }
  const resend = new Resend(resendKey);

  // 1. Persist: the notification IS the record. Fail the request if it fails.
  try {
    const sent = await resend.emails.send({
      from: process.env.VELOK_FROM_EMAIL || DEFAULT_FROM,
      to: recipients(),
      replyTo: email,
      subject: `Velok — ${formKind} — ${email}`,
      text: linesFor(body),
      tags: [{ name: 'source', value: `velok-${formKind}` }],
    });
    if (sent.error) throw sent.error;
  } catch (error) {
    console.error('velok lead notification failed', error);
    return Response.json({ ok: false, error: 'Enregistrement impossible. Réessayez.' }, { status: 502 });
  }

  // 2. Marketing list, only with consent, best-effort.
  if (body.marketingConsent === true) {
    try {
      await addToVelokSegment(resend, email);
    } catch (error) {
      console.error('velok audience sync failed', error);
    }
  }

  return Response.json({ ok: true });
}
