export default function GoldenTitleBanner({ couple, lang }) {
  return (
    <div className="w-full max-w-[340px] mx-auto flex flex-col items-center text-center py-2 animate-fade-in select-none">
      {/* Top Ornate Khmer Kbach Crown Pediment (from user provided image) */}
      <div className="w-48 sm:w-56 h-auto pointer-events-none mb-1">
        <img
          src="/images/ornaments/gold-frame-top.png"
          alt="Golden Kbach Crown"
          className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Center Words: សិរីមង្គលអាពាហ៍ពិពាហ៍ & Couple Names */}
      <div className="py-0.5 space-y-1">
        <h1 className="font-moul text-[19px] sm:text-[22px] text-[#ffeaa7] gold-gradient-shimmer drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] tracking-wide leading-relaxed">
          {lang === 'km' ? 'សិរីមង្គលអាពាហ៍ពិពាហ៍' : 'Auspicious Wedding Union'}
        </h1>
        <p className="font-moul text-[13px] sm:text-[14.5px] text-amber-200/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight">
          {lang === 'km'
            ? `${couple.groom.nameKh} និង ${couple.bride.nameKh}`
            : `${couple.groom.nameEn} & ${couple.bride.nameEn}`}
        </p>
      </div>

      {/* Bottom Ornate Khmer Kbach Base (from user provided image) */}
      <div className="w-48 sm:w-56 h-auto pointer-events-none mt-1">
        <img
          src="/images/ornaments/gold-frame-bottom.png"
          alt="Golden Kbach Base"
          className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        />
      </div>
    </div>
  )
}

