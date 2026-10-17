import { useEffect, useState } from 'react'
import { getDifficultyColor } from '../../utils/scoring'

export default function ScoreRing({ globalScore }) {
  const [animated, setAnimated] = useState(0)
  const vitality = 100 - globalScore
  const color = getDifficultyColor(globalScore)

  const radius = 80
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(globalScore), 100)
    return () => clearTimeout(timer)
  }, [globalScore])

  const strokeDashoffset = circumference - (animated / 100) * circumference

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          {/* Background track */}
          <circle
            cx="100" cy="100" r={radius}
            fill="none"
            stroke="#1A2A4A"
            strokeWidth="12"
          />
          {/* Animated arc */}
          <circle
            cx="100" cy="100" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-title text-5xl font-bold text-white">{vitality}%</span>
          <span className="text-[#8A9BB5] text-xs mt-1">vitalité</span>
        </div>
      </div>

      <p className="font-subtitle italic text-[#8A9BB5] mt-4">
        {vitality >= 60
          ? 'Votre énergie semble préservée'
          : vitality >= 30
            ? 'Votre énergie mérite un peu d\'attention'
            : 'Votre énergie mérite de l\'attention'}
      </p>
    </div>
  )
}
