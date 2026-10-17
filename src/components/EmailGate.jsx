import { useState } from 'react'
import { createBrevoContact, sendResultsEmail } from '../utils/brevo'

export default function EmailGate({ scores, onComplete }) {
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!prenom.trim() || !nom.trim() || !email.trim()) return

    setLoading(true)
    setError('')

    const templateId = import.meta.env.VITE_BREVO_TEMPLATE_ID
      ? parseInt(import.meta.env.VITE_BREVO_TEMPLATE_ID)
      : null

    // Brevo non-bloquant : l'utilisateur voit ses résultats même si l'envoi échoue
    Promise.all([
      createBrevoContact({
        prenom: prenom.trim(),
        nom: nom.trim(),
        email: email.trim(),
        globalScore: scores.globalScore,
        dimensionScores: scores.dimensionScores,
      }).catch(err => console.error('Brevo contact error:', err)),
      templateId
        ? sendResultsEmail({
            prenom: prenom.trim(),
            nom: nom.trim(),
            email: email.trim(),
            globalScore: scores.globalScore,
            dimensionScores: scores.dimensionScores,
            templateId,
          }).catch(err => console.error('Brevo email error:', err))
        : Promise.resolve(),
    ])

    setLoading(false)
    onComplete({ prenom: prenom.trim(), nom: nom.trim(), email: email.trim() })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#4CAF82]/20 text-[#4CAF82] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ✓ Test complété — 48 questions
          </div>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            Vos résultats sont prêts
          </h2>
          <p className="text-[#8A9BB5]">
            Entrez vos coordonnées pour recevoir votre analyse personnalisée et les prochaines étapes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={prenom}
              onChange={e => setPrenom(e.target.value)}
              placeholder="Prénom"
              required
              className="w-full bg-[#1A2A4A] border border-[#1A2A4A] focus:border-[#4A6FA5] text-white placeholder-[#8A9BB5] rounded-lg px-4 py-3 outline-none transition-colors"
            />
            <input
              type="text"
              value={nom}
              onChange={e => setNom(e.target.value)}
              placeholder="Nom"
              required
              className="w-full bg-[#1A2A4A] border border-[#1A2A4A] focus:border-[#4A6FA5] text-white placeholder-[#8A9BB5] rounded-lg px-4 py-3 outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="w-full bg-[#1A2A4A] border border-[#1A2A4A] focus:border-[#4A6FA5] text-white placeholder-[#8A9BB5] rounded-lg px-4 py-3 outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-[#D9706A] text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !prenom.trim() || !nom.trim() || !email.trim()}
            className="w-full bg-[#4A6FA5] hover:bg-[#5A82BE] disabled:opacity-50 transition-colors text-white font-title text-lg font-bold uppercase px-6 py-4 rounded-lg"
          >
            {loading ? 'Envoi en cours...' : 'Recevoir mes résultats →'}
          </button>
        </form>

        <p className="text-[#8A9BB5] text-xs text-center mt-4">
          En soumettant ce formulaire, vous acceptez notre{' '}
          <a href="/privacy" className="underline hover:text-white transition-colors">
            politique de confidentialité
          </a>. Aucun spam.
        </p>
      </div>
    </div>
  )
}
