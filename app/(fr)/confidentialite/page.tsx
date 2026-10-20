import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Politique de confidentialité | Velok',
  'Comment Velok traite les données du site, des formulaires et des missions d’audit.',
  '/confidentialite',
);

export default function PrivacyPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Données personnelles"
        title="Politique de confidentialité"
        lede="Cette page sépare les traitements du site de ceux d’une mission. Pour toute question ou demande, écrivez directement à David."
      />
      <section className="content-band alt">
        <div className="notice">
          <strong>Responsable pendant la transition</strong>
          <p>
            Velok est actuellement exploité par 9512624 Canada Ltd. L’entité
            européenne appelée à reprendre le service sera indiquée ici dès sa
            constitution.
          </p>
        </div>
        <h2>Visite et formulaires</h2>
        <p>
          Le site n’utilise pas de traceur publicitaire. Les formulaires
          recueillent les coordonnées, le contexte professionnel et les réponses
          que vous choisissez de transmettre. Les paramètres de campagne
          présents dans l’adresse peuvent aussi être enregistrés pour relier
          votre demande au message reçu.
        </p>
        <h2>Échanges commerciaux</h2>
        <p>
          Ces informations servent à répondre, qualifier la demande et préparer
          une éventuelle relation contractuelle. Le parcours email n’est envoyé
          qu’avec votre accord; vous pouvez vous désinscrire à tout moment.
        </p>
        <h2>Missions d’audit</h2>
        <p>
          Une mission fait l’objet d’un cadre écrit avant tout accès. L’audit
          lit les métadonnées et le corps des messages, sans le contenu des
          pièces jointes. Notre code ne fait que lire : il n’envoie, ne déplace,
          ne modifie ni ne supprime aucun message. L’autorisation affichée par
          Microsoft est aujourd’hui plus large, en attendant notre propre
          application limitée à la lecture. Les modèles d’IA sont appelés sans
          conservation chez leurs hébergeurs.
        </p>
        <p>
          Le contenu des messages est supprimé au plus tard 30 jours après la
          remise du rapport. Le rapport et ses chiffres restent disponibles tant
          que vous utilisez le service, puis tout est supprimé sous 30 jours,
          sauf obligation légale. Une connexion à la boîte est retirée sous 24
          heures après sa déconnexion. Une demande de suppression est traitée
          sous 7 jours, et chaque suppression est confirmée par écrit. Le
          rapport reste considéré comme potentiellement personnel ou
          confidentiel.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la rectification, l’effacement, la
          limitation ou l’opposition lorsque le cadre applicable le permet.
          Écrivez à{' '}
          <a className="text-link" href="mailto:david@velok.ai">
            david@velok.ai
          </a>
          . Vous pouvez aussi saisir l’autorité de contrôle compétente.
        </p>
      </section>
    </PageFrame>
  );
}
