import { useState } from 'react'

export default function GallerySection({ gallery, lang }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openLightbox = (photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction, e) => {
    e.stopPropagation()
    if (!selectedPhoto) return
    const currentIndex = gallery.findIndex((p) => p.id === selectedPhoto.id)
    if (currentIndex === -1) return

    let nextIndex = currentIndex + direction
    if (nextIndex < 0) nextIndex = gallery.length - 1
    if (nextIndex >= gallery.length) nextIndex = 0

    setSelectedPhoto(gallery[nextIndex])
  }

  return (
    <section className="scroll-mt-6" id="gallery-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'វិចិត្រសាលរូបថត' : 'Photo Gallery'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Pre-Wedding Photo Moments' : 'Romantic Moments'}
        </p>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {gallery.map((photo) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className={`group relative rounded-xl overflow-hidden border-2 border-amber-300/85 shadow-md bg-amber-100 cursor-pointer transition-all duration-300 hover:border-amber-400 hover:shadow-lg ${
              photo.span === 2 ? 'col-span-2' : 'col-span-1'
            } ${
              photo.aspect === 'aspect-[4/5]'
                ? 'aspect-[4/5]'
                : photo.aspect === 'aspect-[16/10]'
                ? 'aspect-[16/10]'
                : 'aspect-[3/4]'
            }`}
          >
            <img
              src={photo.thumb}
              alt={lang === 'km' ? photo.captionKh : photo.captionEn}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5">
              <span className="text-white text-[11px] font-kantumruy font-medium leading-tight drop-shadow-sm">
                {lang === 'km' ? photo.captionKh : photo.captionEn}
              </span>
              <span className="text-amber-300 text-[9px] font-kantumruy mt-0.5 flex items-center">
                <i className="fa-solid fa-magnifying-glass-plus mr-1 text-[8px]"></i>
                {lang === 'km' ? 'ពង្រីក' : 'View'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[10px] text-amber-800/80 mt-2.5 font-kantumruy">
        {lang === 'km'
          ? 'ចុចលើរូបដើម្បីទស្សនាកម្រងរូបភាពទំហំធំ'
          : 'Tap any photo to view full size'}
      </p>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-4 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-xl w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer z-50"
            title="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Left / Prev button */}
          <button
            onClick={(e) => navigatePhoto(-1, e)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-lg w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer z-50"
            title="Previous"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Right / Next button */}
          <button
            onClick={(e) => navigatePhoto(1, e)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer z-50"
            title="Next"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Large Image Container */}
          <div
            className="max-w-[420px] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.full}
              alt={lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
              className="w-full max-h-[75vh] object-contain rounded-2xl border-2 border-amber-400 shadow-2xl"
            />
            <p className="text-amber-100 text-xs font-kantumruy mt-3 text-center bg-black/50 px-4 py-1.5 rounded-full border border-amber-400/30">
              {lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

