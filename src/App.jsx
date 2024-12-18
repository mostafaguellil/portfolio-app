import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Qualifications from './components/Qualifications'
import Experience from './components/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-200 text-black'>
      <Navbar />
      <Hero />
      <Qualifications />
      <Experience />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
