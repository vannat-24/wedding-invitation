import { useState, useRef } from 'react'

export default function VideoHighlight({ lang, videoSrc = '/envelope-effect.mp4' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Video play error:', err))
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section className="scroll-mt-6" id="video-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'វីដេអូអនុស្សាវរីយ៍' : 'Wedding Cinematic Video'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Pre-Wedding Highlight Reel' : 'Moments in Motion'}
        </p>
      </div>

      <div className="bg-white/95 rounded-2xl p-3 sm:p-4 border border-amber-300/85 shadow-md gold-card-shadow relative overflow-hidden">
        {/* Luxury Gold Video Frame */}
        <div
          onClick={togglePlay}
          className="relative rounded-xl overflow-hidden border-2 border-amber-400/90 shadow-inner bg-black aspect-[3/4] cursor-pointer group flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            loop
            muted={isMuted}
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Dark Overlay when Paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all group-hover:bg-black/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.8)] border-2 border-white scale-100 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play text-xl ml-1"></i>
              </div>
              <span className="text-white text-xs font-kantumruy font-semibold mt-3 drop-shadow-md">
                {lang === 'km' ? 'ចុចដើម្បីទស្សនាវីដេអូ' : 'Tap to Play Video'}
              </span>
            </div>
          )}

          {/* Sound Mute/Unmute Toggle Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-black/80 transition-all border border-white/20"
            title={isMuted ? 'បើកសំឡេង' : 'បិទសំឡេង'}
          >
            <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
          </button>
        </div>

        <p className="text-center text-[10px] text-amber-800/80 mt-2 font-kantumruy">
          {lang === 'km'
            ? 'កម្រងវីដេអូខ្លីនៃក្តីស្រឡាញ់ និងការចងចាំដ៏ផ្អែមល្ហែម'
            : 'A cinematic glimpse of our eternal love story'}
        </p>
      </div>
    </section>
  )
}

