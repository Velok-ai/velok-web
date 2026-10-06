'use client';

import Link from 'next/link';
import { SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

function useLeadSubmit() {
  const startedAt = useRef<number | null>(null);
  const [state, setState] = useState<SubmitState>('idle');

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function submit(payload: Record<string, unknown>) {
    setState('sending');
    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          language: 'en',
          elapsedMs: Date.now() - (startedAt.current ?? Date.now()),
          sourcePath: window.location.pathname,
          utmSource: params.get('utm_source'),
          utmMedium: params.get('utm_medium'),
          utmCampaign: params.get('utm_campaign'),
          source: params.get('source'),
          besoin: params.get('besoin'),
        }),
      });
      if (!response.ok) throw new Error('submit');
      setState('sent');
      return true;
    } catch {
      setState('error');
      return false;
    }
  }

  return { state, submit };
}

function Honeypot() {
  return (
    <input
      className="form-trap"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
}

function Consent({ marketing = false }: { marketing?: boolean }) {
  return (
    <div className="consent-stack">
      {marketing && (
        <label className="check-row">
          <input name="marketingConsent" type="checkbox" />{' '}
          <span>
            I would like to receive future Velok resources. I can unsubscribe at
            any time.
          </span>
        </label>
      )}
      <label className="check-row">
        <input name="privacyAccepted" type="checkbox" required />{' '}
        <span>
          I agree to Velok using this information to handle my request.{' '}
          <Link href="/en/confidentialite">Privacy</Link>.
        </span>
      </label>
    </div>
  );
}

export function NurtureForm() {
  const { state, submit } = useLeadSubmit();

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      formKind: 'nurture',
      email: data.get('email'),
      website: data.get('website'),
      marketingConsent: data.get('marketingConsent') === 'on',
      privacyAccepted: data.get('privacyAccepted') === 'on',
    });
  }

  if (state === 'sent')
    return (
      <output className="form-success">Your request has been recorded.</output>
    );

  return (
    <form className="nurture-form" onSubmit={onSubmit}>
      <Honeypot />
      <label htmlFor="nurture-email">Work email</label>
      <div className="inline-field">
        <input
          id="nurture-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
        />
        <button type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Request the resources'}
        </button>
      </div>
      <Consent marketing />
      {state === 'error' && (
        <p className="form-error" role="alert">
          Submission failed. Please try again or email david@velok.ai.
        </p>
      )}
    </form>
  );
}

const safetyQuestions = [
  ['owner', 'Does an internal owner approve each use case?'],
  ['accounts', 'Are work accounts separate from personal accounts?'],
  ['data', 'Do you know which data must never be entered into an AI tool?'],
  ['access', 'Are agent access and permissions documented?'],
  ['trace', 'Can you trace important actions and approvals?'],
] as const;

