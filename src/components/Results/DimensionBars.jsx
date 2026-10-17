import { useEffect, useState } from 'react'
import { DIMENSIONS } from '../../data/questions'
import { getDifficultyColor } from '../../utils/scoring'

const INTERPRETATIONS = {
  exhaustion: {
    ok: "Votre énergie physique semble bien présente en ce moment. C'est une bonne base.",
    risk: "Votre corps commence à ressentir la fatigue de manière plus régulière. Quelques pauses peuvent faire une vraie différence.",
    alert: "Votre corps vous envoie des signaux de fatigue importants. Prendre soin de votre récupération peut être une première étape utile.",
  },
  mentalDistance: {
    ok: "Vous semblez présent(e) et impliqué(e) dans ce que vous faites au quotidien.",
    risk: "Il peut arriver que vous vous sentiez un peu moins connecté(e) à ce qui vous entoure. Observer ce dont vous avez besoin peut être utile.",
    alert: "Vous ressentez peut-être une certaine distance avec votre quotidien. C'est un signe que quelque chose mérite votre attention.",
  },
  emotional: {
    ok: "Vos émotions semblent bien présentes et accessibles dans votre quotidien.",
    risk: "Vos émotions peuvent être plus intenses ces derniers temps. Ce n'est pas un signe de faiblesse.",
    alert: "Vos émotions semblent demander beaucoup d'espace en ce moment. Prendre un peu de temps pour soi peut aider.",
  },
  cognitive: {
    ok: "Votre clarté mentale et votre concentration semblent bien préservées.",
    risk: "Votre concentration peut vous sembler moins fluide qu'avant. C'est souvent lié à la fatigue globale.",
    alert: "Votre mental semble mobilisé en permanence. Réduire les sollicitations peut libérer de l'espace.",
  },
  secondary: {
    ok: "Votre corps exprime peu de tension ou de stress accumulé en ce moment.",
    risk: "Quelques signaux physiques commencent à se manifester. Votre corps cherche à vous transmettre quelque chose.",
    alert: "Votre corps semble porter une charge significative en ce moment. Ces signaux méritent d'être écoutés avec bienveillance.",
  },
  body: {
    ok: "Vous semblez bien connecté(e) à votre corps et à vos sensations.",
    risk: "Il peut arriver que vous fonctionniez davantage dans votre tête que dans votre corps. Une attention au souffle peut aider.",
    alert: "Vous vivez peut-être surtout dans votre espace mental en ce moment. Revenir au corps, doucement, peut être une ressource précieuse.",
  },
}

function getLevel(score) {
  if (score > 70) return 'alert'
  if (score > 40) return 'risk'
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
