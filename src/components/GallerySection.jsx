import { useState, useEffect, useRef } from 'react'

export default function GallerySection({ gallery, lang, onLightboxChange }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const touchStartX = useRef(null)

  const openLightbox = (photo) => {
    setSelectedPhoto(photo)
    onLightboxChange?.(true)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
    onLightboxChange?.(false)
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

      {/* Lightbox Modal (Full-screen, minimal margin, left/right buttons attached directly to image edges) */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-2 sm:p-3 backdrop-blur-md animate-fade-in select-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top-Right Close Button ("Cross X") */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 w-11 h-11 rounded-full bg-black/65 hover:bg-black/90 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-xl shadow-[0_4px_25px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all cursor-pointer group"
            title={lang === 'km' ? 'បិទ' : 'Close'}
            aria-label="Close photo"
          >
            <i className="fa-solid fa-xmark group-hover:rotate-90 transition-transform duration-200"></i>
          </button>

          {/* Centered Large Photo Container (Fills screen with slight margin) */}
          <div
            className="relative w-full max-w-[430px] sm:max-w-[480px] flex flex-col items-center justify-center my-auto px-1 sm:px-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Wrapper with Left & Right Buttons attached right at the photo edges */}
            <div className="relative w-full flex items-center justify-center">
              {/* Photo Image - Large, filling the screen with small margin */}
              <img
                src={selectedPhoto.full}
                alt={lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
                className="w-full max-h-[80vh] sm:max-h-[84vh] object-contain rounded-2xl border-2 border-amber-400/90 shadow-[0_12px_45px_rgba(0,0,0,0.95)] bg-neutral-900/60"
              />

              {/* Left Arrow Button (Right at the left edge of the image) */}
              <button
                onClick={(e) => navigatePhoto(-1, e)}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/90 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-lg shadow-[0_4px_20px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all cursor-pointer group"
                title={lang === 'km' ? 'រូបភាពមុន' : 'Previous'}
                aria-label="Previous photo"
              >
                <i className="fa-solid fa-chevron-left group-hover:-translate-x-0.5 transition-transform duration-200"></i>
              </button>

              {/* Right Arrow Button (Right at the right edge of the image) */}
              <button
                onClick={(e) => navigatePhoto(1, e)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/90 active:scale-90 border-2 border-amber-400/80 text-amber-200 hover:text-white flex items-center justify-center text-lg shadow-[0_4px_20px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all cursor-pointer group"
                title={lang === 'km' ? 'រូបភាពបន្ទាប់' : 'Next'}
                aria-label="Next photo"
              >
                <i className="fa-solid fa-chevron-right group-hover:translate-x-0.5 transition-transform duration-200"></i>
              </button>
            </div>

            {/* Photo Caption */}
            <p className="text-amber-100 text-xs sm:text-sm font-kantumruy font-medium mt-2.5 text-center bg-black/70 px-4 py-1.5 rounded-full border border-amber-400/40 shadow-lg max-w-[92%] truncate">
              {lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