export function SafetyDiagnostic() {
  const { state, submit } = useLeadSubmit();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showContact, setShowContact] = useState(false);
  const score = useMemo(
    () => Object.values(answers).filter((value) => value === 'yes').length,
    [answers],
  );
  const complete = Object.keys(answers).length === safetyQuestions.length;

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      formKind: 'safety',
      email: data.get('email'),
      company: data.get('company'),
      website: data.get('website'),
      privacyAccepted: data.get('privacyAccepted') === 'on',
      marketingConsent: data.get('marketingConsent') === 'on',
      responses: answers,
    });
  }

  if (state === 'sent')
    return (
      <div className="result-panel">
        <span>Received</span>
        <h2>David will reply with the next useful check.</h2>
        <Link href="/en/commencer">Describe a process →</Link>
      </div>
    );

  return (
    <div className="diagnostic-shell">
      <div className="question-list">
        {safetyQuestions.map(([key, label], index) => (
          <fieldset key={key} className="question-card">
            <legend>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
            </legend>
            <div className="choice-row">
              {[
                ['yes', 'Yes'],
                ['partial', 'Partly'],
                ['no', 'No'],
              ].map(([value, text]) => (
                <label
                  key={value}
                  className={answers[key] === value ? 'selected' : ''}
                >
                  <input
                    type="radio"
                    name={key}
                    value={value}
                    onChange={() =>
                      setAnswers((current) => ({ ...current, [key]: value }))
                    }
                  />
                  {text}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      {complete && !showContact && (
        <div className="result-panel">
          <span>{score}/5 controls in place</span>
          <h2>
            {score >= 4
              ? 'A good foundation. Let’s check the use case.'
              : score >= 2
                ? 'A partial foundation. Let’s prioritise the gaps.'
                : 'Start with the safeguards.'}
          </h2>
          <button
            className="button button-primary"
            onClick={() => setShowContact(true)}
          >
            Get the next step
          </button>
        </div>
      )}
      {showContact && (
        <form className="contact-form compact-form" onSubmit={onSubmit}>
          <Honeypot />
          <div className="field-grid">
            <label>
              Work email
              <input name="email" type="email" required />
            </label>
            <label>
              Company
              <input name="company" />
            </label>
          </div>
          <Consent marketing />
          <button
            className="button button-primary"
            type="submit"
            disabled={state === 'sending'}
          >
            {state === 'sending' ? 'Sending…' : 'Get the recommendation'}
          </button>
          {state === 'error' && (
            <p className="form-error" role="alert">
              Submission failed. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export function PrequalificationForm({
  initialOfferInterest = '',
}: {
  initialOfferInterest?: string;
}) {
  const { state, submit } = useLeadSubmit();
  const acceptedNeeds = [
    'awareness',
    'training',
    'workshop',
    'integration',
    'adoption',
    'audit',
    'unsure',
  ];
  const [offerInterest, setOfferInterest] = useState(
    acceptedNeeds.includes(initialOfferInterest) ? initialOfferInterest : '',
  );
  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      formKind: 'prequalification',
      fullName: data.get('fullName'),
      email: data.get('email'),
      company: data.get('company'),
      offerInterest: data.get('offerInterest'),
      priorities: data.get('priorities'),
      sector: data.get('sector'),
      privacyAccepted: data.get('privacyAccepted') === 'on',
      website: data.get('website'),
    });
  }
  if (state === 'sent')
    return (
      <div className="result-panel large-result">
        <output>Request received</output>
        <h2>Thank you, your request has arrived.</h2>
        <p>We will reply by email to arrange a first conversation.</p>
      </div>
    );
  return (
    <form className="qualification-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="form-step">
        <h2>Where would you like to start?</h2>
        <label>
          Your need
          <select
            name="offerInterest"
            required
            value={offerInterest}
            onChange={(event) => setOfferInterest(event.currentTarget.value)}
          >
            <option value="" disabled>
              Choose
            </option>
            <option value="awareness">Talk or awareness session</option>
            <option value="training">Practical training</option>
            <option value="workshop">Workshop and use-case discovery</option>
            <option value="integration">Implementation or integration</option>
            <option value="adoption">Adoption and team support</option>
            <option value="audit">Audit an operation</option>
            <option value="unsure">I’m not sure yet</option>
          </select>
        </label>
        <label>
          What you would like to move forward (optional)
          <textarea
            name="priorities"
            rows={4}
            maxLength={1500}
            placeholder="A task, a recurring frustration, a team to train…"
          />
        </label>
        <p className="field-note">
          Do not share any client or confidential data.
        </p>
        <label>
          Full name
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={200}
          />
        </label>
        <div className="field-grid">
          <label>
            Work email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
          <label>
            Company
            <input
              name="company"
              autoComplete="organization"
              required
              maxLength={200}
            />
          </label>
        </div>
        <label>
          Sector (optional)
          <select name="sector" defaultValue="">
            <option value="">Not specified</option>
            <option>Accounting</option>
            <option>Consulting</option>
            <option>Agency</option>
            <option>Legal</option>
            <option>Other professional service</option>
            <option>Other</option>
          </select>
        </label>
        <Consent />
      </div>
      <div className="form-actions">
        <button
          type="submit"
          className="button button-primary"
          disabled={state === 'sending'}
        >
          {state === 'sending' ? 'Sending…' : 'Send to David'}
        </button>
      </div>
      {state === 'error' && (
        <p className="form-error" role="alert">
          Submission failed. Please try again or email{' '}
          <a href="mailto:david@velok.ai">david@velok.ai</a>.
        </p>
      )}
    </form>
  );
}
