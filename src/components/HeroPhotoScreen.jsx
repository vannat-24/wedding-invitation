import { useState, useEffect } from 'react'
import GoldenHeartKbach from './GoldenHeartKbach'

export default function HeroPhotoScreen({ data, lang, onScrollDown }) {
  const { couple, event } = data
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
    <section
      id="hero-photo-screen"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center text-center overflow-hidden shrink-0 select-none pb-20"
    >
      {/* 1. Full-bleed Pre-Wedding Background Photo (photo-head.jfif) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-100"
        style={{
          backgroundImage: "url('/images/gallery/photo-head.jfif')",
        }}
      />

      {/* 2. Cinematic Gradient Overlays (Ensures high contrast & readable text) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-black/90 pointer-events-none z-10" />

      {/* 3. Top Header: Golden Kbach Crown Frame + Title + Golden Heart Centered in X */}
      <div className="relative z-20 pt-7 px-4 w-full flex flex-col items-center animate-fade-in select-none">
        {/* Top Ornate Khmer Kbach Crown Pediment */}
        <div className="w-44 sm:w-52 h-auto pointer-events-none mb-0.5">
          <img
            src="/images/ornaments/gold-frame-top.png"
            alt="Golden Kbach Crown"
            className="w-full h-auto object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Auspicious Wedding Union Title */}
        <h1 className="font-moul text-[18px] sm:text-[21px] text-[#ffeaa7] gold-gradient-shimmer drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] tracking-wide leading-relaxed text-center">
          {lang === 'km' ? 'សិរីមង្គលអាពាហ៍ពិពាហ៍' : 'Auspicious Wedding Union'}
        </h1>

        {/* Golden Heart with Khmer Kbach and Couple Names - Perfectly Centered in Direction X & Less Small */}
        <div className="mt-1 w-full flex justify-center items-center">
          <GoldenHeartKbach couple={couple} lang={lang} size="hero" />
        </div>
      </div>

      {/* 4. Center Spacer: Completely leaves the couple's faces, smiles and outfits clear & unobstructed! */}
      <div className="flex-1 min-h-[140px] pointer-events-none" />

      {/* 5. Center-Lower Content: Honorific, Golden Guest Badge, Date & Scroll Down Button */}
      <div className="relative z-20 px-4 w-full flex flex-col items-center space-y-2.5">
        {/* Honorific Script */}
        <p className="font-moul text-[13px] text-[#ffeaa7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
          {lang === 'km' ? 'សូមគោរពអញ្ជើញ' : 'Cordially Invites'}
        </p>

        {/* ORNATE GOLDEN GUEST BADGE */}
        <div className="relative w-full max-w-[290px] mx-auto filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)]">
          <div className="relative py-2 px-6 rounded-full bg-gradient-to-b from-[#ffe599] via-[#d4af37] to-[#80500e] p-[2px] shadow-lg">
            {/* Wing Embellishments */}
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-amber-300 text-sm font-serif">
              ❖
            </span>
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-amber-300 text-sm font-serif">
              ❖
            </span>

            {/* Inner Cream Silk Surface */}
            <div className="w-full py-1.5 px-4 rounded-full bg-gradient-to-b from-[#fffdf5] via-[#faeed0] to-[#ebd18c] border border-amber-300/80 shadow-inner flex items-center justify-center">
              <span className="font-moul text-[13.5px] sm:text-[14.5px] text-[#5c3e0e] tracking-wide truncate">
                {guestName}
              </span>
            </div>
          </div>
        </div>

        {/* Date & Time Line */}
        <div className="space-y-0.5 text-center">
          <p className="font-kantumruy font-semibold text-[11.5px] text-amber-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            {lang === 'km' ? event.dateLineKh : event.dateLineEn}
          </p>
          <p className="font-kantumruy text-[10px] text-amber-200/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {lang === 'km' ? event.venueKh : event.venueEn}
          </p>
        </div>

        {/* SCROLL DOWN INDICATOR BUTTON */}
        <button
          onClick={() => onScrollDown('formal-invitation-section')}
          className="mt-1 px-6 py-2 rounded-2xl bg-black/60 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center space-x-2.5 shadow-2xl active:scale-95 transition-all cursor-pointer animate-bounce"
          style={{ animationDuration: '2.4s' }}
        >
          <span className="text-xl">👆</span>
          <div className="text-left leading-tight">
            <p className="text-[11px] font-semibold font-kantumruy tracking-wide">
              {lang === 'km' ? 'សូមអូសចុះក្រោម' : 'Please Scroll Down'}
            </p>
            <p className="text-[9px] text-neutral-300 font-sans tracking-wider">Scroll down</p>
          </div>
        </button>
      </div>
    </section>
  )
}
