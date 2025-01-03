import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Qualifications from './components/Qualifications'
import Experience from './components/Experience'
import Projects from './components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-r from-zinc-300 to-zinc-400 text-black'>
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="qualifications">
        <Qualifications />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
