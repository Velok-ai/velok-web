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
          elapsedMs: Date.now() - (startedAt.current ?? Date.now()),
          sourcePath: window.location.pathname,
          utmSource: params.get('utm_source'),
          utmMedium: params.get('utm_medium'),
          utmCampaign: params.get('utm_campaign'),
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
  return <input className="form-trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />;
}

function Consent({ marketing = false }: { marketing?: boolean }) {
  return (
    <div className="consent-stack">
      {marketing && <label className="check-row"><input name="marketingConsent" type="checkbox" /> <span>Je souhaite recevoir le parcours email Velok. Désinscription à tout moment.</span></label>}
      <label className="check-row"><input name="privacyAccepted" type="checkbox" required /> <span>J’accepte que Velok utilise ces informations pour traiter ma demande. <Link href="/confidentialite">Confidentialité</Link>.</span></label>
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

  if (state === 'sent') return <output className="form-success">C’est noté. Le premier email arrive bientôt.</output>;

  return (
    <form className="nurture-form" onSubmit={onSubmit}>
      <Honeypot />
      <label htmlFor="nurture-email">Email professionnel</label>
      <div className="inline-field"><input id="nurture-email" name="email" type="email" autoComplete="email" required placeholder="vous@entreprise.fr" /><button type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Envoi…' : 'Recevoir les 5 emails'}</button></div>
      <Consent marketing />
      {state === 'error' && <p className="form-error" role="alert">L’envoi a échoué. Réessayez ou écrivez à david@velok.ai.</p>}
    </form>
  );
}

const safetyQuestions = [
  ['owner', 'Un responsable interne valide-t-il chaque usage ?'],
  ['accounts', 'Les comptes professionnels sont-ils séparés des comptes personnels ?'],
  ['data', 'Savez-vous quelles données ne doivent jamais entrer dans un outil IA ?'],
  ['access', 'Les accès et permissions des agents sont-ils documentés ?'],
  ['trace', 'Pouvez-vous retracer les actions et validations importantes ?'],
] as const;

export function SafetyDiagnostic() {
  const { state, submit } = useLeadSubmit();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showContact, setShowContact] = useState(false);
  const score = useMemo(() => Object.values(answers).filter((value) => value === 'yes').length, [answers]);
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

  if (state === 'sent') return <div className="result-panel"><span>Reçu</span><h2>David vous répond avec le prochain contrôle utile.</h2><Link href="/commencer">Qualifier le projet →</Link></div>;

  return (
    <div className="diagnostic-shell">
      <div className="question-list">
        {safetyQuestions.map(([key, label], index) => (
          <fieldset key={key} className="question-card">
            <legend><span>{String(index + 1).padStart(2, '0')}</span>{label}</legend>
            <div className="choice-row">
              {[['yes', 'Oui'], ['partial', 'Partiellement'], ['no', 'Non']].map(([value, text]) => (
                <label key={value} className={answers[key] === value ? 'selected' : ''}>
                  <input type="radio" name={key} value={value} onChange={() => setAnswers((current) => ({ ...current, [key]: value }))} />{text}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      {complete && !showContact && (
        <div className="result-panel">
          <span>{score}/5 contrôles en place</span>
          <h2>{score >= 4 ? 'Bonne base. Vérifions le cas d’usage.' : score >= 2 ? 'Base partielle. Priorisons les écarts.' : 'Commencez par les garde-fous.'}</h2>
          <button className="button button-primary" onClick={() => setShowContact(true)}>Recevoir la prochaine étape</button>
        </div>
      )}
      {showContact && (
        <form className="contact-form compact-form" onSubmit={onSubmit}>
          <Honeypot />
          <div className="field-grid"><label>Email professionnel<input name="email" type="email" required /></label><label>Entreprise<input name="company" /></label></div>
          <Consent marketing />
          <button className="button button-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Envoi…' : 'Recevoir la recommandation'}</button>
          {state === 'error' && <p className="form-error" role="alert">L’envoi a échoué. Réessayez.</p>}
        </form>
      )}
    </div>
  );
}

const steps = ['Point de départ', 'Contexte', 'Sécurité', 'Décision'];

export function PrequalificationForm() {
  const { state, submit } = useLeadSubmit();
  const [step, setStep] = useState(0);
  const [offerInterest, setOfferInterest] = useState('');

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (step < steps.length - 1) {
      const invalid = form.querySelector<HTMLElement>('.form-step:not([hidden]) :invalid');
      if (invalid) {
        (invalid as HTMLInputElement).reportValidity();
      } else {
        setStep((value) => value + 1);
      }
      return;
    }
    const data = new FormData(form);
    await submit({
      formKind: 'prequalification',
      firstName: data.get('firstName'), lastName: data.get('lastName'), email: data.get('email'), phone: data.get('phone'),
      company: data.get('company'), role: data.get('role'), sector: data.get('sector'), country: data.get('country'), teamSize: data.get('teamSize'),
      currentAiUse: data.get('currentAiUse'), tools: data.get('tools'), monthlyEmailVolume: data.get('monthlyEmailVolume'), offerInterest: data.get('offerInterest'),
      priorities: data.get('priorities'), dataSensitivity: data.get('dataSensitivity'), securityOwner: data.get('securityOwner'), identityControls: data.get('identityControls'),
      timeline: data.get('timeline'), decisionRole: data.get('decisionRole'), budgetReadiness: data.get('budgetReadiness'),
      marketingConsent: data.get('marketingConsent') === 'on', privacyAccepted: data.get('privacyAccepted') === 'on', website: data.get('website'),
    });
  }

  if (state === 'sent') return <div className="result-panel large-result"><span>Demande reçue</span><h2>David examine votre contexte.</h2><p>Vous recevrez une réponse avec le point de départ recommandé.</p></div>;

  return (
    <form className="qualification-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="form-progress" aria-label={`Étape ${step + 1} sur ${steps.length}`}><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
      <p className="step-label">{String(step + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} · {steps[step]}</p>

      <section hidden={step !== 0} className="form-step">
        <h2>Par quoi souhaitez-vous commencer ?</h2>
        <label>Point de départ<select id="offer-interest" name="offerInterest" required value={offerInterest} onChange={(event) => setOfferInterest(event.currentTarget.value)}><option value="" disabled>Choisir</option><option value="audit">Audit de l’inbox · 1 500 €</option><option value="workshop">Atelier agents</option><option value="agents">Agents sécurisés</option><option value="data_spine">Data spine</option><option value="unsure">Je ne sais pas encore</option></select></label>
        <label>Priorité opérationnelle<textarea name="priorities" rows={4} maxLength={1500} placeholder="Ex. réduire le tri manuel et les relances" required /></label>
        <p className="field-note">Ne transmettez aucune donnée client ou confidentielle.</p>
      </section>

      <section hidden={step !== 1} className="form-step">
        <h2>Votre contexte</h2>
        <div className="field-grid"><label>Secteur<select name="sector" required defaultValue=""><option value="" disabled>Choisir</option><option>Assurance</option><option>Expertise comptable</option><option>Services financiers</option><option>Santé</option><option>Juridique</option><option>Autre secteur réglementé</option></select></label><label>Taille d’équipe<select name="teamSize" required defaultValue=""><option value="" disabled>Choisir</option><option>1–10</option><option>11–50</option><option>51–250</option><option>251+</option></select></label></div>
        <div className="field-grid"><label>Usage actuel de l’IA<select name="currentAiUse" required defaultValue=""><option value="" disabled>Choisir</option><option>Aucun</option><option>Tests individuels</option><option>Outils validés</option><option>Agents en production</option></select></label><label>Emails opérationnels / mois<select name="monthlyEmailVolume" required defaultValue=""><option value="" disabled>Choisir</option><option>Moins de 5 000</option><option>5 000–10 000</option><option>10 000–15 000</option><option>Plus de 15 000</option></select></label></div>
        <label>Outils principaux<input name="tools" placeholder="Microsoft 365, Salesforce, métier…" /></label>
      </section>

      <section hidden={step !== 2} className="form-step">
        <h2>Vos garde-fous</h2>
        <div className="field-grid"><label>Sensibilité des données<select name="dataSensitivity" required defaultValue=""><option value="" disabled>Choisir</option><option>Faible</option><option>Personnelles</option><option>Financières</option><option>Santé / très sensibles</option><option>À déterminer</option></select></label><label>Responsable sécurité / DPO<select name="securityOwner" required defaultValue=""><option value="" disabled>Choisir</option><option>Identifié</option><option>Externe</option><option>Non identifié</option></select></label></div>
        <label>Gestion des identités et accès<select name="identityControls" required defaultValue=""><option value="" disabled>Choisir</option><option>SSO et rôles documentés</option><option>Partiellement en place</option><option>À construire</option><option>Je ne sais pas</option></select></label>
      </section>

      <section hidden={step !== 3} className="form-step">
        <h2>Qui porte la décision ?</h2>
        <div className="field-grid"><label>Prénom<input name="firstName" required /></label><label>Nom<input name="lastName" required /></label></div>
        <div className="field-grid"><label>Email professionnel<input name="email" type="email" autoComplete="email" required /></label><label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label></div>
        <div className="field-grid"><label>Entreprise<input name="company" autoComplete="organization" required /></label><label>Fonction<input name="role" autoComplete="organization-title" required /></label></div>
        <div className="field-grid"><label>Pays<input name="country" defaultValue="France" required /></label><label>Calendrier<select name="timeline" required defaultValue=""><option value="" disabled>Choisir</option><option>Maintenant</option><option>Dans 1–3 mois</option><option>Dans 3–6 mois</option><option>Exploration</option></select></label></div>
        <div className="field-grid"><label>Rôle dans la décision<select name="decisionRole" required defaultValue=""><option value="" disabled>Choisir</option><option>Décideur</option><option>Co-décideur</option><option>Porteur du projet</option><option>Exploration</option></select></label><label>Budget de départ<select name="budgetReadiness" required defaultValue=""><option value="" disabled>Choisir</option><option>1 500 € validable</option><option>Budget à cadrer</option><option>Pas encore défini</option></select></label></div>
        <Consent marketing />
      </section>

      <div className="form-actions">
        {step > 0 && <button type="button" className="button button-secondary" onClick={() => setStep((value) => value - 1)}>Retour</button>}
        <button type="submit" formNoValidate={step < steps.length - 1} className="button button-primary" disabled={state === 'sending'}>{step < steps.length - 1 ? 'Continuer' : state === 'sending' ? 'Envoi…' : 'Envoyer à David'}</button>
      </div>
      {state === 'error' && <p className="form-error" role="alert">L’envoi a échoué. Réessayez ou écrivez à david@velok.ai.</p>}
    </form>
  );
}
