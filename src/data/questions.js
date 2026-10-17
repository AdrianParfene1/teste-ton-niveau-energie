export const DIMENSIONS = {
  exhaustion: {
    id: 'exhaustion',
    label: 'Épuisement',
    maxScore: 50,
  },
  mentalDistance: {
    id: 'mentalDistance',
    label: 'Distance mentale',
    maxScore: 35,
  },
  emotional: {
    id: 'emotional',
    label: 'Difficultés émotionnelles',
    maxScore: 35,
  },
  cognitive: {
    id: 'cognitive',
    label: 'Difficultés cognitives',
    maxScore: 35,
  },
  secondary: {
    id: 'secondary',
    label: 'Symptômes secondaires',
    maxScore: 60,
  },
  body: {
    id: 'body',
    label: 'Corps & Souffle',
    maxScore: 25,
  },
}

export const questions = [
  // Dimension 1 — Épuisement (10 questions, max 50)
  { id: 1, dimension: 'exhaustion', text: "Je me sens épuisé(e) même après une nuit de sommeil." },
  { id: 2, dimension: 'exhaustion', text: "Mon corps me réclame du repos, mais je n'arrive pas à m'arrêter." },
  { id: 3, dimension: 'exhaustion', text: "Je vis sur mes réserves plutôt que sur mon énergie naturelle." },
  { id: 4, dimension: 'exhaustion', text: "Une journée ordinaire me demande un effort disproportionné." },
  { id: 5, dimension: 'exhaustion', text: "Je me traîne jusqu'au week-end en mode survie." },
  { id: 6, dimension: 'exhaustion', text: "Le soir, je n'ai plus rien à donner — ni à moi, ni aux autres." },
  { id: 7, dimension: 'exhaustion', text: "La fatigue s'accumule de semaine en semaine sans jamais se dissiper." },
  { id: 8, dimension: 'exhaustion', text: "Mon corps réclame des pauses que mon agenda ne m'autorise pas." },
  { id: 9, dimension: 'exhaustion', text: "Je ressens un vide d'énergie qui ne disparaît pas même en vacances." },
  { id: 10, dimension: 'exhaustion', text: "Le matin, ma première pensée est : « Comment vais-je tenir aujourd'hui ? »" },

  // Dimension 2 — Distance mentale (7 questions, max 35)
  { id: 11, dimension: 'mentalDistance', text: "Je fais les choses en mode automatique, sans vraiment y être." },
  { id: 12, dimension: 'mentalDistance', text: "Ce qui m'enthousiasmait autrefois me laisse indifférent(e) aujourd'hui." },
  { id: 13, dimension: 'mentalDistance', text: "Je réalise mes tâches sans vraiment savoir pourquoi elles comptent." },
  { id: 14, dimension: 'mentalDistance', text: "Je me surprends à compter les heures ou les jours jusqu'à la fin." },
  { id: 15, dimension: 'mentalDistance', text: "Je ressens une distance entre moi et les personnes qui m'entourent." },
  { id: 16, dimension: 'mentalDistance', text: "En réunion ou en conversation, je joue un rôle plutôt que d'être vraiment présent(e)." },
  { id: 17, dimension: 'mentalDistance', text: "Une voix intérieure me dit : « À quoi bon ? »" },

  // Dimension 3 — Difficultés émotionnelles (7 questions, max 35)
  { id: 18, dimension: 'emotional', text: "Je réagis de manière disproportionnée à des situations anodines." },
  { id: 19, dimension: 'emotional', text: "Des émotions intenses surgissent sans que je sache vraiment pourquoi." },
  { id: 20, dimension: 'emotional', text: "Je me sens vide émotionnellement, comme à court de ressentis." },
  { id: 21, dimension: 'emotional', text: "Ma patience atteint ses limites beaucoup plus vite qu'avant." },
  { id: 22, dimension: 'emotional', text: "Je ravale des émotions que je n'ose pas exprimer." },
  { id: 23, dimension: 'emotional', text: "Je passe de la tristesse à l'irritabilité sans transition." },
  { id: 24, dimension: 'emotional', text: "J'ai du mal à revenir au calme après un moment de tension." },

  // Dimension 4 — Difficultés cognitives (7 questions, max 35)
  { id: 25, dimension: 'cognitive', text: "Je dois relire plusieurs fois pour comprendre ce que je lis." },
  { id: 26, dimension: 'cognitive', text: "J'oublie des choses importantes que j'aurais retenues facilement avant." },
  { id: 27, dimension: 'cognitive', text: "Je peine à me concentrer plus de quelques minutes sur une tâche." },
  { id: 28, dimension: 'cognitive', text: "Ma créativité et ma capacité à innover se sont réduites." },
  { id: 29, dimension: 'cognitive', text: "Je me sens lent(e) à prendre des décisions, même simples." },
  { id: 30, dimension: 'cognitive', text: "Mon cerveau tourne en boucle sur les mêmes pensées sans avancer." },
  { id: 31, dimension: 'cognitive', text: "Je finis des journées en ayant l'impression de n'avoir rien accompli." },

  // Dimension 5 — Symptômes secondaires (12 questions, max 60)
  { id: 32, dimension: 'secondary', text: "Mon sommeil est agité, peu réparateur ou difficile à trouver." },
  { id: 33, dimension: 'secondary', text: "Je me réveille la nuit avec des pensées qui tournent." },
  { id: 34, dimension: 'secondary', text: "Des tensions physiques s'installent dans mon corps (nuque, dos, mâchoires)." },
  { id: 35, dimension: 'secondary', text: "Je ressens des maux de tête fréquents ou une pression dans le crâne." },
  { id: 36, dimension: 'secondary', text: "Mon système digestif est perturbé (ballonnements, troubles intestinaux)." },
  { id: 37, dimension: 'secondary', text: "Je me nourris de façon désordonnée — trop, pas assez, n'importe quand." },
  { id: 38, dimension: 'secondary', text: "Je consomme caféine, sucre ou alcool pour tenir ou décompresser." },
  { id: 39, dimension: 'secondary', text: "Je tombe plus souvent malade depuis quelques mois." },
  { id: 40, dimension: 'secondary', text: "Mon corps me donne des signaux d'alarme que j'apprends à ignorer." },
  { id: 41, dimension: 'secondary', text: "Je ne trouve plus de plaisir dans des activités qui me ressourçaient." },
  { id: 42, dimension: 'secondary', text: "Je me sens seul(e) même entouré(e) de gens." },
  { id: 43, dimension: 'secondary', text: "L'avenir m'apparaît flou ou sans perspective enthousiasmante." },

  // Dimension 6 — Corps & Souffle (5 questions, max 25)
  { id: 44, dimension: 'body', text: "Je remarque rarement ma respiration au cours d'une journée ordinaire." },
  { id: 45, dimension: 'body', text: "Mon souffle se raccourcit ou se bloque dans les moments de tension." },
  { id: 46, dimension: 'body', text: "Je vis davantage dans ma tête que dans mon corps." },
  { id: 47, dimension: 'body', text: "Je n'arrive pas à me poser, même quand j'en ai le temps." },
  { id: 48, dimension: 'body', text: "Quand je pose une main sur mon cœur, je n'entends rien." },
]

export const LIKERT_LABELS = [
  { value: 1, label: 'Jamais' },
  { value: 2, label: 'Rarement' },
  { value: 3, label: 'Parfois' },
  { value: 4, label: 'Souvent' },
  { value: 5, label: 'Toujours' },
]
