import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import About from '../pages/About.jsx'
import Developer from '../developers/developer.jsx'
import Home from '../pages/Home.jsx'
import Services from '../pages/Services.jsx'
import Zones from '../pages/Zones.jsx'
import ZoneDetail from '../pages/ZoneDetail.jsx'
import Units from '../pages/Units.jsx'
import UnitDetails from '../pages/UnitDetails.jsx'
import './index.css'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="developers" element={<Developer />} />
            <Route path="zones" element={<Zones />} />
            <Route path="zones/:id" element={<ZoneDetail />} />
            <Route path="units" element={<Units />} />
            <Route path="units/:id" element={<UnitDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
