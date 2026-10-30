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
  const [isPhotoViewing, setIsPhotoViewing] = useState(false)
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

        {/* Ambient Gold Dust Particles (Fades gracefully on photo viewing) */}
        <div className={`transition-opacity duration-300 ${isPhotoViewing ? 'opacity-0' : 'opacity-100'}`}>
          <AmbientGoldDust />
        </div>

        {/* Traditional Khmer Corner Ornaments (Fades gracefully on photo viewing) */}
        <div className={`transition-opacity duration-300 ${isPhotoViewing ? 'opacity-0' : 'opacity-100'}`}>
          <OrnamentCorners />
        </div>

        {/* Top Floating Header Action Bar - ALWAYS MOUNTED so background music never stops when viewing photos! */}
        <header
          className={`absolute top-0 inset-x-0 z-40 pt-4 px-5 flex justify-between items-center w-full transition-all duration-300 ${
            isPhotoViewing
              ? 'opacity-0 pointer-events-none -translate-y-4'
              : 'opacity-100 pointer-events-auto translate-y-0'
          }`}
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
            <GallerySection
              gallery={weddingData.gallery}
              lang={lang}
              onLightboxChange={setIsPhotoViewing}
            />

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

            {/* Wedding Gratitude & Creator Showcase Footer (បង្ហាញពីស្នាដៃអ្នករៀបរាង) */}
            <footer className="pt-2 pb-8 px-3 flex flex-col items-center text-center space-y-4 select-none">
              {/* Sincere Gratitude */}
              <div className="space-y-1">
                <span className="font-moul text-sm sm:text-base gold-gradient-text block">
                  {lang === 'km' ? 'សូមអរព្រះគុណ និងអរគុណ' : 'With Sincere Gratitude'}
                </span>
                <p className="text-[11px] text-amber-900/85 font-kantumruy leading-relaxed max-w-[320px] mx-auto">
                  {lang === 'km'
                    ? 'វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់លោកអ្នក ជាកិត្តិយសដ៏ធំធេងសម្រាប់គ្រួសារយើងខ្ញុំទាំងពីរ!'
                    : 'Your gracious presence is the greatest honor and blessing to our families!'}
                </p>
              </div>

              {/* Traditional Gold Filigree Divider */}
              <div className="flex items-center justify-center space-x-2 opacity-70">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-600"></span>
                <span className="text-amber-700 text-xs">✤ ❦ ✤</span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-600"></span>
              </div>

              {/* Creator Showcase Card (ស្នាដៃអ្នករៀបរាង) */}
              <div className="w-full max-w-[340px] bg-gradient-to-b from-[#fffef8] via-[#fdf8eb] to-[#fbf2dd] rounded-2xl p-3.5 border border-amber-300 shadow-[0_6px_20px_rgba(212,175,55,0.2)] flex flex-col items-center space-y-2">
                <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-[10px] font-bold text-amber-950 font-kantumruy">
                  <span className="text-amber-600">✨</span>
                  <span>{lang === 'km' ? 'ស្នាដៃរៀបរៀង និងរចនាដោយ' : 'Crafted & Designed by'}</span>
                  <span className="text-amber-600">✨</span>
                </div>

                <div className="flex items-center space-x-2.5 py-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-300 p-[1.5px] shadow-sm shrink-0">
                    <div className="w-full h-full rounded-full bg-[#3d2406] flex items-center justify-center text-amber-200 font-serif font-bold text-sm">
                      V
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-moul text-[13px] text-[#54380a] leading-tight">
                      {lang === 'km' ? weddingData.creator?.nameKh || 'វណ្ណាត់ (Vannat)' : weddingData.creator?.nameEn || 'Vannat'}
                    </p>
                    <p className="text-[9.5px] text-amber-900/80 font-kantumruy">
                      {lang === 'km' ? weddingData.creator?.roleKh || 'អ្នករៀបចំ និងអភិវឌ្ឍន៍ធៀបការអេឡិចត្រូនិក' : weddingData.creator?.roleEn || 'Digital Wedding Invitation Developer'}
                    </p>
                  </div>
                </div>

                {/* Creator Repository Link Badge */}
                <a
                  href="https://github.com/vannat-24/wedding-invitation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-900/10 hover:bg-amber-900/20 border border-amber-600/30 text-amber-950 text-[10px] font-medium font-kantumruy transition active:scale-95 cursor-pointer shadow-xs"
                >
                  <i className="fa-brands fa-github text-xs text-amber-900"></i>
                  <span className="font-semibold">vannat-24</span>
                  <span className="text-amber-600">•</span>
                  <span className="text-amber-800 text-[9px]">Wedding Invitation Repo</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[8px] text-amber-700 ml-0.5"></i>
                </a>

                {/* Copyright Dedication */}
                <p className="text-[8.5px] text-amber-900/60 font-kantumruy pt-1 border-t border-amber-200/60 w-full text-center">
                  © 2026 {lang === 'km' ? 'រក្សាសិទ្ធិគ្រប់យ៉ាង' : 'All Rights Reserved'} • Sin Chanveya &amp; Ly Nearyrath
                </p>
              </div>
            </footer>
          </div>
        </div>

        {/* Floating Bottom Navigation Dock (Smoothly fades out on photo viewing) */}
        <div
          className={`transition-all duration-300 ${
            isPhotoViewing
              ? 'opacity-0 pointer-events-none translate-y-6'
              : 'opacity-100 pointer-events-auto translate-y-0'
          }`}
        >
          <FloatingDock lang={lang} onScrollTo={scrollToAnchor} />
        </div>
      </main>
    </div>
  )
}
