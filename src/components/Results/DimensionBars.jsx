import { useEffect, useState } from 'react'
import { DIMENSIONS } from '../../data/questions'
import { getDifficultyColor } from '../../utils/scoring'

const INTERPRETATIONS = {
  exhaustion: {
    ok: "Votre réservoir d'énergie physique est en bon état.",
    risk: "Votre corps accumule de la fatigue. Accordez-vous des pauses intentionnelles.",
    alert: "Votre épuisement est profond. Il est temps d'agir avant que le corps n'impose lui-même l'arrêt.",
  },
  mentalDistance: {
    ok: "Vous êtes présent(e) et engagé(e) dans ce que vous faites.",
    risk: "Un détachement progressif s'installe. Reconnectez-vous à ce qui a du sens pour vous.",
    alert: "Vous fonctionnez en pilote automatique. Cette distance est un signal d'alarme à prendre au sérieux.",
  },
  emotional: {
    ok: "Votre vie émotionnelle est équilibrée et régulée.",
    risk: "Vos émotions deviennent plus difficiles à gérer. Explorez ce qui se passe en dessous.",
    alert: "Vos émotions sont débordées. Un accompagnement peut vous aider à retrouver une stabilité.",
  },
  cognitive: {
    ok: "Votre clarté mentale et votre concentration sont bien préservées.",
    risk: "Votre capacité de concentration et de décision commence à fléchir.",
    alert: "Votre cerveau est en surcharge. La concentration et la créativité sont sévèrement impactées.",
  },
  secondary: {
    ok: "Votre corps exprime peu de symptômes de stress chronique.",
    risk: "Des signaux physiques commencent à apparaître. Votre corps parle — écoutez-le.",
    alert: "Votre corps porte une charge importante. Ces symptômes ne doivent pas être ignorés.",
  },
  body: {
    ok: "Vous êtes connecté(e) à votre corps et à votre souffle.",
    risk: "Vous vous déconnectez progressivement de vos sensations corporelles.",
    alert: "Vous vivez presque exclusivement dans votre tête. Reconnecter corps et souffle est urgent.",
  },
}

function getLevel(score) {
  if (score >= 80) return 'alert'
  if (score >= 60) return 'risk'
  return 'ok'
}

function DimensionBar({ dimId, score }) {
  const [width, setWidth] = useState(0)
  const color = getDifficultyColor(score)
  const level = getLevel(score)
  const label = DIMENSIONS[dimId]?.label
  const interpretation = INTERPRETATIONS[dimId]?.[level]

  useEffect(() => {
    const t = setTimeout(() => setWidth(score), 150)
    return () => clearTimeout(t)
  }, [score])

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-white font-medium text-sm">{label}</span>
        <span className="font-title font-bold text-sm" style={{ color }}>
          {score}%
        </span>
      </div>
      <div className="h-2 bg-[#1A2A4A] rounded-full overflow-hidden mb-2">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-[#8A9BB5] text-xs leading-relaxed">{interpretation}</p>
    </div>
  )
}

export default function DimensionBars({ dimensionScores }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <h3 className="font-title text-xl font-bold text-white uppercase mb-6">
        Vos 6 dimensions
      </h3>
      {Object.entries(dimensionScores).map(([dimId, score]) => (
        <DimensionBar key={dimId} dimId={dimId} score={score} />
      ))}
    </div>
  )
}
