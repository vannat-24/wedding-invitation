import { useState, useEffect } from 'react'

export default function RSVPSection({ initialWishes, lang, onToast }) {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes')
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('LocalStorage error:', e)
    }
    return initialWishes
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guestCount: '2 នាក់',
    attendance: 'ចូលរួម',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('wedding_wishes', JSON.stringify(wishes))
    } catch (e) {
      console.warn('LocalStorage error:', e)
    }
  }, [wishes])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) return

    setIsSubmitting(true)

    const newWish = {
      id: Date.now(),
      name: formData.name.trim(),
      time: lang === 'km' ? 'អម្បាញ់មិញ' : 'Just now',
      message: formData.message.trim() || (lang === 'km' ? 'សូមប្រសិទ្ធពរជ័យសិរីសួស្តី ជ័យមង្គល!' : 'Best wishes to the newlyweds!'),
      attendance: formData.attendance,
      phone: formData.phone.trim(),
      guestCount: formData.guestCount,
    }

    setTimeout(() => {
      setWishes([newWish, ...wishes])
      setIsSubmitting(false)
      setFormData({
        name: '',
        phone: '',
        guestCount: '2 នាក់',
        attendance: 'ចូលរួម',
        message: '',
      })

      onToast(
        lang === 'km'
          ? `សូមអរគុណ ${newWish.name} សម្រាប់ការឆ្លើយតប និងជូនពរ!`
          : `Thank you ${newWish.name} for your RSVP & wishes!`
      )
    }, 400)
  }

  return (
    <section className="scroll-mt-6" id="rsvp-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'ការឆ្លើយតប និងជូនពរជ័យ' : 'RSVP & Heartfelt Wishes'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Confirm Attendance & Send Wishes' : 'Join the Celebration'}
        </p>
      </div>

      {/* Interactive RSVP Form */}
      <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-amber-300/85 shadow-md gold-card-shadow mb-4">
        <form onSubmit={handleSubmit} className="space-y-3 font-kantumruy text-xs">
          {/* Guest Name */}
          <div>
            <label className="block text-amber-950 font-semibold mb-1 text-[11.5px]">
              {lang === 'km' ? 'ឈ្មោះភ្ញៀវកិត្តិយស *' : 'Your Full Name *'}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={lang === 'km' ? 'សូមបញ្ចូលឈ្មោះរបស់លោកអ្នក...' : 'Enter your name...'}
              className="w-full rounded-xl border border-amber-200 px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-amber-50/20 outline-none transition"
            />
          </div>

          {/* Phone & Guest Count */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-amber-950 font-semibold mb-1 text-[11.5px]">
                {lang === 'km' ? 'លេខទូរស័ព្ទ' : 'Phone Number'}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="012 xxx xxx"
                className="w-full rounded-xl border border-amber-200 px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-amber-50/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-amber-950 font-semibold mb-1 text-[11.5px]">
                {lang === 'km' ? 'ចំនួនអ្នកចូលរួម' : 'Number of Guests'}
              </label>
              <select
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full rounded-xl border border-amber-200 px-2 py-2 text-xs focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-amber-50/20 outline-none transition"
              >
                <option value="1 នាក់">{lang === 'km' ? '១ នាក់' : '1 Guest'}</option>
                <option value="2 នាក់">{lang === 'km' ? '២ នាក់' : '2 Guests'}</option>
                <option value="3 នាក់">{lang === 'km' ? '៣ នាក់' : '3 Guests'}</option>
                <option value="ច្រើនជាង 3 នាក់">{lang === 'km' ? '៤ នាក់ឡើង' : '4+ Guests'}</option>
              </select>
            </div>
          </div>

          {/* Attendance Radio Buttons */}
          <div>
            <label className="block text-amber-950 font-semibold mb-1 text-[11.5px]">
              {lang === 'km' ? 'ការចូលរួម *' : 'Will you attend? *'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center space-x-2 p-2 rounded-xl border cursor-pointer transition ${
                  formData.attendance === 'ចូលរួម'
                    ? 'border-emerald-500 bg-emerald-50/60 shadow-xs'
                    : 'border-amber-200 bg-amber-50/20'
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="ចូលរួម"
                  checked={formData.attendance === 'ចូលរួម'}
                  onChange={() => setFormData({ ...formData, attendance: 'ចូលរួម' })}
                  className="text-amber-600 focus:ring-amber-500"
                />
                <span className="text-[11px] font-semibold text-emerald-800">
                  {lang === 'km' ? 'រីករាយចូលរួម' : 'Joyfully Attend'}
                </span>
              </label>

              <label
                className={`flex items-center space-x-2 p-2 rounded-xl border cursor-pointer transition ${
                  formData.attendance === 'មិនអាចចូលរួម'
                    ? 'border-neutral-500 bg-neutral-100 shadow-xs'
                    : 'border-amber-200 bg-amber-50/20'
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="មិនអាចចូលរួម"
                  checked={formData.attendance === 'មិនអាចចូលរួម'}
                  onChange={() => setFormData({ ...formData, attendance: 'មិនអាចចូលរួម' })}
                  className="text-amber-600 focus:ring-amber-500"
                />
                <span className="text-[11px] font-semibold text-neutral-600">
                  {lang === 'km' ? 'អភ័យទោស' : 'Decline with Regret'}
                </span>
              </label>
            </div>
          </div>

          {/* Heartfelt Message */}
          <div>
            <label className="block text-amber-950 font-semibold mb-1 text-[11.5px]">
              {lang === 'km' ? 'សារប្រសិទ្ធពរជ័យ' : 'Wedding Wishes'}
            </label>
            <textarea
              rows={2.5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                lang === 'km'
                  ? 'សូមប្រសិទ្ធពរជ័យសិរីសួស្តី ជ័យមង្គល...'
                  : 'Write your blessings for the couple...'
              }
              className="w-full rounded-xl border border-amber-200 px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-amber-50/20 outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:from-amber-800 hover:to-amber-800 text-white font-bold rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
          >
            <i className="fa-solid fa-paper-plane text-xs"></i>
            <span>
              {isSubmitting
                ? lang === 'km'
                  ? 'កំពុងបញ្ជូន...'
                  : 'Submitting...'
                : lang === 'km'
                ? 'ផ្ញើសារជូនពរ & បញ្ជាក់ការចូលរួម'
                : 'Send Wishes & Confirm RSVP'}
            </span>
          </button>
        </form>
      </div>

      {/* Guest Wishes Wall Feed */}
      <div className="space-y-2.5" id="wishes-wall">
        <h4 className="font-moul text-xs text-amber-900 flex items-center justify-between px-1">
          <span>{lang === 'km' ? 'សារជូនពរពីភ្ញៀវកិត្តិយស' : 'Guest Wishes Wall'}</span>
          <span className="text-[10px] font-kantumruy font-normal text-amber-800">
            ({wishes.length} {lang === 'km' ? 'សារ' : 'wishes'})
          </span>
        </h4>

        {wishes.map((wish) => (
          <div
            key={wish.id}
            className="bg-white/95 rounded-xl p-3 border border-amber-200/90 shadow-sm relative transition hover:border-amber-400"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[10px] text-amber-900 font-bold">
                  {wish.name.charAt(0)}
                </span>
                <span className="font-bold text-xs text-amber-950 font-kantumruy">
                  {wish.name}
                </span>
              </div>
              <span className="text-[9px] text-neutral-400 font-kantumruy">
                {wish.time}
              </span>
            </div>
            <p className="text-[11px] text-neutral-700 font-kantumruy italic leading-relaxed pl-6.5">
              "{wish.message}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

