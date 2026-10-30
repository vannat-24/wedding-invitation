import { useState, useEffect } from 'react'
import GoldenHeartKbach from './GoldenHeartKbach'

export default function EnvelopeCover({ couple, onOpen, isOpening }) {
  // Support personalized guest names from URL query params (e.g. ?to=Yulong or ?guest=...)
  const [guestName, setGuestName] = useState('ភ្ញៀវកិត្តិយស')

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const toParam = params.get('to') || params.get('guest') || params.get('name')
      if (toParam && toParam.trim()) {
        setGuestName(toParam.trim())
      }
    } catch (e) {
      console.warn('URL param error:', e)
    }
  }, [])

  return (
    <div
      className={`absolute inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isOpening ? 'envelope-open pointer-events-none' : ''
      }`}
      style={{ perspective: '1200px' }}
    >
      {/* RADIANT INNER LIGHT BEAM (Visible when doors start to open) */}
      {isOpening && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-200/60 to-transparent animate-pulse" />
        </div>
      )}

      {/* LEFT ENVELOPE DOOR */}
      <div
        className={`envelope-door-left absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#825b14] via-[#b6892e] to-[#9a7020] border-r border-amber-200/80 z-20 overflow-hidden flex flex-col justify-between ${
          isOpening ? 'shadow-[inset_-15px_0_30px_rgba(255,245,180,0.85)]' : 'shadow-[4px_0_15px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Left Vertical Traditional Kbach Border */}
        <div className="absolute top-0 bottom-0 left-0 w-7 sm:w-8 bg-gradient-to-r from-amber-950/45 to-transparent flex flex-col items-center justify-around py-4 opacity-85 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-amber-200/90 my-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2 L20 12 L12 22 L4 12 Z M12 6 L7 12 L12 18 L17 12 Z" />
              <circle cx="12" cy="12" r="2" fill="#ffe599" />
            </svg>
          ))}
        </div>

        {/* Left Bottom Corner Kbach */}
        <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none opacity-80">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-200" fill="currentColor">
            <path d="M0,100 L0,40 C10,45 25,60 30,75 C35,90 50,95 60,100 Z" opacity="0.4" />
            <path
              d="M0,100 C20,90 35,75 40,55 C45,35 60,20 80,0 C65,25 45,45 25,70 Z"
              fill="url(#envGoldL)"
            />
            <defs>
              <linearGradient id="envGoldL" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffd976" />
                <stop offset="100%" stopColor="#7a5212" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* RIGHT ENVELOPE DOOR */}
      <div
        className={`envelope-door-right absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#825b14] via-[#b6892e] to-[#9a7020] border-l border-amber-200/80 z-20 overflow-hidden flex flex-col justify-between ${
          isOpening ? 'shadow-[inset_15px_0_30px_rgba(255,245,180,0.85)]' : 'shadow-[-4px_0_15px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Right Vertical Traditional Kbach Border */}
        <div className="absolute top-0 bottom-0 right-0 w-7 sm:w-8 bg-gradient-to-l from-amber-950/45 to-transparent flex flex-col items-center justify-around py-4 opacity-85 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-amber-200/90 my-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2 L20 12 L12 22 L4 12 Z M12 6 L7 12 L12 18 L17 12 Z" />
              <circle cx="12" cy="12" r="2" fill="#ffe599" />
            </svg>
          ))}
        </div>

        {/* Right Bottom Corner Kbach */}
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-80 scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-200" fill="currentColor">
            <path d="M0,100 L0,40 C10,45 25,60 30,75 C35,90 50,95 60,100 Z" opacity="0.4" />
            <path
              d="M0,100 C20,90 35,75 40,55 C45,35 60,20 80,0 C65,25 45,45 25,70 Z"
              fill="url(#envGoldR)"
            />
            <defs>
              <linearGradient id="envGoldR" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffd976" />
                <stop offset="100%" stopColor="#7a5212" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* CENTRAL ENVELOPE CONTENT */}
      <div
        className={`relative z-30 flex flex-col items-center justify-between h-full py-8 px-5 text-center transition-all duration-700 ${
          isOpening ? 'opacity-0 scale-110 filter blur-sm' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top Ornate Calligraphy Title with Kbach Crown */}
        <div className="space-y-1 mt-2 flex flex-col items-center">
          <div className="w-40 sm:w-48 h-auto pointer-events-none mb-0.5">
            <img
              src="/images/ornaments/gold-frame-top.png"
              alt="Kbach Crown"
              className="w-full h-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            />
          </div>
          <h1 className="font-moul text-[22px] sm:text-[24px] text-[#ffeaa7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)] leading-relaxed tracking-wide">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h1>
          <h2 className="font-moul text-[15px] sm:text-[16px] text-amber-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)] leading-tight">
            {couple.groom.nameKh} និង {couple.bride.nameKh}
          </h2>
        </div>

        {/* Center: GOLDEN HEART WITH KHMER KBACH & COUPLE NAMES */}
        <div className="relative my-auto flex flex-col items-center justify-center">
          <GoldenHeartKbach couple={couple} lang="km" size="large" />

          {/* Invitation Honorific Text */}
          <p className="font-moul text-[13.5px] text-[#ffe699] drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.7)] mt-2">
            សូមគោរពអញ្ជើញ
          </p>

          {/* Guest Name Card Badge (Matching reference image) */}
          <div className="mt-2 relative">
            <div className="relative px-6 py-2 bg-gradient-to-r from-[#fbf5e5] via-[#fffdf9] to-[#fbf5e5] rounded-xl border border-amber-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] min-w-[200px] max-w-[280px]">
              <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 text-amber-600 text-xs">❖</span>
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 text-amber-600 text-xs">❖</span>
              <p className="font-kantumruy font-bold text-amber-950 text-sm sm:text-base tracking-wide truncate">
                {guestName}
              </p>
            </div>
          </div>
        </div>

        {/* OPEN INVITATION BUTTON */}
        <div className="mb-2 w-full flex flex-col items-center">
          <button
            onClick={onOpen}
            className="group relative px-7 py-3 rounded-full bg-gradient-to-r from-[#ba8148] via-[#a26831] to-[#8d5420] text-amber-50 font-kantumruy font-bold text-sm shadow-[0_6px_25px_rgba(90,45,10,0.55)] border-2 border-amber-300/80 hover:from-[#c98f56] hover:to-[#9c602a] active:scale-95 transition-all cursor-pointer flex items-center space-x-2 animate-bounce"
            style={{ animationDuration: '2.5s' }}
          >
            <span className="tracking-wide text-[13.5px] drop-shadow-sm font-semibold">
              បើកលិខិតអញ្ជើញ
            </span>
            <span className="text-base group-hover:scale-125 transition-transform">💌</span>
          </button>
          <span className="text-[10px] text-amber-200/80 font-kantumruy mt-2 tracking-wide">
            ចុចដើម្បីបើកសំបុត្រមង្គលការ
          </span>
        </div>
      </div>
    </div>
  )
}
