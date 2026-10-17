import { LIKERT_LABELS, DIMENSIONS } from '../../data/questions'

export default function QuestionCard({ question, value, onChange }) {
  const dimension = DIMENSIONS[question.dimension]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="font-subtitle text-[#8A9BB5] text-sm italic mb-4">
        {dimension?.label}
      </p>

      <p className="font-body text-white text-xl md:text-2xl leading-relaxed mb-10">
        {question.text}
      </p>

      <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
        {LIKERT_LABELS.map(({ value: v, label }) => (
          <button
            key={v}
            onClick={() => onChange(v)}
            className={`
              flex flex-col items-center gap-1 px-3 py-3 rounded-lg border transition-all duration-150 min-w-[60px]
              ${value === v
                ? 'border-[#4A6FA5] bg-[#4A6FA5]/20 text-white'
                : 'border-[#1A2A4A] bg-[#1A2A4A] text-[#8A9BB5] hover:border-[#4A6FA5]/50'
              }
            `}
          >
            <span className="font-title text-2xl font-bold">{v}</span>
            <span className="text-xs text-center leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
