const CAL_LINK = import.meta.env.VITE_CAL_LINK || 'https://cal.com/adrianparfene'
const GOOGLE_REVIEW_LINK = import.meta.env.VITE_GOOGLE_REVIEW_LINK || '#'

export default function CTASection({ globalScore, prenom }) {
  const vitality = 100 - globalScore

  if (vitality >= 60) {
    return (
      <div className="text-center max-w-lg mx-auto">
        <div className="bg-[#4CAF82]/10 border border-[#4CAF82]/30 rounded-xl p-8 mb-6">
          <p className="font-title text-2xl font-bold text-[#4CAF82] uppercase mb-3">
            Votre énergie est préservée
          </p>
          <p className="text-[#8A9BB5]">
            Bravo {prenom}. Vous êtes dans une bonne dynamique. Continuez à l'entretenir — c'est dans les périodes de vitalité qu'on bâtit la résilience pour les périodes difficiles.
          </p>
        </div>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4A6FA5] hover:bg-[#5A82BE] transition-colors text-white font-title text-lg font-bold uppercase px-8 py-4 rounded-lg"
        >
          Prendre un RDV de bilan →
        </a>
      </div>
    )
  }

  if (vitality >= 30) {
    return (
      <div className="text-center max-w-lg mx-auto">
        <div className="bg-[#E8A87C]/10 border border-[#E8A87C]/30 rounded-xl p-8 mb-6">
          <p className="font-title text-2xl font-bold text-[#E8A87C] uppercase mb-3">
            Des signaux à ne pas ignorer
          </p>
          <p className="text-[#8A9BB5]">
            {prenom}, votre énergie montre des signes de fragilité. Ces signaux existent pour vous alerter avant que la situation ne s'aggrave. Un accompagnement ciblé peut faire une différence réelle.
          </p>
        </div>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E8A87C] hover:bg-[#F0C09A] transition-colors text-[#0F1B35] font-title text-lg font-bold uppercase px-8 py-4 rounded-lg"
        >
          Réserver un appel avec Adrian →
        </a>
      </div>
    )
  }

  return (
    <div className="text-center max-w-lg mx-auto">
      <div className="bg-[#D9706A]/10 border border-[#D9706A]/30 rounded-xl p-8 mb-6">
        <p className="font-title text-2xl font-bold text-[#D9706A] uppercase mb-3">
          Votre énergie a besoin d'attention
        </p>
        <p className="text-[#8A9BB5]">
          {prenom}, vos résultats montrent un épuisement profond. Vous méritez un soutien adapté. Ne laissez pas cette situation s'installer — un premier échange peut changer la trajectoire.
        </p>
      </div>
      <a
        href={CAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#D9706A] hover:bg-[#E08080] transition-colors text-white font-title text-lg font-bold uppercase px-8 py-4 rounded-lg shadow-lg animate-pulse"
      >
        Parler à Adrian maintenant →
      </a>
    </div>
  )
}

export { GOOGLE_REVIEW_LINK }
