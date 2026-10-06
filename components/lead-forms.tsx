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
          language: 'fr',
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
            Je souhaite recevoir les prochaines ressources Velok. Désinscription
            à tout moment.
          </span>
        </label>
      )}
      <label className="check-row">
        <input name="privacyAccepted" type="checkbox" required />{' '}
        <span>
          J’accepte que Velok utilise ces informations pour traiter ma demande.{' '}
          <Link href="/confidentialite">Confidentialité</Link>.
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
      <output className="form-success">Votre demande est enregistrée.</output>
    );

  return (
    <form className="nurture-form" onSubmit={onSubmit}>
      <Honeypot />
      <label htmlFor="nurture-email">Email professionnel</label>
      <div className="inline-field">
        <input
          id="nurture-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="vous@entreprise.fr"
        />
        <button type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Envoi…' : 'Demander les ressources'}
        </button>
      </div>
      <Consent marketing />
      {state === 'error' && (
        <p className="form-error" role="alert">
          L’envoi a échoué. Réessayez ou écrivez à david@velok.ai.
        </p>
      )}
    </form>
  );
}

const safetyQuestions = [
  ['owner', 'Un responsable interne valide-t-il chaque usage ?'],
  [
    'accounts',
    'Les comptes professionnels sont-ils séparés des comptes personnels ?',
  ],
  [
    'data',
    'Savez-vous quelles données ne doivent jamais entrer dans un outil IA ?',
  ],
  ['access', 'Les accès et permissions des agents sont-ils documentés ?'],
  ['trace', 'Pouvez-vous retracer les actions et validations importantes ?'],
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
        <span>Reçu</span>
        <h2>David vous répond avec le prochain contrôle utile.</h2>
        <Link href="/commencer">Décrire un processus →</Link>
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
                ['yes', 'Oui'],
                ['partial', 'Partiellement'],
                ['no', 'Non'],
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
          <span>{score}/5 contrôles en place</span>
          <h2>
            {score >= 4
              ? 'Bonne base. Vérifions le cas d’usage.'
              : score >= 2
                ? 'Base partielle. Priorisons les écarts.'
                : 'Commencez par les garde-fous.'}
          </h2>
          <button
            className="button button-primary"
            onClick={() => setShowContact(true)}
          >
            Recevoir la prochaine étape
          </button>
        </div>
      )}
      {showContact && (
        <form className="contact-form compact-form" onSubmit={onSubmit}>
          <Honeypot />
          <div className="field-grid">
            <label>
              Email professionnel
              <input name="email" type="email" required />
            </label>
            <label>
              Entreprise
              <input name="company" />
            </label>
          </div>
          <Consent marketing />
          <button
            className="button button-primary"
            type="submit"
            disabled={state === 'sending'}
          >
            {state === 'sending' ? 'Envoi…' : 'Recevoir la recommandation'}
          </button>
          {state === 'error' && (
            <p className="form-error" role="alert">
              L’envoi a échoué. Réessayez.
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
        <output>Demande reçue</output>
        <h2>Merci, votre demande est bien arrivée.</h2>
        <p>Nous vous répondons par email pour convenir d’un premier échange.</p>
      </div>
    );
  return (
    <form className="qualification-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="form-step">
        <h2>Par quoi souhaitez-vous commencer ?</h2>
        <label>
          Votre besoin
          <select
            name="offerInterest"
            required
            value={offerInterest}
            onChange={(event) => setOfferInterest(event.currentTarget.value)}
          >
            <option value="" disabled>
              Choisir
            </option>
            <option value="awareness">Conférence ou sensibilisation</option>
            <option value="training">Formation pratique</option>
            <option value="workshop">
              Atelier et découverte de cas d’usage
            </option>
            <option value="integration">Mise en place ou intégration</option>
            <option value="adoption">
              Adoption et accompagnement de l’équipe
            </option>
            <option value="audit">Audit d’une opération</option>
            <option value="unsure">Je ne sais pas encore</option>
          </select>
        </label>
        <label>
          Ce que vous aimeriez faire avancer (facultatif)
          <textarea
            name="priorities"
            rows={4}
            maxLength={1500}
            placeholder="Une tâche, un irritant, une équipe à former…"
          />
        </label>
        <p className="field-note">
          Ne transmettez aucune donnée client ou confidentielle.
        </p>
        <label>
          Nom complet
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
            Email professionnel
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </label>
          <label>
            Entreprise
            <input
              name="company"
              autoComplete="organization"
              required
              maxLength={200}
            />
          </label>
        </div>
        <label>
          Secteur (facultatif)
          <select name="sector" defaultValue="">
            <option value="">Non précisé</option>
            <option>Expertise comptable</option>
            <option>Conseil</option>
            <option>Agence</option>
            <option>Juridique</option>
            <option>Autre service professionnel</option>
            <option>Autre</option>
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
          {state === 'sending' ? 'Envoi…' : 'Envoyer à David'}
        </button>
      </div>
      {state === 'error' && (
        <p className="form-error" role="alert">
          L’envoi a échoué. Réessayez ou écrivez à{' '}
          <a href="mailto:david@velok.ai">david@velok.ai</a>.
        </p>
      )}
    </form>
  );
}
