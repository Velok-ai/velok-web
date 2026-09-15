import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter, SiteHeader, VisualElement } from '@/components/site-shell';
import { NurtureForm } from '@/components/lead-forms';

const capabilities = [
  ['07-market-module', 'Outiller', 'OpenAI d’abord; Anthropic si nécessaire.'],
  ['16-control-dial', 'Former', 'Règles, vérification, escalade.'],
  ['01-approval-gate', 'Automatiser', 'Rôles bornés, validation humaine.'],
  ['06-client-core', 'Structurer', 'Sources, connecteurs, traces.'],
];

const method = [
  ['02-audit-lens', '01', 'Observer', 'Un flux réel et ses exceptions.'],
  ['13-process-map', '02', 'Cadrer', 'Usage, risque, responsable, mesure.'],
  ['09-connector-rail', '03', 'Déployer', 'Le plus petit système utile.'],
  ['15-ownership-token', '04', 'Transmettre', 'Code, comptes et documentation.'],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="funnel-hero">
          <div className="funnel-copy">
            <p className="eyebrow"><span /> IA opérationnelle · professionnels en France</p>
            <h1>L’IA utile.<br /><em>Sous contrôle.</em></h1>
            <p>Velok choisit, sécurise et intègre l’IA dans votre travail réel — sans nouvelle boîte noire.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/commencer">Parler du projet <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="/diagnostic">Diagnostic sécurité · 3 min</Link>
            </div>
            <div className="trust-rail" aria-label="Principes Velok"><span>Contrôle humain</span><span>Comptes client</span><span>Sortie documentée</span></div>
          </div>
          <figure className="funnel-visual">
            <Image src="/brand/velok-hero-system.png" alt="Un flux contrôlé rejoint un système opérationnel." fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            <figcaption><b>Architecture Velok</b><span>Entrées → contrôles → actions → trace</span></figcaption>
          </figure>
        </section>

        <section className="proof-strip" aria-label="Repères Velok">
          <div><strong>1&nbsp;500&nbsp;€</strong><span>Audit initial</span></div>
          <div><strong>1 flux</strong><span>Pour commencer</span></div>
          <div><strong>Humain</strong><span>Aux décisions sensibles</span></div>
          <div><strong>Client</strong><span>Propriétaire de la stack</span></div>
        </section>

        <section className="entry-section" id="offres">
          <div className="short-heading">
            <p className="section-kicker">Deux points d’entrée</p>
            <h2>Voir le travail.<br /><em>Ou apprendre à agir.</em></h2>
          </div>
          <div className="entry-grid">
            <Link className="entry-card dark-entry" href="/audit">
              <VisualElement name="02-audit-lens" />
              <span>01 · 1&nbsp;500&nbsp;€</span><h3>Audit de l’inbox</h3>
              <p>Cartographier les demandes, décisions, relances et exceptions avant d’automatiser.</p><strong>Voir l’audit →</strong>
            </Link>
            <Link className="entry-card blue-entry" href="/atelier-agents">
              <VisualElement name="11-human-handoff" />
              <span>02 · Formation</span><h3>Atelier agents</h3>
              <p>Comprendre les usages, tester un agent borné et définir les règles de l’équipe.</p><strong>Voir l’atelier →</strong>
            </Link>
          </div>
        </section>

        <section className="method-section-v2" id="methode">
          <div className="short-heading">
            <p className="section-kicker">La méthode</p>
            <h2>Du premier flux<br /><em>au système maîtrisé.</em></h2>
          </div>
          <div className="method-grid">
            {method.map(([asset, index, title, body]) => (
              <article key={title}><span>{index}</span><VisualElement name={asset} /><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="capability-section" id="solutions">
          <div className="short-heading light-heading">
            <p className="section-kicker">Ce que nous mettons en place</p>
            <h2>Outils, agents,<br /><em>données.</em></h2>
          </div>
          <div className="capability-grid">
            {capabilities.map(([asset, title, body]) => (
              <article key={title}><VisualElement name={asset} /><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <p className="compliance-note">La conformité dépend toujours de l’usage, des données et des contrôles.</p>
        </section>

        <section className="sector-section-v2" id="secteurs">
          <div><p className="section-kicker">Secteurs</p><h2>Conçu pour les opérations où la preuve compte.</h2></div>
          <div className="sector-links">
            <Link href="/secteurs/assurance"><span>Assurance</span><strong>Dossiers, pièces, relances, contrôle →</strong></Link>
            <Link href="/secteurs/expertise-comptable"><span>Expertise comptable</span><strong>Collecte, préparation, exceptions, trace →</strong></Link>
            <Link href="/secteurs/services-financiers"><span>Services financiers</span><strong>Contrôles, analyse, validation, preuve →</strong></Link>
            <Link href="/secteurs/juridique"><span>Professions juridiques</span><strong>Dossiers, recherche, revue, confidentialité →</strong></Link>
          </div>
        </section>

        <section className="operator-section">
          <VisualElement name="11-human-handoff" />
          <div><p className="section-kicker">Votre interlocuteur en France</p><h2>David pilote votre mise en œuvre.</h2></div>
          <p>Un échange direct pour réunir les bonnes personnes et décider du premier pas.</p>
          <a className="text-link" href="mailto:david@velok.ai">david@velok.ai ↗</a>
        </section>

        <section className="nurture-section">
          <div>
            <p className="section-kicker">Parcours en 5 emails</p>
            <h2>Comprendre avant<br /><em>de déployer.</em></h2>
            <p>Usages, données, agents, contrôle humain et premier projet.</p>
          </div>
          <NurtureForm />
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
