import { useEffect, useRef } from 'react'

export default function VideoTransition({ active, onComplete }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!active || !videoRef.current) return

    videoRef.current.currentTime = 0
    videoRef.current
      .play()
      .catch((err) => {
        console.warn('Video auto-play restricted, user interaction handled:', err)
      })
  }, [active])

  if (!active) return null

  return (
    <div className="absolute inset-0 z-50 bg-black flex items-center justify-center overflow-hidden animate-fade-in select-none">
      <video
        ref={videoRef}
        src="/envelope-effect.mp4"
        playsInline
        autoPlay
        onEnded={onComplete}
        className="w-full h-full object-cover"
      />

      {/* Skip Button on Top-Right */}
      <button
        onClick={onComplete}
        className="absolute top-4 right-4 z-50 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-amber-200 border border-amber-300/60 text-xs font-kantumruy font-semibold flex items-center space-x-1.5 transition active:scale-95 cursor-pointer shadow-lg"
      >
        <span>រំលង</span>
        <i className="fa-solid fa-forward-step text-[10px]"></i>
      </button>

      {/* Subtle indicator bar at bottom showing playback progress */}
      <div className="absolute bottom-2 inset-x-8 h-1 bg-white/20 rounded-full overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full animate-[progress_8s_linear_forwards]"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}

