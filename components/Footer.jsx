import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 text-white shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="mx-auto flex min-h-14 max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2 text-xs text-slate-300 sm:px-8 sm:text-sm">
        <Link to="/" className="font-semibold tracking-[0.14em] text-white">
          RE <span className="text-amber-400">(:</span>
        </Link>
        <p>Find your place. Make it home.</p>
      </div>
    </footer>
  )
}
