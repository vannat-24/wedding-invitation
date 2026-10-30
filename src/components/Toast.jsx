export default function Toast({ toast }) {
  if (!toast) return null

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-neutral-900/95 text-white border border-amber-400 px-4 py-2 rounded-full text-xs font-kantumruy shadow-2xl flex items-center space-x-2 transition-all animate-fade-in pointer-events-none max-w-[90vw] text-center">
      <i className="fa-solid fa-circle-check text-amber-400 text-sm shrink-0"></i>
      <span className="truncate">{toast}</span>
    </div>
  )
}

