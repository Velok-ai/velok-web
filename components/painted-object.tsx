import Image from 'next/image';

export type PaintedObjectName = 'bring-real-work' | 'practice-together' | 'reuse-a-practice' | 'review-a-document' | 'ai-assisted-work' | 'agency-collaboration' | 'document-flow' | 'protected-folder' | 'choose-first-step';
const descriptions: Record<PaintedObjectName, string> = {
  'agency-collaboration': 'Trois collègues alignent des documents de projet autour d’une table.',
  'document-flow': 'Une main classe un document entre deux bacs pour organiser les demandes.',
  'protected-folder': 'Une main protège un dossier fermé, avec une petite clé à côté.',
  'choose-first-step': 'Une main choisit une tâche parmi trois cartes de travail.',
  'ai-assisted-work': 'Une personne utilise un assistant conversationnel sur son ordinateur, avec une main qui la guide et un exemple de travail à côté.',
  'bring-real-work': 'Une main choisit un exemple de travail dans un dossier.',
  'practice-together': 'Une personne pratique sur un ordinateur avec un guide à ses côtés.',
  'reuse-a-practice': 'Deux collègues vérifient la même méthode sur des documents et un ordinateur.',
  'review-a-document': 'Une main examine un document à la loupe, près d’une liste de vérification.',
};

export function PaintedObject({ name, className = '', decorative = false, priority = false }: { name: PaintedObjectName; className?: string; decorative?: boolean; priority?: boolean }) {
  return <span className={`painted-object ${className}`} aria-hidden={decorative || undefined}><Image src={`/brand/cutouts/${name}.webp`} width={1254} height={1254} alt={decorative ? '' : descriptions[name]} priority={priority} sizes="(max-width: 760px) 80vw, 380px" /></span>;
}

export function VisualJourney() {
  return <section className="visual-journey" aria-label="Du travail réel à une pratique réutilisable"><div className="journey-heading"><p className="section-kicker">Votre premier usage, ensemble</p><h2>De votre travail<br /><em>à votre pratique.</em></h2></div><ol>
    <li className="journey-stage"><PaintedObject name="bring-real-work" /><div><span aria-hidden="true">01</span><h3>Un exemple réel</h3></div></li>
    <li className="journey-stage"><PaintedObject name="ai-assisted-work" /><div><span aria-hidden="true">02</span><h3>Un essai accompagné</h3></div></li>
    <li className="journey-stage"><PaintedObject name="reuse-a-practice" /><div><span aria-hidden="true">03</span><h3>Une pratique à reprendre</h3></div></li>
  </ol></section>;
}
