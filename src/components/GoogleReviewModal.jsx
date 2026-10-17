import { useState } from 'react'

const GOOGLE_REVIEW_LINK = import.meta.env.VITE_GOOGLE_REVIEW_LINK || '#'

export default function GoogleReviewModal() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50 px-4 pb-4">
      <div className="bg-[#1A2A4A] border border-[#4A6FA5]/30 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
        <div className="text-4xl mb-4">⭐</div>
        <h3 className="font-title text-xl font-bold text-white uppercase mb-3">
          Vous avez apprécié ce test ?
        </h3>
        <p className="text-[#8A9BB5] text-sm mb-6">
          Un avis Google aide d'autres professionnels à découvrir cet outil et à prendre soin d'eux.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A6FA5] hover:bg-[#5A82BE] transition-colors text-white font-title font-bold uppercase px-6 py-3 rounded-lg text-sm"
          >
            Laisser un avis Google →
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-[#8A9BB5] hover:text-white transition-colors text-sm"
          >
            Non merci
          </button>
        </div>
      </div>
    </div>
  )
}
