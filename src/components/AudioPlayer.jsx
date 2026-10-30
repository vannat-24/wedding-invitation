import { useState, useEffect, useRef } from 'react'

export default function AudioPlayer({ musicData, lang, onToast, isPlaying, setIsPlaying }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const audioRef = useRef(null)
  const popoverRef = useRef(null)

  const playlist = musicData?.playlist || [
    {
      title: 'ម្ចាស់បេះដូង',
      artistKh: 'បទមង្គលការប្រពៃណីខ្មែរ',
      artistEn: 'Traditional Khmer Wedding Song',
      cover: '/images/gallery/photo-1.jfif',
      src: '/song/ម្ចាស់បេះដូង.mp3',
    },
    {
      title: 'ទ្រព្យសម្បត្តិស្នេហ៍',
      artistKh: 'បទមង្គលការមនោសញ្ចេតនា',
      artistEn: 'Romantic Wedding Song',
      cover: '/images/gallery/photo-3.jfif',
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
          // Playback started successfully
        })
        .catch((err) => {
          console.warn('Audio play restricted by browser policy:', err)
        })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentSongIndex])

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setShowPlaylist(false)
      }
    }
    if (showPlaylist) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showPlaylist])

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
    <div className="relative select-none" ref={popoverRef}>
      {/* Permanent HTML5 Audio Element (Continuous playback, never unmounts) */}
      <audio
        ref={audioRef}
        src={encodeURI(currentSong.src)}
        loop
        preload="auto"
      />

      <div className="flex items-center space-x-1.5">
        {/* Main Audio Toggle Pill with Rotating Mini Album Avatar */}
        <button
          onClick={toggleAudio}
          className="h-8 pl-1.5 pr-2.5 rounded-full bg-white/95 shadow-md border border-amber-300 flex items-center justify-center space-x-1.5 text-amber-900 text-xs hover:bg-amber-50 active:scale-95 transition-all cursor-pointer group"
          title={lang === 'km' ? `ភ្លេង៖ ${currentSong.title}` : `Music: ${currentSong.title}`}
        >
          {/* Mini Music Avatar Disc */}
          <div className="relative w-5 h-5 rounded-full overflow-hidden border border-amber-400 shadow-xs shrink-0 bg-amber-100 flex items-center justify-center">
            {currentSong.cover ? (
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '4s' }}
              />
            ) : (
              <i className="fa-solid fa-music text-[9px] text-amber-700"></i>
            )}
            {/* Center Spindle Hole of Vinyl Disc */}
            <span className="absolute inset-auto w-1.5 h-1.5 rounded-full bg-amber-950 border border-amber-200"></span>
          </div>

          {/* Equalizer Wave Bars */}
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

        {/* Playlist Track Switcher Dropdown Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowPlaylist(!showPlaylist)
          }}
          className={`w-7 h-8 rounded-full border shadow-sm flex items-center justify-center text-xs transition cursor-pointer ${
            showPlaylist
              ? 'bg-amber-600 text-white border-amber-700 scale-105'
              : 'bg-white/95 border-amber-300/80 text-amber-900 hover:bg-amber-50'
          }`}
          title={lang === 'km' ? 'ជ្រើសរើសបទចម្រៀង' : 'Select Wedding Song'}
        >
          <i className="fa-solid fa-music text-[11px]"></i>
        </button>
      </div>

      {/* Playlist Popover with Music Avatars (រូបតំណាងតន្រ្តី) */}
      {showPlaylist && (
        <div className="absolute right-0 top-10 z-50 w-72 max-w-[calc(100vw-32px)] bg-gradient-to-b from-[#fffef8] via-[#fffdf0] to-[#fbf5e2] backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] border-2 border-amber-300 p-3 space-y-2 animate-fade-in font-kantumruy select-none">
          {/* Popover Header */}
          <div className="flex items-center justify-between pb-2 border-b border-amber-200/80">
            <div className="flex items-center space-x-1.5">
              <span className="text-amber-600 text-sm">🎵</span>
              <div>
                <p className="font-moul text-[11.5px] text-[#54380a] leading-tight">
                  {lang === 'km' ? 'បញ្ជីបទចម្រៀងមង្គលការ' : 'Wedding Playlist'}
                </p>
                <p className="text-[9px] text-amber-800/80">
                  {lang === 'km' ? `មាន ${playlist.length} បទសម្រាប់ជ្រើសរើស` : `${playlist.length} songs available`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPlaylist(false)}
              className="w-5 h-5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 text-[10px] flex items-center justify-center transition cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Songs List with Album Avatars (រូបតំណាងតន្រ្តី) */}
          <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-0.5">
            {playlist.map((song, idx) => {
              const isCurrentSong = idx === currentSongIndex
              const isSongPlaying = isCurrentSong && isPlaying

              return (
                <button
                  key={idx}
                  onClick={(e) => switchSong(idx, e)}
                  className={`w-full text-left p-2 rounded-xl flex items-center space-x-2.5 transition cursor-pointer border ${
                    isCurrentSong
                      ? 'bg-gradient-to-r from-amber-100/90 to-amber-200/70 border-amber-400 shadow-sm'
                      : 'bg-white/80 hover:bg-amber-50/90 border-amber-200/60 hover:border-amber-300 text-neutral-800'
                  }`}
                >
                  {/* Music Avatar (រូបតំណាងតន្រ្តី - Circular Cover Art with Vinyl Styling) */}
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-300 shadow-sm shrink-0 bg-amber-900/10">
                    <img
                      src={song.cover || '/images/gallery/photo-1.jfif'}
                      alt={song.title}
                      className={`w-full h-full object-cover transition-transform ${
                        isSongPlaying ? 'scale-105' : ''
                      }`}
                    />

                    {/* Overlay Icon: Animated Equalizer when playing, Play icon on hover */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                        isSongPlaying
                          ? 'bg-black/40 opacity-100'
                          : 'bg-black/20 opacity-0 hover:opacity-100'
                      }`}
                    >
                      {isSongPlaying ? (
                        <div className="flex items-center space-x-0.5 h-3">
                          <span className="wave-bar w-0.5 bg-amber-300 rounded-full"></span>
                          <span className="wave-bar w-0.5 bg-white rounded-full"></span>
                          <span className="wave-bar w-0.5 bg-amber-300 rounded-full"></span>
                        </div>
                      ) : (
                        <i className="fa-solid fa-play text-white text-[10px] ml-0.5 drop-shadow"></i>
                      )}
                    </div>
                  </div>

                  {/* Song Title & Artist Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-bold font-kantumruy truncate ${
                        isCurrentSong ? 'text-amber-950 font-semibold' : 'text-neutral-800'
                      }`}
                    >
                      {song.title}
                    </p>
                    <p className="text-[9.5px] text-amber-800/80 truncate">
                      {lang === 'km' ? song.artistKh : song.artistEn}
                    </p>
                  </div>

                  {/* Playing Status Pill */}
                  <div className="shrink-0">
                    {isSongPlaying ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-800 text-[9px] font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>{lang === 'km' ? 'កំពុងចាក់' : 'Playing'}</span>
                      </span>
                    ) : isCurrentSong ? (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-800 text-[9px] font-bold">
                        {lang === 'km' ? 'ផ្អាក' : 'Paused'}
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center justify-center text-[9px] transition">
                        <i className="fa-solid fa-play ml-0.5"></i>
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <p className="text-center text-[9px] text-amber-800/70 pt-1 border-t border-amber-200/60">
            {lang === 'km'
              ? 'ចុចលើបទចម្រៀងដើម្បីចាក់ភ្លេងមង្គលការ'
              : 'Tap a song to play wedding music'}
          </p>
        </div>
      )}
    </div>
  )
}
