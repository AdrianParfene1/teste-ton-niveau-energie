export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="font-subtitle text-[#8A9BB5] text-lg mb-4">Adrian Parfene • Master your energy, embrace the flow</p>

        <h1 className="font-title text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
          Teste ton niveau<br />
          <span className="text-[#4A6FA5]">d'énergie</span>
        </h1>

        <p className="font-subtitle text-xl text-[#8A9BB5] mb-4 italic">
          Un test de 5 minutes pour révéler ce que votre corps tente de vous dire.
        </p>

        <p className="text-[#8A9BB5] text-base mb-10 max-w-lg mx-auto">
          48 questions · 6 dimensions · Résultats personnalisés instantanés.
          Aucune inscription requise avant le test.
        </p>

        <button
          onClick={onStart}
          className="bg-[#4A6FA5] hover:bg-[#5A82BE] transition-colors text-white font-title text-xl font-bold uppercase px-10 py-4 rounded-lg shadow-lg"
        >
          Commencer le test (5 min)
        </button>

        <p className="text-[#8A9BB5] text-xs mt-6">
          Gratuit · Confidentiel · Résultats envoyés par email
        </p>
      </div>
    </div>
  )
}
