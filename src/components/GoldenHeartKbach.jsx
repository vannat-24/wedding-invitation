export default function GoldenHeartKbach({ couple, lang, size = 'default' }) {
  const isLarge = size === 'large'
  const isCompact = size === 'compact'

  const containerSizeClass = isLarge
    ? 'w-56 h-56'
    : isCompact
    ? 'w-42 h-42'
    : 'w-48 h-48'

  return (
    <div
      className={`relative flex items-center justify-center filter drop-shadow-[0_8px_25px_rgba(212,175,55,0.45)] ${containerSizeClass}`}
    >
      {/* Ambient Pulsing Golden Aura */}
      <div className="absolute inset-4 bg-amber-400/25 rounded-full blur-2xl animate-pulse pointer-events-none" />

      {/* Ornate Khmer Kbach Heart SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-khmerGold"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heartGoldGrad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="25%" stopColor="#ffd700" />
            <stop offset="60%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#7a5212" />
          </linearGradient>

          <linearGradient id="heartGoldGrad2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffe599" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#8f6318" />
            <stop offset="100%" stopColor="#543708" />
          </linearGradient>

          <radialGradient id="heartCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#fef5d6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f3deb0" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Outer Rotating Celestial Sparkle Dots */}
        <circle cx="100" cy="100" r="92" stroke="#d4af37" strokeWidth="1" strokeDasharray="3, 4" opacity="0.6" />
        <circle cx="100" cy="8" r="3.5" fill="#ffd700" />
        <circle cx="100" cy="192" r="3.5" fill="#ffd700" />
        <circle cx="8" cy="100" r="3.5" fill="#ffd700" />
        <circle cx="192" cy="100" r="3.5" fill="#ffd700" />

        {/* Soft Translucent Heart Center Backdrop */}
        <path
          d="M100,42 C85,18 42,18 28,48 C14,78 40,118 100,165 C160,118 186,78 172,48 C158,18 115,18 100,42 Z"
          fill="url(#heartCenterGlow)"
          className="backdrop-blur-sm"
          opacity="0.92"
        />

        {/* LEFT KBACH FLAME HEART WING */}
        <path
          d="M100,42 C85,18 44,18 30,48 C18,74 42,112 100,165 C88,145 62,125 48,102 C36,82 40,58 58,46 C74,36 90,44 100,42 Z"
          fill="url(#heartGoldGrad1)"
        />
        {/* Left Outer Kbach Flame Spirals (ភ្ញីភ្លើង) */}
        <path
          d="M30,48 C18,36 32,22 45,26 C36,32 38,42 44,46 C34,44 32,50 30,48 Z"
          fill="url(#heartGoldGrad1)"
        />
        <path
          d="M20,72 C8,62 18,48 30,52 C22,58 24,68 32,70 C22,70 20,74 20,72 Z"
          fill="url(#heartGoldGrad1)"
        />
        <path
          d="M28,105 C14,95 24,80 38,84 C28,90 30,100 40,102 C28,104 26,108 28,105 Z"
          fill="url(#heartGoldGrad1)"
        />
        <path
          d="M48,135 C32,126 44,110 58,114 C48,120 50,130 60,132 C48,134 46,138 48,135 Z"
          fill="url(#heartGoldGrad1)"
        />

        {/* RIGHT KBACH FLAME HEART WING (Symmetric) */}
        <path
          d="M100,42 C115,18 156,18 170,48 C182,74 158,112 100,165 C112,145 138,125 152,102 C164,82 160,58 142,46 C126,36 110,44 100,42 Z"
          fill="url(#heartGoldGrad2)"
        />
        {/* Right Outer Kbach Flame Spirals */}
        <path
          d="M170,48 C182,36 168,22 155,26 C164,32 162,42 156,46 C166,44 168,50 170,48 Z"
          fill="url(#heartGoldGrad2)"
        />
        <path
          d="M180,72 C192,62 182,48 170,52 C178,58 176,68 168,70 C178,70 180,74 180,72 Z"
          fill="url(#heartGoldGrad2)"
        />
        <path
          d="M172,105 C186,95 176,80 162,84 C172,90 170,100 160,102 C172,104 174,108 172,105 Z"
          fill="url(#heartGoldGrad2)"
        />
        <path
          d="M152,135 C168,126 156,110 142,114 C152,120 150,130 140,132 C152,134 154,138 152,135 Z"
          fill="url(#heartGoldGrad2)"
        />

        {/* Central Crown Finial (កំពូលក្បាច់ចុងលើ) */}
        <path
          d="M100,24 C104,32 108,36 100,44 C92,36 96,32 100,24 Z"
          fill="#ffd700"
          stroke="#8f6318"
          strokeWidth="1"
        />
        <circle cx="100" cy="20" r="3" fill="#ffffff" stroke="#b88628" strokeWidth="1" />

        {/* Bottom Lotus Finial (ក្បាច់ចុងក្រោម) */}
        <path
          d="M100,165 C96,175 92,180 100,188 C108,180 104,175 100,165 Z"
          fill="#ffd700"
          stroke="#8f6318"
          strokeWidth="1"
        />
        <circle cx="100" cy="190" r="3" fill="#ffffff" stroke="#b88628" strokeWidth="1" />

        {/* Delicate Inner Golden Heart Outline */}
        <path
          d="M100,48 C88,28 52,28 40,54 C28,78 50,112 100,154 C150,112 172,78 160,54 C148,28 112,28 100,48 Z"
          stroke="#c59b27"
          strokeWidth="1.5"
          strokeDasharray="2, 2"
        />
      </svg>

      {/* CENTER COUPLE NAMES & MONOGRAM (ស្ថិតនៅចំកណ្តាលរង្វង់បេះដូង) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 pt-1 select-none pointer-events-none">
        {/* Monogram Initials */}
        <span
          className={`font-moul gold-gradient-text tracking-tighter leading-none drop-shadow-sm ${
            isCompact ? 'text-2xl' : 'text-3xl'
          }`}
        >
          {couple.groom.initialKh}
          <span className={`text-amber-700/85 -ml-0.5 ${isCompact ? 'text-xl' : 'text-2xl'}`}>
            {couple.bride.initialKh}
          </span>
        </span>

        {/* Small Golden Divider Line */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent my-1 opacity-70" />

        {/* Groom & Bride Paired Names in Center */}
        <div className="space-y-0.5 max-w-[130px]">
          <p
            className={`font-moul text-[#5c3e0e] leading-tight truncate ${
              isCompact ? 'text-[10px]' : 'text-[11px]'
            }`}
          >
            {lang === 'km' ? couple.groom.nameKh : couple.groom.nameEn}
          </p>
          <span className="text-[9px] text-amber-700 font-bold block leading-none">&amp;</span>
          <p
            className={`font-moul text-[#5c3e0e] leading-tight truncate ${
              isCompact ? 'text-[10px]' : 'text-[11px]'
            }`}
          >
            {lang === 'km' ? couple.bride.nameKh : couple.bride.nameEn}
          </p>
        </div>
      </div>
    </div>
  )
}

