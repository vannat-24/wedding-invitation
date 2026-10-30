export default function FloatingDock({ lang, onScrollTo }) {
  const tabs = [
    {
      id: 'hero-photo-screen',
      icon: 'fa-solid fa-house',
      labelKh: 'ទំព័រដើម',
      labelEn: 'Home',
      isPrimary: true,
    },
    {
      id: 'location-section',
      icon: 'fa-solid fa-location-dot',
      labelKh: 'ទីតាំង',
      labelEn: 'Venue',
    },
    {
      id: 'gallery-section',
      icon: 'fa-solid fa-camera',
      labelKh: 'រូបថត',
      labelEn: 'Photos',
    },
    {
      id: 'gift-section',
      icon: 'fa-solid fa-qrcode',
      labelKh: 'ចងដៃ',
      labelEn: 'KHQR',
    },
    {
      id: 'rsvp-section',
      icon: 'fa-solid fa-comment-dots',
      labelKh: 'ជូនពរ',
      labelEn: 'RSVP',
    },
  ]

  return (
    <nav className="absolute bottom-3 inset-x-4 z-40" data-purpose="bottom-floating-dock">
      {/* Floating White Pill Dock matching the reference image */}
      <div className="bg-white/95 backdrop-blur-xl rounded-full py-2 px-3 flex items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.35)] border border-amber-300/60 max-w-[360px] mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onScrollTo(tab.id)}
            className="flex flex-col items-center justify-center group focus:outline-none cursor-pointer px-1"
            title={lang === 'km' ? tab.labelKh : tab.labelEn}
          >
            {tab.isPrimary ? (
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6b4c12] via-[#b88628] to-[#60420d] text-white flex items-center justify-center shadow-md -mt-3 border-2 border-white group-active:scale-95 transition-transform">
                <i className={`${tab.icon} text-[15px]`}></i>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 group-hover:text-amber-800 group-hover:bg-amber-50 group-active:scale-95 transition-all">
                <i className={`${tab.icon} text-[14px]`}></i>
              </div>
            )}
            <span className="text-[8.5px] font-kantumruy text-neutral-600 group-hover:text-amber-950 font-semibold mt-0.5">
              {lang === 'km' ? tab.labelKh : tab.labelEn}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
