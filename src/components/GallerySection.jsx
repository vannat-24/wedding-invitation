import { useState, useEffect, useRef } from 'react'
import OrnamentCorners from './OrnamentCorners'

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

      {/* Lightbox Modal with Original Website Frame & Corner Ornaments */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-0 sm:p-4 backdrop-blur-md animate-fade-in select-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main App Frame (Preserves exact website format: Khmer Corner Ornaments, Gold Border & Dimensions) */}
          <div
            className="relative w-full max-w-[430px] h-[100dvh] max-h-[920px] bg-neutral-950/95 rounded-none sm:rounded-[36px] border-0 sm:border sm:border-amber-500/40 overflow-hidden flex flex-col justify-between items-center p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Traditional Khmer Corner Ornaments & Inner Gold Filigree Frame */}
            <OrnamentCorners />

            {/* Subtle Ambient Gold Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              <span className="gold-particle" style={{ top: '15%', left: '12%', width: '3px', height: '3px', animationDuration: '9s' }} />
              <span className="gold-particle" style={{ top: '35%', left: '85%', width: '3px', height: '3px', animationDuration: '11s' }} />
              <span className="gold-particle" style={{ top: '75%', left: '18%', width: '3px', height: '3px', animationDuration: '10s' }} />
              <span className="gold-particle" style={{ top: '85%', left: '82%', width: '3px', height: '3px', animationDuration: '12s' }} />
            </div>

            {/* Top Close Button ("Cross X") */}
            <div className="w-full flex justify-end items-center pt-2 px-3 z-40">
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 active:scale-90 border border-amber-300/50 text-amber-200/90 hover:text-white flex items-center justify-center text-lg shadow-lg backdrop-blur-md transition cursor-pointer group"
                title={lang === 'km' ? 'បិទ' : 'Close'}
                aria-label="Close photo"
              >
                <i className="fa-solid fa-xmark group-hover:rotate-90 transition-transform duration-200"></i>
              </button>
            </div>

            {/* Center: Full-height Photo with Left/Right Buttons attached to edges */}
            <div className="relative w-full flex-1 flex flex-col items-center justify-center my-auto px-1 sm:px-2 z-30">
              {/* Image & Buttons Relative Wrapper */}
              <div className="relative w-full flex items-center justify-center">
                {/* Photo Image - Large, filling the screen with minimal margin */}
                <img
                  src={selectedPhoto.full}
                  alt={lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
                  className="w-full max-h-[76vh] sm:max-h-[80vh] object-contain rounded-xl border border-amber-400/70 shadow-[0_10px_35px_rgba(0,0,0,0.9)] bg-neutral-900/60"
                />

                {/* Left Arrow Button - Toned Down / Softer color & subtle translucency */}
                <button
                  onClick={(e) => navigatePhoto(-1, e)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 active:scale-90 border border-white/25 hover:border-amber-300/60 text-white/75 hover:text-white flex items-center justify-center text-sm sm:text-base shadow-md backdrop-blur-sm transition-all cursor-pointer group"
                  title={lang === 'km' ? 'រូបភាពមុន' : 'Previous'}
                  aria-label="Previous photo"
                >
                  <i className="fa-solid fa-chevron-left group-hover:-translate-x-0.5 transition-transform duration-200"></i>
                </button>

                {/* Right Arrow Button - Toned Down / Softer color & subtle translucency */}
                <button
                  onClick={(e) => navigatePhoto(1, e)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 active:scale-90 border border-white/25 hover:border-amber-300/60 text-white/75 hover:text-white flex items-center justify-center text-sm sm:text-base shadow-md backdrop-blur-sm transition-all cursor-pointer group"
                  title={lang === 'km' ? 'រូបភាពបន្ទាប់' : 'Next'}
                  aria-label="Next photo"
                >
                  <i className="fa-solid fa-chevron-right group-hover:translate-x-0.5 transition-transform duration-200"></i>
                </button>
              </div>

              {/* Photo Caption */}
              <p className="text-amber-100/90 text-xs sm:text-sm font-kantumruy font-medium mt-2 text-center bg-black/60 px-4 py-1 rounded-full border border-amber-400/30 shadow-md max-w-[90%] truncate">
                {lang === 'km' ? selectedPhoto.captionKh : selectedPhoto.captionEn}
              </p>
            </div>

            {/* Bottom Breathing Space */}
            <div className="h-3 pointer-events-none" />
          </div>
        </div>
      )}
    </section>
  )
}
