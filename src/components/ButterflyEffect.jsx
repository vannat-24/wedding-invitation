export default function ButterflyEffect({ active }) {
  if (!active) return null

  // Large, majestic butterflies with swallowtail wings & rich golden textures
  const butterflies = [
    {
      id: 'queen-gold',
      animation: 'flight-hero-1 3.4s cubic-bezier(0.2, 0.65, 0.4, 0.95) forwards',
      left: '46%',
      top: '48%',
      width: 100, // Large, majestic 100px!
      height: 90,
      flapSpeed: '0.2s',
      colorCore: '#fffdf0',
      colorMid: '#f5b041',
      colorEdge: '#b78119',
      colorGlow: 'rgba(255, 215, 0, 0.75)',
      delay: '0.08s',
    },
    {
      id: 'royal-rose',
      animation: 'flight-hero-2 3.6s cubic-bezier(0.2, 0.65, 0.4, 0.95) forwards',
      left: '52%',
      top: '47%',
      width: 95,
      height: 85,
      flapSpeed: '0.22s',
      colorCore: '#fff5eb',
      colorMid: '#e67e22',
      colorEdge: '#a04000',
      colorGlow: 'rgba(255, 165, 2, 0.8)',
      delay: '0.18s',
    },
    {
      id: 'celestial-sun',
      animation: 'flight-center-soar 3.8s cubic-bezier(0.25, 0.55, 0.35, 0.95) forwards',
      left: '48%',
      top: '52%',
      width: 88,
      height: 78,
      flapSpeed: '0.19s',
      colorCore: '#ffffff',
      colorMid: '#f1c40f',
      colorEdge: '#d4ac0d',
      colorGlow: 'rgba(254, 202, 87, 0.85)',
      delay: '0.28s',
    },
    {
      id: 'swallowtail-right',
      animation: 'flight-arc-right 3.2s cubic-bezier(0.25, 0.6, 0.45, 0.95) forwards',
      left: '53%',
      top: '50%',
      width: 78,
      height: 70,
      flapSpeed: '0.21s',
      colorCore: '#fef9e7',
      colorMid: '#d35400',
      colorEdge: '#935116',
      colorGlow: 'rgba(255, 159, 26, 0.7)',
      delay: '0.15s',
    },
    {
      id: 'swallowtail-left',
      animation: 'flight-arc-left 3.3s cubic-bezier(0.25, 0.6, 0.45, 0.95) forwards',
      left: '43%',
      top: '49%',
      width: 78,
      height: 70,
      flapSpeed: '0.23s',
      colorCore: '#fcf3cf',
      colorMid: '#e59866',
      colorEdge: '#873600',
      colorGlow: 'rgba(243, 156, 18, 0.7)',
      delay: '0.25s',
    },
  ]

  // Bursting Stardust sparks in 360 degrees
  const sparks = Array.from({ length: 18 }).map((_, i) => {
    const angle = (i / 18) * 2 * Math.PI
    const distance = 120 + (i % 4) * 45
    return {
      x: `${Math.cos(angle) * distance}px`,
      y: `${Math.sin(angle) * distance}px`,
      delay: `${(i % 5) * 0.04}s`,
      size: `${6 + (i % 3) * 3}px`,
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      {/* ========================================================
          1. RADIANT SUNBURST LIGHT EXPLOSION (From Sample Image)
         ======================================================== */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        {/* Blinding White-Gold Starburst Center Core */}
        <div
          className="absolute w-72 h-72 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,245,190,0.95) 25%, rgba(255,200,60,0.7) 50%, rgba(212,175,55,0) 75%)',
            animation: 'flare-core 2.4s cubic-bezier(0.15, 0.85, 0.35, 1) forwards',
          }}
        />

        {/* Dynamic Rotating Sunbeams / God-Rays */}
        <div
          className="absolute w-[440px] h-[440px]"
          style={{
            animation: 'sunburst-spin 2.6s cubic-bezier(0.15, 0.85, 0.35, 1) forwards',
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="25%" stopColor="#fff3a8" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#f39c12" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* 16 Powerful Radiant Rays */}
            {Array.from({ length: 16 }).map((_, i) => (
              <polygon
                key={i}
                points="200,200 175,0 225,0"
                fill="url(#rayGrad)"
                transform={`rotate(${i * 22.5} 200 200)`}
              />
            ))}
          </svg>
        </div>

        {/* 360-Degree Golden Stardust Sparks */}
        {sparks.map((s, idx) => (
          <span
            key={idx}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size,
              background: 'radial-gradient(circle, #ffffff 10%, #ffd700 60%, transparent 90%)',
              boxShadow: '0 0 10px #ffeaa7, 0 0 20px #f39c12',
              '--spark-x': s.x,
              '--spark-y': s.y,
              animation: `sparkle-spark 1.8s cubic-bezier(0.2, 0.8, 0.3, 1) forwards`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* ========================================================
          2. LARGE, MAJESTIC SWALLOWTAIL BUTTERFLIES
         ======================================================== */}
      {butterflies.map((b) => (
        <div
          key={b.id}
          className="absolute z-50 pointer-events-none"
          style={{
            left: b.left,
            top: b.top,
            animation: b.animation,
            animationDelay: b.delay,
            perspective: '1000px',
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              width: `${b.width}px`,
              height: `${b.height}px`,
              filter: `drop-shadow(0 6px 18px ${b.colorGlow}) drop-shadow(0 2px 6px rgba(0,0,0,0.4))`,
            }}
          >
            {/* LEFT SWALLOWTAIL WING */}
            <div
              className="w-1/2 h-full"
              style={{
                transformOrigin: 'right center',
                animation: `majestic-flap-left ${b.flapSpeed} ease-in-out infinite alternate`,
              }}
            >
              <svg viewBox="0 0 100 130" className="w-full h-full" overflow="visible">
                <defs>
                  <linearGradient id={`gradL-${b.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={b.colorCore} />
                    <stop offset="40%" stopColor={b.colorMid} />
                    <stop offset="85%" stopColor={b.colorEdge} />
                    <stop offset="100%" stopColor="#4a2800" />
                  </linearGradient>
                </defs>

                {/* Forewing (Upper Wing) */}
                <path
                  d="M96,65 C70,25 35,5 8,15 C-12,25 15,65 96,70 Z"
                  fill={`url(#gradL-${b.id})`}
                  opacity="0.96"
                />
                {/* Hindwing with Swallowtail Extension (Lower Wing) */}
                <path
                  d="M96,68 C65,75 25,88 28,105 C30,118 48,116 52,126 C54,132 46,128 42,120 C38,114 20,105 18,92 C15,75 60,65 96,68 Z"
                  fill={`url(#gradL-${b.id})`}
                  opacity="0.94"
                />

                {/* Ornate Gold Wing Veins (Filigree) */}
                <g stroke="#ffffff" strokeWidth="1.6" opacity="0.8" fill="none">
                  <path d="M96,66 C65,45 35,30 18,24" />
                  <path d="M96,66 C60,55 35,48 20,44" />
                  <path d="M96,66 C62,62 42,60 25,60" />
                  <path d="M96,68 C70,82 48,96 32,106" />
                  <path d="M96,68 C65,95 52,112 48,122" />
                </g>

                {/* Pearlescent Margin Gems along wing edge */}
                <circle cx="16" cy="22" r="3" fill="#ffffff" opacity="0.9" />
                <circle cx="28" cy="18" r="2.5" fill="#ffeaa7" />
                <circle cx="42" cy="15" r="2.5" fill="#ffeaa7" />
                <circle cx="24" cy="98" r="2.8" fill="#ffffff" opacity="0.9" />
                <circle cx="34" cy="112" r="2.5" fill="#ffeaa7" />
                <circle cx="50" cy="125" r="2" fill="#ffffff" />
              </svg>
            </div>

            {/* BUTTERFLY BODY (Head, Thorax, Abdomen & Curved Antennae) */}
            <div className="w-[4px] h-[65%] bg-gradient-to-b from-[#2b1700] via-[#8c5912] to-[#200f00] rounded-full z-20 shadow-md relative mx-[-2px]">
              {/* Antennae */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 flex justify-between pointer-events-none">
                <span className="w-2 h-3 border-l-2 border-t-2 border-amber-950 rounded-tl-full block transform -rotate-20 shadow-xs"></span>
                <span className="w-2 h-3 border-r-2 border-t-2 border-amber-950 rounded-tr-full block transform rotate-20 shadow-xs"></span>
              </div>
            </div>

            {/* RIGHT SWALLOWTAIL WING (Mirrored) */}
            <div
              className="w-1/2 h-full scale-x-[-1]"
              style={{
                transformOrigin: 'left center',
                animation: `majestic-flap-right ${b.flapSpeed} ease-in-out infinite alternate`,
              }}
            >
              <svg viewBox="0 0 100 130" className="w-full h-full" overflow="visible">
                <defs>
                  <linearGradient id={`gradR-${b.id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={b.colorCore} />
                    <stop offset="40%" stopColor={b.colorMid} />
                    <stop offset="85%" stopColor={b.colorEdge} />
                    <stop offset="100%" stopColor="#4a2800" />
                  </linearGradient>
                </defs>

                {/* Forewing */}
                <path
                  d="M96,65 C70,25 35,5 8,15 C-12,25 15,65 96,70 Z"
                  fill={`url(#gradR-${b.id})`}
                  opacity="0.96"
                />
                {/* Hindwing with Swallowtail */}
                <path
                  d="M96,68 C65,75 25,88 28,105 C30,118 48,116 52,126 C54,132 46,128 42,120 C38,114 20,105 18,92 C15,75 60,65 96,68 Z"
                  fill={`url(#gradR-${b.id})`}
                  opacity="0.94"
                />

                {/* Ornate Gold Wing Veins */}
                <g stroke="#ffffff" strokeWidth="1.6" opacity="0.8" fill="none">
                  <path d="M96,66 C65,45 35,30 18,24" />
                  <path d="M96,66 C60,55 35,48 20,44" />
                  <path d="M96,66 C62,62 42,60 25,60" />
                  <path d="M96,68 C70,82 48,96 32,106" />
                  <path d="M96,68 C65,95 52,112 48,122" />
                </g>

                {/* Pearlescent Margin Gems */}
                <circle cx="16" cy="22" r="3" fill="#ffffff" opacity="0.9" />
                <circle cx="28" cy="18" r="2.5" fill="#ffeaa7" />
                <circle cx="42" cy="15" r="2.5" fill="#ffeaa7" />
                <circle cx="24" cy="98" r="2.8" fill="#ffffff" opacity="0.9" />
                <circle cx="34" cy="112" r="2.5" fill="#ffeaa7" />
                <circle cx="50" cy="125" r="2" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
