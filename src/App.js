import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { ProjectsDigital } from './pages/ProjectsDigital/ProjectsDigital'
import { ProjectsPhysical } from './pages/ProjectsPhysical/ProjectsPhysical'
import { ProjectsDesign } from './pages/ProjectsDesign/ProjectsDesign'
import { Layout } from './layout/MainLayout'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Community } from './pages/Community/Community'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects-digital" element={<ProjectsDigital />} />
          <Route path="/projects-physical" element={<ProjectsPhysical />} />
          <Route path="/projects-design" element={<ProjectsDesign />} />
          <Route path="/projects-community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
