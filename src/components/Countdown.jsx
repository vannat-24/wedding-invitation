import { useState, useEffect } from 'react'

export default function Countdown({ targetDate, lang }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  })

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        isPassed: false,
      })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const toKhmerNum = (num) => {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
    return String(num)
      .padStart(2, '0')
      .split('')
      .map((d) => khmerDigits[d] || d)
      .join('')
  }

  const formatNumber = (num) => {
    return lang === 'km' ? toKhmerNum(num) : String(num).padStart(2, '0')
  }

  return (
    <section
      id="countdown-section"
      className="bg-gradient-to-b from-amber-50/90 via-white/95 to-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-300/85 shadow-md gold-card-shadow text-center relative overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200/40 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-300/25 rounded-full blur-xl pointer-events-none"></div>

      <div className="flex items-center justify-center space-x-1.5 mb-3 relative z-10">
        <i className="fa-regular fa-clock text-amber-700 text-xs"></i>
        <h3 className="font-moul text-xs text-amber-950">
          {lang === 'km'
            ? 'រាប់ថយក្រោយឆ្ពោះទៅកាន់ថ្ងៃមង្គល'
            : 'Countdown to Wedding Day'}
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-1 relative z-10">
        {/* Days */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 border border-amber-200 shadow-sm flex flex-col items-center hover:border-amber-400 transition-colors">
          <span className="font-moul text-xl gold-gradient-text leading-none tracking-tight">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-[9.5px] font-bold text-amber-900/85 mt-1 font-kantumruy">
            {lang === 'km' ? 'ថ្ងៃ' : 'Days'}
          </span>
        </div>

        {/* Hours */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 border border-amber-200 shadow-sm flex flex-col items-center hover:border-amber-400 transition-colors">
          <span className="font-moul text-xl gold-gradient-text leading-none tracking-tight">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-[9.5px] font-bold text-amber-900/85 mt-1 font-kantumruy">
            {lang === 'km' ? 'ម៉ោង' : 'Hours'}
          </span>
        </div>

        {/* Minutes */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 border border-amber-200 shadow-sm flex flex-col items-center hover:border-amber-400 transition-colors">
          <span className="font-moul text-xl gold-gradient-text leading-none tracking-tight">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-[9.5px] font-bold text-amber-900/85 mt-1 font-kantumruy">
            {lang === 'km' ? 'នាទី' : 'Mins'}
          </span>
        </div>

        {/* Seconds */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 border border-amber-200 shadow-sm flex flex-col items-center hover:border-amber-400 transition-colors">
          <span className="font-moul text-xl gold-gradient-text leading-none tracking-tight">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-[9.5px] font-bold text-amber-900/85 mt-1 font-kantumruy">
            {lang === 'km' ? 'វិនាទី' : 'Secs'}
          </span>
        </div>
      </div>

      <p className="text-[10px] text-amber-900/80 mt-3 font-kantumruy">
        {lang === 'km'
          ? 'យើងខ្ញុំទន្ទឹងរង់ចាំទទួលស្វាគមន៍វត្តមានដ៏ខ្ពង់ខ្ពស់របស់លោកអ្នក!'
          : 'We look forward to celebrating this special day with you!'}
      </p>
    </section>
  )
}

