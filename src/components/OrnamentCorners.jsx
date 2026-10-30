export default function OrnamentCorners() {
  return (
    <>
      {/* Top-Left Corner */}
      <div className="absolute top-0 left-0 w-28 h-28 pointer-events-none z-30 opacity-90">
        <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L120 0 C110 8 102 18 96 30 C90 42 78 52 64 56 C50 60 40 72 36 86 C32 100 22 110 0 120 Z"
            fill="url(#khmerGoldGradTL)"
            opacity="0.22"
          />
          <path
            d="M0 0 L90 0 C82 6 74 15 68 25 C62 35 52 44 40 48 C30 52 22 62 18 74 C14 85 8 92 0 100 Z"
            fill="url(#khmerGoldGradTL2)"
            opacity="0.4"
          />
          <path
            d="M4 4 L82 4 C72 12 64 22 56 34 C48 46 36 54 24 62 C16 72 10 84 4 96 Z"
            stroke="#c59b27"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M8 8 C22 10 32 20 38 32 C44 44 38 56 26 58 C16 60 10 50 12 38 C14 26 26 22 34 26"
            stroke="#8f6318"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M16 16 C30 18 38 28 42 38 C40 46 32 50 24 46 C18 42 16 32 20 24 C24 18 32 18 36 22"
            fill="#d4af37"
            opacity="0.6"
          />
          <circle cx="24" cy="24" r="4.5" fill="#b88628" />
          <circle cx="24" cy="24" r="2.5" fill="#ffe599" />
          <path d="M0 4 C24 6 36 18 42 36 C44 48 36 60 22 64" stroke="#ffd976" strokeWidth="1" fill="none" />
          <path d="M4 0 C6 24 18 36 36 42 C48 44 60 36 64 22" stroke="#ffd976" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="khmerGoldGradTL" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b88628" />
              <stop offset="0.5" stopColor="#ffd976" />
              <stop offset="1" stopColor="#7c5819" />
            </linearGradient>
            <linearGradient id="khmerGoldGradTL2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4af37" />
              <stop offset="1" stopColor="#5c3e0e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top-Right Corner */}
      <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none z-30 opacity-90 -scale-x-100">
        <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L120 0 C110 8 102 18 96 30 C90 42 78 52 64 56 C50 60 40 72 36 86 C32 100 22 110 0 120 Z"
            fill="url(#khmerGoldGradTR)"
            opacity="0.22"
          />
          <path
            d="M0 0 L90 0 C82 6 74 15 68 25 C62 35 52 44 40 48 C30 52 22 62 18 74 C14 85 8 92 0 100 Z"
            fill="url(#khmerGoldGradTR2)"
            opacity="0.4"
          />
          <path
            d="M4 4 L82 4 C72 12 64 22 56 34 C48 46 36 54 24 62 C16 72 10 84 4 96 Z"
            stroke="#c59b27"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="24" cy="24" r="4.5" fill="#b88628" />
          <circle cx="24" cy="24" r="2.5" fill="#ffe599" />
          <defs>
            <linearGradient id="khmerGoldGradTR" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b88628" />
              <stop offset="0.5" stopColor="#ffd976" />
              <stop offset="1" stopColor="#7c5819" />
            </linearGradient>
            <linearGradient id="khmerGoldGradTR2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4af37" />
              <stop offset="1" stopColor="#5c3e0e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Left Corner */}
      <div className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none z-30 opacity-90 -scale-y-100">
        <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L120 0 C110 8 102 18 96 30 C90 42 78 52 64 56 C50 60 40 72 36 86 C32 100 22 110 0 120 Z"
            fill="url(#khmerGoldGradBL)"
            opacity="0.22"
          />
          <path
            d="M4 4 L82 4 C72 12 64 22 56 34 C48 46 36 54 24 62 C16 72 10 84 4 96 Z"
            stroke="#c59b27"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="24" cy="24" r="4.5" fill="#b88628" />
          <circle cx="24" cy="24" r="2.5" fill="#ffe599" />
          <defs>
            <linearGradient id="khmerGoldGradBL" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b88628" />
              <stop offset="0.5" stopColor="#ffd976" />
              <stop offset="1" stopColor="#7c5819" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Right Corner */}
      <div className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none z-30 opacity-90 -scale-x-100 -scale-y-100">
        <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 L120 0 C110 8 102 18 96 30 C90 42 78 52 64 56 C50 60 40 72 36 86 C32 100 22 110 0 120 Z"
            fill="url(#khmerGoldGradBR)"
            opacity="0.22"
          />
          <path
            d="M4 4 L82 4 C72 12 64 22 56 34 C48 46 36 54 24 62 C16 72 10 84 4 96 Z"
            stroke="#c59b27"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="24" cy="24" r="4.5" fill="#b88628" />
          <circle cx="24" cy="24" r="2.5" fill="#ffe599" />
          <defs>
            <linearGradient id="khmerGoldGradBR" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b88628" />
              <stop offset="0.5" stopColor="#ffd976" />
              <stop offset="1" stopColor="#7c5819" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Delicate Inner Frame with Dashed Filigree */}
      <div className="absolute inset-2.5 sm:inset-3 rounded-2xl border-2 border-amber-400/50 pointer-events-none z-20 opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.18)]">
        <div className="absolute inset-1 rounded-xl border border-amber-300/40"></div>
        <div className="absolute inset-[4px] sm:inset-[5px] rounded-[10px] border border-amber-600/25 border-dashed"></div>
      </div>
    </>
  )
}

