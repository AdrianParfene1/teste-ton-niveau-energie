export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between text-[#8A9BB5] text-sm mb-2">
        <span>Question {current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-[#1A2A4A] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4A6FA5] rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
