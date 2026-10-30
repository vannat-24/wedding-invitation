export default function ProgramSection({ itinerary, lang }) {
  const { morning, evening } = itinerary

  return (
    <section className="scroll-mt-6" id="program-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'កាលវិភាគកម្មវិធីមង្គលការ' : 'Wedding Itinerary'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Ceremony & Reception Program' : 'Schedule of Events'}
        </p>
      </div>

      {/* Morning Ceremony Card */}
      <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-amber-300/80 shadow-md gold-card-shadow mb-3.5 relative overflow-hidden">
        <div className="flex items-center space-x-2.5 pb-2.5 mb-2.5 border-b border-amber-100">
          <span className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-800 text-sm shadow-inner">
            <i className="fa-solid fa-sun text-amber-600"></i>
          </span>
          <div>
            <h4 className="font-moul text-xs text-amber-950">
              {lang === 'km' ? morning.titleKh : morning.titleEn}
            </h4>
            <span className="text-[9.5px] text-amber-800/80 font-kantumruy">
              {lang === 'km' ? morning.locationKh : morning.locationEn}
            </span>
          </div>
        </div>

        <div className="space-y-3 font-kantumruy text-xs">
          {morning.items.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 group">
              <span className="bg-amber-100/90 text-amber-950 font-bold px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap mt-0.5 border border-amber-200 shadow-xs">
                {lang === 'km' ? item.timeKh : item.timeEn}
              </span>
              <div>
                <p className="font-semibold text-neutral-900 text-[11.5px] leading-snug">
                  {lang === 'km' ? item.titleKh : item.titleEn}
                </p>
                <p className="text-[9.5px] text-neutral-500 mt-0.5 leading-normal">
                  {lang === 'km' ? item.descKh : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evening Grand Banquet Card */}
      <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-amber-300/80 shadow-md gold-card-shadow relative overflow-hidden">
        <div className="flex items-center space-x-2.5 pb-2.5 mb-2.5 border-b border-amber-100">
          <span className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-800 text-sm shadow-inner">
            <i className="fa-solid fa-moon text-amber-700"></i>
          </span>
          <div>
            <h4 className="font-moul text-xs text-amber-950">
              {lang === 'km' ? evening.titleKh : evening.titleEn}
            </h4>
            <span className="text-[9.5px] text-amber-800/80 font-kantumruy">
              {lang === 'km' ? evening.locationKh : evening.locationEn}
            </span>
          </div>
        </div>

        <div className="space-y-3 font-kantumruy text-xs">
          {evening.items.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 group">
              <span className="bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold px-2 py-0.5 rounded-md text-[10px] whitespace-nowrap mt-0.5 shadow-sm">
                {lang === 'km' ? item.timeKh : item.timeEn}
              </span>
              <div>
                <p className="font-semibold text-neutral-900 text-[11.5px] leading-snug">
                  {lang === 'km' ? item.titleKh : item.titleEn}
                </p>
                <p className="text-[9.5px] text-neutral-500 mt-0.5 leading-normal">
                  {lang === 'km' ? item.descKh : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

