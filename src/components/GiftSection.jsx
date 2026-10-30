import { useState } from 'react'

export default function GiftSection({ banking, lang, onToast }) {
  const [activeBank, setActiveBank] = useState('aba')

  const copyAccountNumber = (accNumber, bankName) => {
    navigator.clipboard
      .writeText(accNumber)
      .then(() => {
        onToast(
          lang === 'km'
            ? `បានចម្លងលេខគណនី ${bankName} (${accNumber}) រួចរាល់!`
            : `Copied ${bankName} account number (${accNumber})!`
        )
      })
      .catch(() => {
        onToast(`លេខគណនី: ${accNumber}`)
      })
  }

  const currentBank = banking[activeBank]

  return (
    <section className="scroll-mt-6" id="gift-section">
      <div className="text-center mb-3">
        <h3 className="font-moul text-[16px] gold-gradient-text">
          {lang === 'km' ? 'សំបុត្រចងដៃឌីជីថល / KHQR' : 'Digital Wedding Gift'}
        </h3>
        <p className="text-[10px] text-amber-900 font-semibold mt-0.5">
          {lang === 'km' ? 'Digital Gift & Ang Pao QR' : 'Send Your Blessings & Ang Pao'}
        </p>
      </div>

      <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-amber-300/85 shadow-md gold-card-shadow text-center relative overflow-hidden">
        <p className="text-[10.5px] text-[#5c3e0e] font-kantumruy mb-3.5 leading-relaxed max-w-[340px] mx-auto">
          {lang === 'km'
            ? 'សម្រាប់ភ្ញៀវកិត្តិយសដែលមានបំណងចងដៃតាមប្រព័ន្ធឌីជីថល លោកអ្នកអាចស្កេន KHQR ខាងក្រោមបានដោយងាយស្រួល'
            : 'For honorable guests wishing to send a digital wedding gift, you may conveniently scan the KHQR below'}
        </p>

        {/* Bank Switch Tabs */}
        <div className="flex justify-center space-x-2 mb-3.5">
          <button
            onClick={() => setActiveBank('aba')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeBank === 'aba'
                ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-sm border border-amber-800'
                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            ABA Bank
          </button>
          <button
            onClick={() => setActiveBank('acleda')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeBank === 'acleda'
                ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-sm border border-amber-800'
                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            ACLEDA Bank
          </button>
        </div>

        {/* Dynamic QR View */}
        <div className="flex flex-col items-center">
          <div className="p-3 bg-white border-2 border-dashed border-amber-400 rounded-2xl shadow-inner mb-3 relative max-w-[220px]">
            <div className="w-44 h-44 bg-gradient-to-b from-amber-50/60 to-white rounded-xl flex flex-col items-center justify-center border border-amber-200 relative p-2 shadow-xs">
              {/* KHQR Header Badge */}
              <div className="absolute top-1.5 left-2 right-2 flex items-center justify-between border-b border-amber-200/60 pb-1">
                <span className="text-[10px] font-black text-red-600 tracking-wider">KHQR</span>
                <span className={`text-[8.5px] font-bold ${activeBank === 'aba' ? 'text-sky-800' : 'text-blue-900'}`}>
                  {currentBank.bankName.toUpperCase()}
                </span>
              </div>

              {/* QR Code Image or Icon fallback */}
              {currentBank.qrImage ? (
                <img
                  src={currentBank.qrImage}
                  alt={`${currentBank.bankName} QR`}
                  className="w-36 h-36 object-contain rounded-lg mt-2 shadow-xs"
                />
              ) : (
                <>
                  <i className="fa-solid fa-qrcode text-7xl text-neutral-800 mt-3 mb-1"></i>
                  <span className="text-[8.5px] font-semibold text-neutral-500 font-kantumruy">
                    {lang === 'km' ? 'ស្កេនតាមគ្រប់កម្មវិធីធនាគារ' : 'Scan with Any Mobile Banking'}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-1 font-kantumruy">
            <p className="text-xs font-bold text-amber-950 tracking-wide">
              {currentBank.accountName}
            </p>
            <p className="text-[11.5px] text-neutral-600 font-mono">
              {currentBank.bankName}:{' '}
              <span className="font-bold text-neutral-900">{currentBank.accountNumber}</span>{' '}
              ({currentBank.currencies})
            </p>
          </div>

          <button
            onClick={() => copyAccountNumber(currentBank.rawNumber, currentBank.bankName)}
            className="mt-3 px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center space-x-1.5 shadow-xs cursor-pointer"
          >
            <i className="fa-regular fa-copy text-amber-800"></i>
            <span>
              {lang === 'km'
                ? `ចម្លងលេខគណនី ${currentBank.bankName}`
                : `Copy ${currentBank.bankName} Number`}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

