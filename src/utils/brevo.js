const BREVO_API_URL = 'https://api.brevo.com/v3'
const API_KEY = import.meta.env.VITE_BREVO_API_KEY

export async function createBrevoContact({ prenom, nom, email, globalScore, dimensionScores }) {
  const response = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      email,
      attributes: {
        PRENOM: prenom,
        NOM: nom,
        SCORE_GLOBAL: globalScore,
        SCORE_EPUISEMENT: dimensionScores.exhaustion,
        SCORE_DISTANCE: dimensionScores.mentalDistance,
        SCORE_EMOTIONNEL: dimensionScores.emotional,
        SCORE_COGNITIF: dimensionScores.cognitive,
        SCORE_SECONDAIRE: dimensionScores.secondary,
        SCORE_CORPS: dimensionScores.body,
      },
      listIds: [],
      updateEnabled: true,
      tags: ['energie-test'],
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Erreur lors de la création du contact')
  }

  return response.json()
}

export async function sendResultsEmail({ prenom, nom, email, globalScore, dimensionScores, templateId }) {
  if (!templateId) return

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      to: [{ email, name: `${prenom} ${nom}` }],
      templateId,
      params: {
        PRENOM: prenom,
        NOM: nom,
        SCORE_GLOBAL: globalScore,
        VITALITE: 100 - globalScore,
        SCORE_EPUISEMENT: dimensionScores.exhaustion,
        SCORE_DISTANCE: dimensionScores.mentalDistance,
        SCORE_EMOTIONNEL: dimensionScores.emotional,
        SCORE_COGNITIF: dimensionScores.cognitive,
        SCORE_SECONDAIRE: dimensionScores.secondary,
        SCORE_CORPS: dimensionScores.body,
      },
    }),
  })

  if (!response.ok) {
    console.error('Erreur envoi email Brevo')
  }
}
