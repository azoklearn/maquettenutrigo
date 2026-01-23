import Section from '@/components/ui/Section'

export default function MentionsLegalesPage() {
  return (
    <>
      <Section
        title="Mentions Légales"
        centered
        background="gray"
        className="py-12"
      />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-neutral">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Nutrigo</strong><br />
            Responsable : Schmitt Giovani<br />
            Email : giova_sch@outlook.com<br />
            Téléphone : 07 82 54 01 67<br />
            France
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, USA
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés, y compris pour les documents téléchargeables et 
            les représentations iconographiques et photographiques.
          </p>

          <h2>Protection des données personnelles</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée 
            et au Règlement Général sur la Protection des Données (RGPD), vous disposez 
            d'un droit d'accès, de rectification, de suppression et d'opposition aux 
            données personnelles vous concernant.
          </p>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
            giova_sch@outlook.com
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
            réaliser des statistiques de visite. Vous pouvez à tout moment modifier 
            vos préférences en matière de cookies.
          </p>

          <h2>Crédits</h2>
          <p>
            Conception et développement : Nutrigo<br />
            Photos : Unsplash, Pexels<br />
            Icônes : Lucide React
          </p>
        </div>
      </Section>
    </>
  )
}
