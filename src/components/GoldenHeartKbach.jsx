export default function GoldenHeartKbach({ couple, lang, size = 'default' }) {
  // Balanced sizing: grand, prestigious, spacious ("less small"), and strictly centered along the X axis
  const sizeClass =
    size === 'hero'
      ? 'w-[270px] h-[270px] sm:w-[300px] sm:h-[300px]'
      : size === 'large'
      ? 'w-[260px] h-[260px] sm:w-[290px] sm:h-[290px]'
      : size === 'compact'
      ? 'w-[230px] h-[230px] sm:w-[250px] sm:h-[250px]'
      : 'w-[250px] h-[250px] sm:w-[280px] sm:h-[280px]'

  return (
    <div
      className={`relative mx-auto flex items-center justify-center filter drop-shadow-[0_10px_35px_rgba(212,175,55,0.5)] select-none ${sizeClass}`}
      style={{ marginInline: 'auto' }}
    >
      {/* 1. Ambient Golden Halo Glow */}
      <div className="absolute inset-4 bg-amber-400/25 rounded-full blur-2xl animate-pulse pointer-events-none" />

      {/* 2. Ornate 100% Symmetrically Centered Khmer Kbach Heart SVG */}
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full block mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Rich 24K Gold Metallic Gradients */}
          <linearGradient id="symHeartGoldL" x1="0" y1="0" x2="120" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="18%" stopColor="#ffe270" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="82%" stopColor="#946618" />
            <stop offset="100%" stopColor="#54380a" />
          </linearGradient>

          <linearGradient id="symHeartGoldR" x1="240" y1="0" x2="120" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="18%" stopColor="#ffe270" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="82%" stopColor="#946618" />
            <stop offset="100%" stopColor="#54380a" />
          </linearGradient>

          {/* Translucent Golden Silk Center Glow */}
          <radialGradient id="symHeartBackdrop" cx="120" cy="115" r="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="55%" stopColor="#fffcf2" stopOpacity="0.90" />
            <stop offset="82%" stopColor="#fcedc7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ecd498" stopOpacity="0.35" />
          </radialGradient>

          {/* REUSABLE HALF-HEART WITH KBACH (Mirrored across x=120 for 100% Horizontal Symmetry) */}
          <g id="kbach-half-wing">
            {/* Outer Flame Tendril Lobe (Top Lobes to Tip) */}
            <path
              d="M120,44 C104,20 64,18 42,42 C20,66 24,100 42,128 C62,158 100,186 120,206 C110,188 80,164 64,138 C50,116 46,90 58,68 C70,46 100,44 120,60 Z"
              fill="url(#symHeartGoldL)"
            />
            {/* Flame Scroll Accent 1 (ភ្ញីភ្លើង ក្បាលលើ) */}
            <path
              d="M42,42 C26,26 44,10 64,16 C50,24 52,36 58,40 C44,38 42,46 42,42 Z"
              fill="url(#symHeartGoldL)"
            />
            {/* Flame Scroll Accent 2 (ភ្ញីភ្លើង ចង្កេះ) */}
            <path
              d="M26,78 C10,64 24,44 40,52 C28,60 30,74 42,76 C28,76 26,82 26,78 Z"
              fill="url(#symHeartGoldL)"
            />
            {/* Flame Scroll Accent 3 (ភ្ញីភ្លើង ចំហៀងក្រោម) */}
            <path
              d="M34,120 C18,106 32,88 52,96 C38,102 40,116 54,118 C38,120 34,126 34,120 Z"
              fill="url(#symHeartGoldL)"
            />
            {/* Flame Scroll Accent 4 (ភ្ញីភ្លើង ត្រគាកក្រោម) */}
            <path
              d="M60,160 C40,148 58,128 78,136 C64,144 66,156 80,158 C64,160 58,166 60,160 Z"
              fill="url(#symHeartGoldL)"
            />
            {/* Inner Filigree Rib Line */}
            <path
              d="M120,54 C104,32 68,30 52,50 C36,70 40,98 54,124 C72,154 104,182 120,200"
              stroke="#fff9db"
              strokeWidth="1.3"
              strokeDasharray="2, 2.5"
              fill="none"
              opacity="0.88"
            />
            {/* Gold Pearl Accents along Margin */}
            <circle cx="42" cy="42" r="3" fill="#ffffff" stroke="#b8860b" strokeWidth="0.8" />
            <circle cx="26" cy="78" r="2.8" fill="#ffeaa7" stroke="#b8860b" strokeWidth="0.8" />
            <circle cx="34" cy="120" r="2.8" fill="#ffeaa7" stroke="#b8860b" strokeWidth="0.8" />
            <circle cx="60" cy="160" r="2.5" fill="#ffeaa7" stroke="#b8860b" strokeWidth="0.8" />
          </g>
        </defs>

        {/* Outer Circular Celestial Orbit Ring */}
        <circle cx="120" cy="120" r="114" stroke="#d4af37" strokeWidth="1" strokeDasharray="3, 4" opacity="0.65" />
        <circle cx="120" cy="6" r="4" fill="#ffd700" stroke="#8f6318" strokeWidth="1" />
        <circle cx="120" cy="234" r="4" fill="#ffd700" stroke="#8f6318" strokeWidth="1" />
        <circle cx="6" cy="120" r="4" fill="#ffd700" stroke="#8f6318" strokeWidth="1" />
        <circle cx="234" cy="120" r="4" fill="#ffd700" stroke="#8f6318" strokeWidth="1" />

        {/* Unified Translucent Backdrop Silk (Symmetric across x=120) */}
        <path
          d="M120,50 C104,22 52,22 36,56 C20,90 50,140 120,196 C190,140 220,90 204,56 C188,22 136,22 120,50 Z"
          fill="url(#symHeartBackdrop)"
        />

        {/* LEFT WING (Original) */}
        <use href="#kbach-half-wing" />

        {/* RIGHT WING (Mathematically Mirrored across x=120 for 100% Horizontal Symmetry) */}
        <g transform="translate(240, 0) scale(-1, 1)">
          <use href="#kbach-half-wing" fill="url(#symHeartGoldR)" />
        </g>

        {/* Top Central Crown Finial (កំពូលចុងលើ - Centered at x=120) */}
        <path
          d="M120,20 C125,30 130,34 120,44 C110,34 115,30 120,20 Z"
          fill="#ffd700"
          stroke="#8f6318"
          strokeWidth="1.2"
        />
        <circle cx="120" cy="16" r="3.5" fill="#ffffff" stroke="#b88628" strokeWidth="1" />

        {/* Bottom Central Lotus Finial (ក្បាច់ចុងក្រោម - Centered at x=120) */}
        <path
          d="M120,202 C115,214 110,218 120,228 C130,218 125,214 120,202 Z"
          fill="#ffd700"
          stroke="#8f6318"
          strokeWidth="1.2"
        />
        <circle cx="120" cy="230" r="3.5" fill="#ffffff" stroke="#b88628" strokeWidth="1" />
      </svg>

      {/* 3. CENTER CONTENT (Strictly Centered horizontally along direction X and vertically in direction Y) */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none">
        {/* Royal Monogram Initials */}
        <div className="flex items-center justify-center leading-none">
          <span className="font-moul text-[26px] sm:text-[30px] gold-gradient-text tracking-normal drop-shadow-sm">
            {couple.groom.initialKh}
          </span>
          <span className="font-moul text-[22px] sm:text-[26px] text-amber-700/90 -ml-1">
            {couple.bride.initialKh}
          </span>
        </div>

        {/* Golden Ornamental Divider */}
        <div className="flex items-center justify-center space-x-2 my-1.5 opacity-85">
          <span className="h-[1.5px] w-8 bg-gradient-to-r from-transparent via-amber-500 to-amber-700" />
          <span className="text-[11px] text-amber-700">❦</span>
          <span className="h-[1.5px] w-8 bg-gradient-to-l from-transparent via-amber-500 to-amber-700" />
        </div>

        {/* Paired Groom & Bride Names - Roomy, Beautiful & Legible */}
        <div className="space-y-1 w-full max-w-[190px] text-center">
          <p className="font-moul text-[12.5px] sm:text-[14px] text-[#54380a] leading-tight drop-shadow-xs truncate">
            {lang === 'km' ? couple.groom.nameKh : couple.groom.nameEn}
          </p>
          <span className="text-[11px] text-amber-700 font-bold block leading-none">&amp;</span>
          <p className="font-moul text-[12.5px] sm:text-[14px] text-[#54380a] leading-tight drop-shadow-xs truncate">
            {lang === 'km' ? couple.bride.nameKh : couple.bride.nameEn}
          </p>
        </div>
      </div>
    </div>
  )
}
