import { useState, useEffect } from 'react'
import { questions } from '../../data/questions'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'

const STORAGE_KEY = 'tne_quiz_answers'

function loadSavedAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  } catch {}
}

export default function QuizEngine({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(loadSavedAnswers)

  const total = questions.length
  const current = questions[currentIndex]
  const currentAnswer = answers[current.id]

  useEffect(() => {
    saveAnswers(answers)
  }, [answers])

  function handleAnswer(value) {
    const updated = { ...answers, [current.id]: value }
    setAnswers(updated)

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCurrentIndex(i => i + 1)
      } else {
        localStorage.removeItem(STORAGE_KEY)
        onComplete(updated)
      }
    }, 300)
  }

  function goBack() {
    if (currentIndex > 0) setCurrentIndex(i => i - 1)
  }

  function goForward() {
    if (currentAnswer && currentIndex < total - 1) setCurrentIndex(i => i + 1)
    if (currentAnswer && currentIndex === total - 1) {
      localStorage.removeItem(STORAGE_KEY)
      onComplete(answers)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <ProgressBar current={currentIndex + 1} total={total} />

        <QuestionCard
          question={current}
          value={currentAnswer}
          onChange={handleAnswer}
        />

        <div className="flex justify-between mt-10">
          <button
            onClick={goBack}
            disabled={currentIndex === 0}
            className="text-[#8A9BB5] hover:text-white transition-colors disabled:opacity-30 text-sm"
          >
            ← Précédent
          </button>

          {currentAnswer && (
            <button
              onClick={goForward}
              className="text-[#4A6FA5] hover:text-[#5A82BE] transition-colors font-medium text-sm"
            >
              {currentIndex === total - 1 ? 'Voir mes résultats →' : 'Suivant →'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
