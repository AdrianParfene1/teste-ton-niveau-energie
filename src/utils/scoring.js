import { questions, DIMENSIONS } from '../data/questions'

export function computeScores(answers) {
  const dimensionScores = {}

  for (const dimId of Object.keys(DIMENSIONS)) {
    const dimQuestions = questions.filter(q => q.dimension === dimId)
    const raw = dimQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0)
    const maxPossible = DIMENSIONS[dimId].maxScore
    // percentage of difficulty (higher = worse)
    dimensionScores[dimId] = maxPossible > 0 ? Math.round((raw / maxPossible) * 100) : 0
  }

  // Global score = weighted average (all questions equal weight)
  const totalRaw = Object.values(answers).reduce((sum, v) => sum + v, 0)
  const totalMax = Object.values(DIMENSIONS).reduce((sum, d) => sum + d.maxScore, 0)
  const globalScore = totalMax > 0 ? Math.round((totalRaw / totalMax) * 100) : 0

  return { dimensionScores, globalScore }
}

export function getDifficultyLevel(score) {
  if (score > 70) return 'alert'
  if (score > 40) return 'risk'
  return 'ok'
}

export function getDifficultyColor(score) {
  if (score > 70) return '#D9706A'
  if (score > 40) return '#E8A87C'
  return '#4CAF82'
}

export function getDominantDimension(dimensionScores) {
  return Object.entries(dimensionScores).reduce(
    (max, [dim, score]) => score > max.score ? { dim, score } : max,
    { dim: null, score: -1 }
  )
}

export function getVitalityScore(globalScore) {
  return 100 - globalScore
}

export function getCTAVariant(globalScore) {
  if (globalScore >= 70) return 'urgent'
  if (globalScore >= 40) return 'moderate'
  return 'good'
}
