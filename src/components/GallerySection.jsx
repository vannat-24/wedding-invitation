import { useState, useEffect, useRef } from 'react'

export default function GallerySection({ gallery, lang }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const touchStartX = useRef(null)

  const openLightbox = (photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction, e) => {
    if (e) e.stopPropagation()
    if (!selectedPhoto) return
    const currentIndex = gallery.findIndex((p) => p.id === selectedPhoto.id)
    if (currentIndex === -1) return

    let nextIndex = currentIndex + direction
    if (nextIndex < 0) nextIndex = gallery.length - 1
    if (nextIndex >= gallery.length) nextIndex = 0

    setSelectedPhoto(gallery[nextIndex])
  }

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!selectedPhoto) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto(-1)
      } else if (e.key === 'ArrowRight') {
        navigatePhoto(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto])

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX.current
    if (diff > 50) {
      // Swiped right -> previous photo
      navigatePhoto(-1)
    } else if (diff < -50) {
      // Swiped left -> next photo
      navigatePhoto(1)
    }
    touchStartX.current = null
  }

  const currentPhotoIndex = selectedPhoto
    ? gallery.findIndex((p) => p.id === selectedPhoto.id)
    : -1

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
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center p-4 backdrop-blur-md animate-fade-in select-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter & Close Button (Generous margins off the top & right edges) */}
          <div className="w-full flex justify-between items-center pt-3 px-2 sm:pt-5 sm:px-6 z-50">
            {/* Photo Counter Badge */}
            <div className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/60 shadow-xl flex items-center space-x-1.5 text-amber-200">
              <i className="fa-regular fa-image text-xs text-amber-300"></i>
              <span className="text-xs font-bold font-kantumruy">
                {currentPhotoIndex + 1} / {gallery.length}
              </span>
            </div>

            {/* Close Button ("Cross X") with generous margin off top-right edges */}
            <button
              onClick={closeLightbox}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-black/95 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-xl shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all cursor-pointer group"
              title={lang === 'km' ? 'បិទ' : 'Close'}
              aria-label="Close photo"
            >
              <i className="fa-solid fa-xmark group-hover:rotate-90 transition-transform duration-200"></i>
            </button>
          </div>

          {/* Left Arrow Navigation Button (Generous margin off left edge & image) */}
          <button
            onClick={(e) => navigatePhoto(-1, e)}
            className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/75 hover:bg-black/95 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-lg sm:text-xl shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all cursor-pointer group"
            title={lang === 'km' ? 'រូបភាពមុន' : 'Previous'}
            aria-label="Previous photo"
          >
            <i className="fa-solid fa-chevron-left group-hover:-translate-x-0.5 transition-transform duration-200"></i>
          </button>

          {/* Right Arrow Navigation Button (Generous margin off right edge & image) */}
          <button
            onClick={(e) => navigatePhoto(1, e)}
            className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/75 hover:bg-black/95 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-lg sm:text-xl shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all cursor-pointer group"
            title={lang === 'km' ? 'រូបភាពបន្ទាប់' : 'Next'}
            aria-label="Next photo"
          >
            <i className="fa-solid fa-chevron-right group-hover:translate-x-0.5 transition-transform duration-200"></i>
          </button>

          {/* Large Image Container with safe padding corridors on left and right */}
          <div
            className="my-auto px-12 sm:px-18 max-w-[440px] sm:max-w-[480px] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.full}
              alt={lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
              className="w-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-2xl border-2 border-amber-400/90 shadow-[0_10px_40px_rgba(0,0,0,0.9)] bg-neutral-900/50"
            />
            <p className="text-amber-100 text-xs sm:text-sm font-kantumruy font-medium mt-3 text-center bg-black/70 px-4 py-1.5 rounded-full border border-amber-400/40 shadow-lg">
              {lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
            </p>
          </div>

          {/* Bottom Quick Navigation Toolbar (Clean bottom margin for easy thumb access) */}
          <div
            className="pb-3 sm:pb-5 z-50 flex items-center space-x-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => navigatePhoto(-1, e)}
              className="px-4 py-1.5 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 border border-amber-400/60 text-amber-200 text-xs font-kantumruy flex items-center space-x-1.5 shadow-md transition cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left text-[11px]"></i>
              <span>{lang === 'km' ? 'ថយក្រោយ' : 'Prev'}</span>
            </button>

            <span className="text-[11px] text-amber-300/80 font-kantumruy">
              {currentPhotoIndex + 1} / {gallery.length}
            </span>

            <button
              onClick={(e) => navigatePhoto(1, e)}
              className="px-4 py-1.5 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 border border-amber-400/60 text-amber-200 text-xs font-kantumruy flex items-center space-x-1.5 shadow-md transition cursor-pointer"
            >
              <span>{lang === 'km' ? 'បន្ទាប់' : 'Next'}</span>
              <i className="fa-solid fa-arrow-right text-[11px]"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
