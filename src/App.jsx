import { useState } from 'react'
import LandingPage from './components/LandingPage'
import QuizEngine from './components/Quiz/QuizEngine'
import EmailGate from './components/EmailGate'
import ResultsPage from './components/Results/ResultsPage'
import { computeScores } from './utils/scoring'

const STEPS = {
  LANDING: 'landing',
  QUIZ: 'quiz',
  EMAIL: 'email',
  RESULTS: 'results',
}

export default function App() {
  const [step, setStep] = useState(STEPS.LANDING)
  const [scores, setScores] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  function handleQuizComplete(answers) {
    const computed = computeScores(answers)
    setScores(computed)
    setStep(STEPS.EMAIL)
  }

  function handleEmailComplete(info) {
    setUserInfo(info)
    setStep(STEPS.RESULTS)
  }

  return (
    <div className="min-h-screen bg-[#0F1B35]">
      {step === STEPS.LANDING && (
        <LandingPage onStart={() => setStep(STEPS.QUIZ)} />
      )}
      {step === STEPS.QUIZ && (
        <QuizEngine onComplete={handleQuizComplete} />
      )}
      {step === STEPS.EMAIL && scores && (
        <EmailGate scores={scores} onComplete={handleEmailComplete} />
      )}
      {step === STEPS.RESULTS && scores && userInfo && (
        <ResultsPage scores={scores} userInfo={userInfo} />
      )}
    </div>
  )
}
