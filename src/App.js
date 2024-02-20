import react from 'react'
import Navbar from './components/NavBar.jsx'
import Header from './components/pages/Header.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'
import Footer from './components/pages/Footer.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
