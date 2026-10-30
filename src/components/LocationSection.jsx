export default function LocationSection({ event, lang, onToast }) {
  const copyVenueAddress = () => {
    const textToCopy = lang === 'km' ? event.fullAddressKh : event.fullAddressEn
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        onToast(lang === 'km' ? 'បានចម្លងអាសយដ្ឋានទីតាំងរួចរាល់!' : 'Venue address copied to clipboard!')
      })
      .catch(() => {
        onToast(textToCopy)
      })
  }

  return (
    <section className="scroll-mt-6" id="location-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'ទីតាំងប្រារព្ធពិធី' : 'Wedding Venue'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Location & Directions' : 'Venue & Map'}
        </p>
      </div>

      <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-amber-300/80 shadow-md gold-card-shadow space-y-3.5">
        <div className="flex items-start space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0 mt-0.5 shadow-sm">
            <i className="fa-solid fa-location-dot text-sm"></i>
          </div>
          <div>
            <h4 className="font-moul text-xs text-amber-950 leading-relaxed">
              {lang === 'km' ? event.venueKh : event.venueEn}
            </h4>
            <p className="text-[10.5px] text-neutral-600 font-kantumruy mt-1 leading-snug">
              {lang === 'km' ? event.fullAddressKh : event.fullAddressEn}
            </p>
          </div>
        </div>

        {/* Embedded Map Simulation / Preview */}
        <div className="rounded-xl overflow-hidden border border-amber-300/90 shadow-inner relative aspect-[16/9] bg-amber-50">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src={event.mapsEmbedUrl}
            title="Google Map"
            allowFullScreen
          ></iframe>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-800 hover:to-amber-800 text-white rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 text-center cursor-pointer"
          >
            <i className="fa-solid fa-map-location-dot"></i>
            <span>{lang === 'km' ? 'បើកក្នុង Maps' : 'Open in Maps'}</span>
          </a>

          <button
            onClick={copyVenueAddress}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-white border border-amber-300 text-amber-950 rounded-xl font-semibold text-xs shadow-sm hover:bg-amber-50 transition-all active:scale-95 cursor-pointer"
          >
            <i className="fa-regular fa-copy text-amber-700"></i>
            <span>{lang === 'km' ? 'ចម្លងអាសយដ្ឋាន' : 'Copy Address'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}

