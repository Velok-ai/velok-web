import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Velok',
  description: 'Comment Velok traite les données du site, des formulaires et des missions d’audit.',
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Données personnelles" title="Politique de confidentialité" lede="Cette page sépare les traitements du site de ceux d’une mission. Pour toute question ou demande, écrivez directement à David." />
      <section className="content-band alt">
        <div className="notice"><strong>Responsable pendant la transition</strong><p>Velok est actuellement exploité par 9512624 Canada Ltd. L’entité européenne appelée à reprendre le service sera indiquée ici dès sa constitution.</p></div>
        <h2>Visite et formulaires</h2><p>Le site n’utilise pas de traceur publicitaire. Les formulaires recueillent les coordonnées, le contexte professionnel et les réponses que vous choisissez de transmettre. Les paramètres de campagne présents dans l’adresse peuvent aussi être enregistrés pour relier votre demande au message reçu.</p>
        <h2>Échanges commerciaux</h2><p>Ces informations servent à répondre, qualifier la demande et préparer une éventuelle relation contractuelle. Le parcours email n’est envoyé qu’avec votre accord; vous pouvez vous désinscrire à tout moment.</p>
        <h2>Missions d’audit</h2><p>Une mission fait l’objet d’un cadre spécifique avant tout accès. L’audit peut traiter les métadonnées et le corps des messages dans une copie de travail temporaire. Seules les synthèses nécessaires sont conservées après l’analyse, pour la durée convenue. Les synthèses restent considérées comme potentiellement personnelles ou confidentielles.</p>
        <h2>Vos droits</h2><p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition lorsque le cadre applicable le permet. Écrivez à <a className="text-link" href="mailto:david@velok.ai">david@velok.ai</a>. Vous pouvez aussi saisir l’autorité de contrôle compétente.</p>
      </section>
    </PageFrame>
  );
}
