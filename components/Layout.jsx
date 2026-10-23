import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="pt-16 pb-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
