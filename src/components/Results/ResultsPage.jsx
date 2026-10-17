import ScoreRing from './ScoreRing'
import DimensionBars from './DimensionBars'
import CTASection from './CTASection'
import GoogleReviewModal from '../GoogleReviewModal'

export default function ResultsPage({ scores, userInfo }) {
  const { globalScore, dimensionScores } = scores
  const showGoogleReview = (100 - globalScore) >= 80

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-subtitle text-[#8A9BB5] text-lg italic mb-2">
            Bonjour {userInfo.prenom}
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-white uppercase">
            Votre bilan énergétique
          </h2>
        </div>

        {/* Score global animé */}
        <div className="flex justify-center">
          <ScoreRing globalScore={globalScore} />
        </div>

        {/* 6 dimensions */}
        <DimensionBars dimensionScores={dimensionScores} />

        {/* Séparateur */}
        <div className="border-t border-[#1A2A4A] mb-10" />

        {/* CTA selon le score */}
        <CTASection globalScore={globalScore} prenom={userInfo.prenom} />

        {/* Signature */}
        <p className="text-center text-[#8A9BB5] text-xs mt-16">
          Test conçu par Adrian Parfene · Yoga, Méditation & Leadership
        </p>
      </div>

      {/* Modal avis Google (conditionnel) */}
      {showGoogleReview && <GoogleReviewModal />}
    </div>
  )
}
