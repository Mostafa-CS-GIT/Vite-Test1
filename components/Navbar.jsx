import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Developers', to: '/developers' },
  { label: 'Zones', to: '/zones' },
  { label: 'Units', to: '/units' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          to="/"
          className="shrink-0 text-lg font-semibold tracking-[0.16em] text-white"
        >
          RE <span className="text-amber-400">(:</span>
        </Link>
        <ul className="flex items-center gap-1 text-xs font-medium sm:gap-5 sm:text-sm">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="rounded-full px-2.5 py-2 text-slate-200 transition hover:bg-white/10 hover:text-amber-300 sm:px-3"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
