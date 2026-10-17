export default function CTASection({ globalScore, prenom }) {
  const vitality = 100 - globalScore

  if (vitality >= 60) {
    return (
      <div className="text-center max-w-lg mx-auto">
        <div className="bg-[#4CAF82]/10 border border-[#4CAF82]/30 rounded-xl p-8">
          <p className="font-title text-2xl font-bold text-[#4CAF82] uppercase mb-4">
            Votre énergie semble préservée
          </p>
          <p className="text-[#8A9BB5] leading-relaxed mb-4">
            {prenom ? `${prenom}, vos` : 'Vos'} réponses suggèrent que plusieurs dimensions de votre équilibre sont actuellement bien préservées. C'est une bonne occasion de reconnaître ce qui contribue à votre vitalité et de réfléchir à la manière de la soutenir dans la durée.
          </p>
          <p className="text-[#8A9BB5] leading-relaxed text-sm">
            Dans les prochains jours, je vous proposerai quelques pratiques et pistes de réflexion à découvrir à votre rythme. Vous pourrez choisir celles qui vous conviennent.
          </p>
        </div>
      </div>
    )
  }

  if (vitality >= 30) {
    return (
      <div className="text-center max-w-lg mx-auto">
        <div className="bg-[#E8A87C]/10 border border-[#E8A87C]/30 rounded-xl p-8">
          <p className="font-title text-2xl font-bold text-[#E8A87C] uppercase mb-4">
            Votre énergie mérite un peu d'attention
          </p>
          <p className="text-[#8A9BB5] leading-relaxed mb-4">
            {prenom ? `${prenom}, vos` : 'Vos'} réponses font apparaître quelques dimensions qui pourraient mériter davantage d'attention dans votre quotidien. Ce n'est pas nécessairement le signe d'un problème important — c'est surtout une invitation à prendre un peu de recul et à écouter ce que vous ressentez.
          </p>
          <p className="text-[#8A9BB5] leading-relaxed text-sm">
            Dans les prochains jours, je vous partagerai quelques pratiques simples pour faire une pause et explorer ce qui pourrait vous aider à préserver votre équilibre, sans ajouter une obligation de plus à votre journée.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center max-w-lg mx-auto">
      <div className="bg-[#D9706A]/10 border border-[#D9706A]/30 rounded-xl p-8">
        <p className="font-title text-2xl font-bold text-[#D9706A] uppercase mb-4">
          Votre énergie mérite de l'attention
        </p>
        <p className="text-[#8A9BB5] leading-relaxed mb-4">
          {prenom ? `${prenom}, vos` : 'Vos'} réponses font ressortir plusieurs signes de fatigue ou de tension qui méritent votre attention. Lorsque l'on mobilise beaucoup d'énergie au quotidien, il peut devenir difficile de prendre du recul ou simplement de sentir ce dont on a besoin.
        </p>
        <p className="text-[#8A9BB5] leading-relaxed text-sm">
          Vous n'avez pas besoin de tout régler aujourd'hui. Dans les prochains jours, je vous proposerai quelques ressources courtes et facultatives pour prendre un moment pour vous et explorer des pistes à votre rythme.
        </p>
      </div>
    </div>
  )
}
