import { useState, useRef } from 'react'
import { weddingData } from './data/weddingData'
import OrnamentCorners from './components/OrnamentCorners'
import AudioPlayer from './components/AudioPlayer'
import HeroPhotoScreen from './components/HeroPhotoScreen'
import CoverSection from './components/CoverSection'
import Countdown from './components/Countdown'
import ProgramSection from './components/ProgramSection'
import LocationSection from './components/LocationSection'
import GallerySection from './components/GallerySection'
import RSVPSection from './components/RSVPSection'
import GiftSection from './components/GiftSection'
import FloatingDock from './components/FloatingDock'
import Toast from './components/Toast'
import EnvelopeCover from './components/EnvelopeCover'
import VideoTransition from './components/VideoTransition'
import ScrollOverlayEffect from './components/ScrollOverlayEffect'

// Section Divider with Traditional Khmer Flourish
function SectionDivider() {
  return (
    <div className="flex items-center justify-center space-x-3 opacity-65 my-2">
      <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-amber-500 to-amber-600"></span>
      <span className="text-amber-800 text-xs">✤ ❖ ✤</span>
      <span className="h-[1px] w-14 bg-gradient-to-l from-transparent via-amber-500 to-amber-600"></span>
    </div>
  )
}

// Background Floating Gold Sparkles
function AmbientGoldDust() {
  const particles = [
    { top: '15%', left: '10%', size: '3px', duration: '9s', delay: '0s' },
    { top: '35%', left: '85%', size: '4px', duration: '12s', delay: '2s' },
    { top: '55%', left: '20%', size: '3px', duration: '10s', delay: '4s' },
    { top: '75%', left: '80%', size: '5px', duration: '14s', delay: '1s' },
    { top: '90%', left: '30%', size: '4px', duration: '11s', delay: '3s' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p, i) => (
        <span
          key={i}
          className="gold-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('km') // 'km' or 'en'
  const [toastMessage, setToastMessage] = useState(null)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [envelopeState, setEnvelopeState] = useState('closed') // 'closed', 'opening', 'opened'
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const scrollBodyRef = useRef(null)

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 2800)
  }

  // Triggered when clicking "បើកលិខិតអញ្ជើញ 💌"
  const handleOpenEnvelope = () => {
    setEnvelopeState('opening')
    setIsVideoPlaying(true)
  }

  // Triggered when video effect finishes or user skips
  const handleVideoComplete = () => {
    setIsVideoPlaying(false)
    setEnvelopeState('opened')
    setIsPlayingMusic(true)

    showToast(
      lang === 'km'
        ? `សិរីមង្គល អាពាហ៍ពិពាហ៍ ✨ (ភ្លេង៖ ${weddingData.music.playlist[0].title})`
        : 'Welcome to our Wedding Celebration ✨'
    )
  }

  const handleCloseEnvelope = () => {
    setEnvelopeState('closed')
    setIsVideoPlaying(false)
    if (scrollBodyRef.current) {
      scrollBodyRef.current.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  const scrollToAnchor = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleLanguage = () => {
    const nextLang = lang === 'km' ? 'en' : 'km'
    setLang(nextLang)
    showToast(nextLang === 'km' ? 'បានប្តូរទៅភាសាខ្មែរ (Khmer)' : 'Switched to English')
  }

  return (
    <div className="bg-neutral-950 flex justify-center items-center min-h-screen p-0 sm:p-4 selection:bg-amber-200 selection:text-amber-950 font-kantumruy antialiased">
      {/* Toast Notification */}
      <Toast toast={toastMessage} />

      {/* Main Mobile App Container */}
      <main className="w-full max-w-[430px] h-[100dvh] max-h-[920px] bg-parchment relative overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.85)] rounded-none sm:rounded-[36px] border-0 sm:border sm:border-amber-500/25">
        {/* 1. ENVELOPE COVER SCREEN (With Golden Heart Kbach & Couple Names) */}
        {envelopeState !== 'opened' && !isVideoPlaying && (
          <EnvelopeCover
            couple={weddingData.couple}
            onOpen={handleOpenEnvelope}
            isOpening={envelopeState === 'opening'}
          />
        )}

        {/* 2. VIDEO OPENING EFFECT (Plays user's provided video on click) */}
        <VideoTransition
          active={isVideoPlaying}
          onComplete={handleVideoComplete}
        />

        {/* 3. AMBIENT SCROLL VIDEO EFFECT (Plays overlay while viewing & scrolling) */}
        {envelopeState === 'opened' && (
          <ScrollOverlayEffect active={true} />
        )}

        {/* Traditional Khmer Watermark Pattern */}
        <div className="absolute inset-0 khmer-pattern-bg opacity-40 pointer-events-none z-0"></div>

        {/* Ambient Gold Dust Particles */}
        <AmbientGoldDust />

        {/* Traditional Khmer Corner Ornaments (Fixed Frame) */}
        <OrnamentCorners />

        {/* Top Floating Header Action Bar */}
        <header
          className="absolute top-0 inset-x-0 z-40 pt-4 px-5 flex justify-between items-center w-full pointer-events-auto"
          data-purpose="top-action-bar"
        >
          {/* Re-seal Envelope Button & Status Pill */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleCloseEnvelope}
              className="h-8 px-2.5 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md border border-amber-300/80 shadow-md flex items-center justify-center space-x-1.5 active:scale-95 transition cursor-pointer text-amber-100 text-xs font-semibold"
              title={lang === 'km' ? 'មើលមុខសំបុត្រឡើងវិញ' : 'View Envelope Cover'}
            >
              <span>💌</span>
              <span className="text-[10px] font-kantumruy">
                {lang === 'km' ? 'មុខសំបុត្រ' : 'Cover'}
              </span>
            </button>

            <div className="hidden xs:flex items-center space-x-1.5 bg-black/45 backdrop-blur-md border border-amber-300/80 px-2 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[9.5px] font-semibold text-amber-200 tracking-wider">
                {lang === 'km' ? 'សិរីសួស្តី' : 'Union'}
              </span>
            </div>
          </div>

          {/* Controls: Music & Language Switcher */}
          <div className="flex items-center space-x-2">
            {/* Audio Toggle & Track Switcher with User's songs */}
            <AudioPlayer
              musicData={weddingData.music}
              lang={lang}
              onToast={showToast}
              isPlaying={isPlayingMusic}
              setIsPlaying={setIsPlayingMusic}
            />

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-full bg-white/95 shadow-md border border-amber-300 flex items-center justify-center space-x-1.5 hover:bg-amber-50 active:scale-95 transition cursor-pointer"
              title={lang === 'km' ? 'ប្តូរជាភាសាអង់គ្លេស' : 'Switch to Khmer'}
            >
              {lang === 'km' ? (
                // Cambodia Flag
                <svg className="w-4 h-3 rounded-xs shadow-inner" viewBox="0 0 900 600">
                  <rect fill="#032ea1" height="600" width="900"></rect>
                  <rect fill="#e00025" height="300" width="900" y="150"></rect>
                  <g fill="#fff">
                    <path d="M450,210 L457,235 L443,235 Z M420,230 L425,245 L415,245 Z M480,230 L485,245 L475,245 Z"></path>
                    <rect height="35" width="80" x="410" y="245"></rect>
                    <rect height="30" width="140" x="380" y="275"></rect>
                  </g>
                </svg>
              ) : (
                // English Flag Icon
                <span className="text-xs">🇬🇧</span>
              )}
              <span className="text-[10px] font-bold text-amber-950 font-kantumruy">
                {lang === 'km' ? 'KH' : 'EN'}
              </span>
            </button>
          </div>
        </header>

        {/* Continuous Scroll Content Container */}
        <div
          ref={scrollBodyRef}
          className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden scroll-smooth"
          id="main-scroll-body"
        >
          {/* 1. HERO PHOTO SCREEN (photo-head.jfif background with Golden Kbach Crown Frame and Golden Heart) */}
          <HeroPhotoScreen
            data={weddingData}
            lang={lang}
            onScrollDown={scrollToAnchor}
          />

          {/* 2. INVITATION DETAILS CONTAINER (Padding & Sections) */}
          <div className="px-4 sm:px-5 pt-4 pb-28 space-y-7 bg-parchment relative z-10">
            {/* Formal Invitation Card with Parents' blessings */}
            <CoverSection data={weddingData} lang={lang} onToast={showToast} />

            <SectionDivider />

            {/* Countdown Timer Section */}
            <Countdown targetDate={weddingData.event.dateIso} lang={lang} />

            <SectionDivider />

            {/* Detailed Wedding Program Itinerary */}
            <ProgramSection itinerary={weddingData.itinerary} lang={lang} />

            <SectionDivider />

            {/* Location & Google Maps */}
            <LocationSection event={weddingData.event} lang={lang} onToast={showToast} />

            <SectionDivider />

            {/* Pre-Wedding Photo Gallery with Lightbox */}
            <GallerySection gallery={weddingData.gallery} lang={lang} />

            <SectionDivider />

            {/* RSVP & Live Wishes Wall */}
            <RSVPSection
              initialWishes={weddingData.initialWishes}
              lang={lang}
              onToast={showToast}
            />

            <SectionDivider />

            {/* Digital Gift / KHQR */}
            <GiftSection banking={weddingData.banking} lang={lang} onToast={showToast} />

            {/* Gratitude Footer */}
            <footer className="text-center pt-2 pb-6 px-4">
              <span className="font-moul text-sm gold-gradient-text block mb-1">
                {lang === 'km' ? 'សូមអរព្រះគុណ និងអរគុណ' : 'With Sincere Gratitude'}
              </span>
              <p className="text-[10px] text-amber-900/80 font-kantumruy leading-relaxed">
                {lang === 'km'
                  ? 'វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់លោកអ្នក ជាកិត្តិយសដ៏ធំធេងសម្រាប់គ្រួសារយើងខ្ញុំទាំងពីរ!'
                  : 'Your gracious presence is the greatest honor and blessing to our families!'}
              </p>
            </footer>
          </div>
        </div>

        {/* Floating Bottom Navigation Dock */}
        <FloatingDock lang={lang} onScrollTo={scrollToAnchor} />
      </main>
    </div>
  )
}
