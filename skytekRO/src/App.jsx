import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cards from './components/Cards'
import Cards2 from './components/Cards2'


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Cards2 />
      <Footer />
    </>
  )
}

export default App
