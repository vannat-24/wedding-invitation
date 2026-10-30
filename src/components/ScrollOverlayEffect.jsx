import { useEffect, useRef } from 'react'

export default function ScrollOverlayEffect({ active = true }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (active) {
      videoRef.current.play().catch((err) => {
        console.warn('Scroll effect video auto-play prevented:', err)
      })
    } else {
      videoRef.current.pause()
    }
  }, [active])

  if (!active) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden mix-blend-screen opacity-75 select-none">
      <video
        ref={videoRef}
        src="/scroll-effect.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter brightness-110 contrast-125"
      />
    </div>
  )
}

