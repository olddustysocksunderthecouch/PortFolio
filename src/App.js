import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DigitalProjects } from './pages/DigitalProjects/DigitalProjects'
import { PhysicalProjects } from './pages/PhysicalProjects/PhysicalProjects'
import { Layout } from './layout/MainLayout'
import { About } from './pages/About/About'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/digital-projects" element={<DigitalProjects />} />
          <Route path="/physical-projects" element={<PhysicalProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
