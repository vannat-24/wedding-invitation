export default function CoverSection({ data, lang, onToast }) {
  const { couple, parents, event } = data

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(
      lang === 'km'
        ? `មង្គលការ៖ ${couple.groom.nameKh} & ${couple.bride.nameKh}`
        : `Wedding: ${couple.groom.nameEn} & ${couple.bride.nameEn}`
    )
    const details = encodeURIComponent(
      lang === 'km'
        ? `សិរីសួស្តីអាពាហ៍ពិពាហ៍\nទីតាំង៖ ${event.fullAddressKh}`
        : `Wedding Celebration\nVenue: ${event.fullAddressEn}`
    )
    const location = encodeURIComponent(event.venueEn)
    // 2026-03-28 17:00 to 22:00 in UTC (Cambodia is UTC+7 -> 10:00 to 15:00 UTC)
    const dates = '20260328T100000Z/20260328T150000Z'
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`

    window.open(googleCalUrl, '_blank')
    onToast(lang === 'km' ? 'បានបើកប្រតិទិន Google' : 'Opened Google Calendar')
  }

  return (
    <section
      className="flex flex-col items-center text-center pt-4 relative z-10 scroll-mt-6"
      id="formal-invitation-section"
    >
      {/* Ornate Calligraphy Title & Traditional Flourish */}
      <div className="w-full flex flex-col items-center">
        <div className="text-amber-800/80 flex items-center justify-center space-x-2 mb-1">
          <svg className="w-10 h-4 text-amber-700" viewBox="0 0 100 30" fill="currentColor">
            <path
              d="M0,15 C20,15 35,0 50,0 C65,0 80,15 100,15 C80,15 70,28 50,28 C30,28 20,15 0,15 Z"
              fill="url(#khmerGoldGradFlourish)"
            />
            <circle cx="50" cy="14" r="4" fill="#d4af37" />
            <defs>
              <linearGradient id="khmerGoldGradFlourish" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8f6318" />
                <stop offset="0.5" stopColor="#ffd976" />
                <stop offset="1" stopColor="#8f6318" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-moul text-sm tracking-widest gold-gradient-text px-1">៚ ❖ ៚</span>
          <svg className="w-10 h-4 text-amber-700 rotate-180" viewBox="0 0 100 30" fill="currentColor">
            <path
              d="M0,15 C20,15 35,0 50,0 C65,0 80,15 100,15 C80,15 70,28 50,28 C30,28 20,15 0,15 Z"
              fill="url(#khmerGoldGradFlourish)"
            />
            <circle cx="50" cy="14" r="4" fill="#d4af37" />
          </svg>
        </div>

        <h1 className="font-moul text-[24px] sm:text-[26px] leading-relaxed tracking-wide gold-gradient-shimmer drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,0.95)]">
          {lang === 'km' ? 'សិរីសួស្តី' : 'The Wedding of'}
        </h1>
        <h2 className="font-moul text-[22px] sm:text-[24px] leading-snug tracking-normal gold-gradient-shimmer drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,0.95)]">
          {lang === 'km' ? 'អាពាហ៍ពិពាហ៍' : 'Chanveya & Nearyrath'}
        </h2>
      </div>

      {/* Parents Names with Elegant Gold-Border Split */}
      <div className="w-full grid grid-cols-2 gap-2 text-[11.5px] leading-relaxed text-[#5c3e0e] font-battambang mt-3 px-1">
        <div className="text-center border-r border-amber-300/50 pr-2">
          <p className="font-semibold text-amber-950">
            {lang === 'km' ? parents.groom.fatherKh : parents.groom.fatherEn}
          </p>
          <p className="font-semibold text-amber-950">
            {lang === 'km' ? parents.groom.motherKh : parents.groom.motherEn}
          </p>
        </div>
        <div className="text-center pl-2">
          <p className="font-semibold text-amber-950">
            {lang === 'km' ? parents.bride.fatherKh : parents.bride.fatherEn}
          </p>
          <p className="font-semibold text-amber-950">
            {lang === 'km' ? parents.bride.motherKh : parents.bride.motherEn}
          </p>
        </div>
      </div>

      {/* Formal Invitation Speech */}
      <div className="w-full my-3 px-2">
        <h3 className="font-moul text-[13.5px] text-[#694304] mb-1.5 drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]">
          {lang === 'km' ? 'មានកិត្តិយសសូមគោរពអញ្ជើញ' : 'Request the pleasure of your company'}
        </h3>
        <p className="font-kantumruy text-[10px] text-[#543b14] leading-[1.8] max-w-[340px] mx-auto text-center font-normal">
          {lang === 'km' ? (
            <>
              <span className="font-medium text-[#46300f]">
                ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា
              </span>{' '}
              អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គលក្នុង
              ពិធីសិរីសួស្តីអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ
            </>
          ) : (
            'To celebrate our holy union and give your heartfelt blessings on this most auspicious and joyful occasion.'
          )}
        </p>
      </div>

      {/* Golden Royal Monogram Emblem */}
      <div className="relative my-3 flex items-center justify-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Rotating Celestial Sunburst Ring */}
          <svg
            className="absolute inset-0 w-full h-full text-khmerGold animate-[spin_70s_linear_infinite]"
            viewBox="0 0 200 200"
          >
            <g fill="currentColor" opacity="0.85">
              <circle cx="100" cy="100" fill="none" r="76" stroke="#c99732" strokeDasharray="3, 3" strokeWidth="2.5" />
              <circle cx="100" cy="100" fill="none" r="82" stroke="#946618" strokeWidth="1.5" />
              <circle cx="100" cy="100" fill="none" r="70" stroke="#dcb44c" strokeWidth="1" />
              <circle cx="100" cy="16" fill="#b88628" r="5" />
              <circle cx="100" cy="184" fill="#b88628" r="5" />
              <circle cx="16" cy="100" fill="#b88628" r="5" />
              <circle cx="184" cy="100" fill="#b88628" r="5" />
              <circle cx="40" cy="40" fill="#b88628" r="4" />
              <circle cx="160" cy="40" fill="#b88628" r="4" />
              <circle cx="40" cy="160" fill="#b88628" r="4" />
              <circle cx="160" cy="160" fill="#b88628" r="4" />
            </g>
          </svg>

          {/* Inner Golden Foil Medallion */}
          <div className="w-22 h-22 rounded-full bg-gradient-to-tr from-[#fbf4de] via-[#fffdfa] to-[#f4e4b9] shadow-[0_8px_20px_rgba(184,134,40,0.25)] border border-amber-300 flex items-center justify-center flex-col relative">
            <span className="font-moul text-3xl gold-gradient-text transform -translate-y-0.5 tracking-tighter drop-shadow-sm">
              {couple.groom.initialKh}
              <span className="text-xl text-amber-700/80 -ml-1">{couple.bride.initialKh}</span>
            </span>
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent -mt-1 opacity-65"></div>
          </div>
        </div>
      </div>

      {/* Bride & Groom Names with Royal Frame */}
      <div className="w-full grid grid-cols-2 gap-3 text-center my-2">
        <div className="p-2 rounded-xl bg-white/60 border border-amber-200/80 shadow-sm backdrop-blur-[2px]">
          <span className="font-kantumruy text-[11px] text-neutral-600 block mb-0.5 font-medium">
            {lang === 'km' ? couple.groom.titleKh : couple.groom.titleEn}
          </span>
          <h4 className="font-moul text-[14.5px] text-[#63410a] drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] leading-tight">
            {lang === 'km' ? couple.groom.nameKh : couple.groom.nameEn}
          </h4>
        </div>
        <div className="p-2 rounded-xl bg-white/60 border border-amber-200/80 shadow-sm backdrop-blur-[2px]">
          <span className="font-kantumruy text-[11px] text-neutral-600 block mb-0.5 font-medium">
            {lang === 'km' ? couple.bride.titleKh : couple.bride.titleEn}
          </span>
          <h4 className="font-moul text-[14.5px] text-[#63410a] drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] leading-tight">
            {lang === 'km' ? couple.bride.nameKh : couple.bride.nameEn}
          </h4>
        </div>
      </div>

      {/* Date & Time Highlight Block */}
      <div className="w-full max-w-[320px] mx-auto my-2 py-1">
        <div className="font-moul text-[14px] text-[#6b480f] tracking-wide mb-1">
          {lang === 'km' ? event.monthKh : event.monthEn}
        </div>
        <div className="flex items-center justify-between border-y-2 border-amber-700/50 py-2 px-4 bg-amber-50/40 rounded-lg">
          <div className="w-24 text-left font-kantumruy font-bold text-[12px] text-[#553a11]">
            {lang === 'km' ? event.dayKh : event.dayEn}
          </div>
          <div className="font-moul text-[40px] leading-none text-[#714b0b] px-3 gold-gradient-text scale-110 drop-shadow-sm">
            {lang === 'km' ? event.dateKh : event.dateEn}
          </div>
          <div className="w-24 text-right font-kantumruy font-bold text-[12px] text-[#553a11]">
            {lang === 'km' ? event.timeKh : event.timeEn}
          </div>
        </div>
        <div className="font-moul text-[14px] text-[#6b480f] mt-1 tracking-wider">
          {lang === 'km' ? event.yearKh : event.yearEn}
        </div>
      </div>

      {/* Khmer Lunar Calendar Notice */}
      <div className="w-full px-4 text-center mt-1 space-y-1">
        <p className="font-kantumruy text-[10.5px] text-[#6a4f21] leading-relaxed">
          {event.lunarDateKh}
          <br />
          <span className="font-semibold text-[#463211]">{event.venueKh}</span>
        </p>

        {/* Add to Calendar Button */}
        <button
          onClick={handleAddToCalendar}
          className="mt-2 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-amber-300 text-amber-900 text-[10.5px] font-semibold shadow-sm hover:bg-amber-100/70 transition-all active:scale-95 cursor-pointer"
        >
          <i className="fa-regular fa-calendar-plus text-amber-700"></i>
          <span>{lang === 'km' ? 'បន្ថែមក្នុងប្រតិទិន Google' : 'Add to Calendar'}</span>
        </button>
      </div>
    </section>
  )
}

