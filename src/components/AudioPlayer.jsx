import { useState, useEffect, useRef } from 'react'

export default function AudioPlayer({ musicData, lang, onToast, isPlaying, setIsPlaying }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const audioRef = useRef(null)

  const playlist = musicData?.playlist || [
    {
      title: 'ម្ចាស់បេះដូង',
      src: '/song/ម្ចាស់បេះដូង.mp3',
    },
    {
      title: 'ទ្រព្យសម្បត្តិស្នេហ៍',
      src: '/song/ទ្រព្យសម្បត្តិស្នេហ៍.mp3',
    },
  ]

  const currentSong = playlist[currentSongIndex] || playlist[0]

  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          // Song started successfully
        })
        .catch((err) => {
          console.warn('Audio play restricted by browser:', err)
        })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentSongIndex])

  const toggleAudio = (e) => {
    e.stopPropagation()
    if (isPlaying) {
      setIsPlaying(false)
      onToast(lang === 'km' ? 'បានផ្អាកភ្លេង' : 'Music Paused')
    } else {
      setIsPlaying(true)
      onToast(
        lang === 'km'
          ? `កំពុងចាក់៖ ${currentSong.title} ♫`
          : `Playing: ${currentSong.title} ♫`
      )
    }
  }

  const switchSong = (index, e) => {
    e.stopPropagation()
    setCurrentSongIndex(index)
    setIsPlaying(true)
    setShowPlaylist(false)
    onToast(
      lang === 'km'
        ? `បានប្តូរទៅបទ៖ ${playlist[index].title} ♫`
        : `Switched to: ${playlist[index].title} ♫`
    )
  }

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src={encodeURI(currentSong.src)}
        loop
        preload="auto"
      />

      <div className="flex items-center space-x-1">
        {/* Main Audio Toggle Pill */}
        <button
          onClick={toggleAudio}
          className="px-2.5 h-8 rounded-full bg-white/95 shadow-md border border-amber-300 flex items-center justify-center space-x-1.5 text-amber-900 text-xs hover:bg-amber-50 active:scale-95 transition-all cursor-pointer"
          title={lang === 'km' ? `ភ្លេង៖ ${currentSong.title}` : `Music: ${currentSong.title}`}
        >
          <i
            className={`fa-solid ${
              isPlaying ? 'fa-volume-high text-amber-700' : 'fa-volume-xmark text-neutral-400'
            } text-[11px]`}
          ></i>
          <div
            className={`flex items-center space-x-0.5 h-3 ${
              isPlaying ? 'opacity-100' : 'opacity-25'
            }`}
          >
            <span className="wave-bar w-0.5 bg-amber-600 rounded-full"></span>
            <span className="wave-bar w-0.5 bg-amber-500 rounded-full"></span>
            <span className="wave-bar w-0.5 bg-amber-700 rounded-full"></span>
          </div>
        </button>

        {/* Small Playlist Track Switcher Dropdown Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowPlaylist(!showPlaylist)
          }}
          className="w-6 h-8 rounded-full bg-white/90 border border-amber-300/80 flex items-center justify-center text-[10px] text-amber-900 hover:bg-amber-50 transition cursor-pointer"
          title="ជ្រើសរើសបទចម្រៀង"
        >
          <i className="fa-solid fa-list-music"></i>
        </button>
      </div>

      {/* Playlist Popover */}
      {showPlaylist && (
        <div className="absolute right-0 top-10 z-50 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-300 p-2 space-y-1 animate-fade-in font-kantumruy">
          <p className="text-[10px] font-bold text-amber-900 px-2 py-1 border-b border-amber-100 flex items-center justify-between">
            <span>បទចម្រៀងមង្គលការ</span>
            <span className="text-[9px] text-amber-600 font-normal">Playlist</span>
          </p>
          {playlist.map((song, idx) => (
            <button
              key={idx}
              onClick={(e) => switchSong(idx, e)}
              className={`w-full text-left px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between transition cursor-pointer ${
                idx === currentSongIndex
                  ? 'bg-amber-100 font-bold text-amber-950'
                  : 'hover:bg-amber-50 text-neutral-700'
              }`}
            >
              <div className="flex items-center space-x-2 truncate">
                <i
                  className={`fa-solid ${
                    idx === currentSongIndex && isPlaying
                      ? 'fa-play text-amber-700 text-[10px]'
                      : 'fa-music text-neutral-400 text-[10px]'
                  }`}
                ></i>
                <span className="truncate">{song.title}</span>
              </div>
              {idx === currentSongIndex && (
                <span className="text-[9px] text-emerald-600 font-bold">កំពុងចាក់</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
