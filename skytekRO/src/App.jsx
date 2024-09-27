import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cards from './components/Cards'
import Cards2 from './components/Cards2'
import ImageSlider from './components/ImageSlider';
import Page3 from './components/Page3';
import Slide from './components/Slide';
import './index.css'

function App() {
  // const [count, setCount] = useState(0);

  // const images = [
  //   "https://via.placeholder.com/800x400.png?text=Slide+1",
  //   "https://via.placeholder.com/800x400.png?text=Slide+2",
  //   "https://via.placeholder.com/800x400.png?text=Slide+3",
  // ];

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Slide />
      {/* <ImageSlider images={images} /> */}
      {/* <Cards /> */}
      {/* <Page3 />
      <Cards2 />
      <Footer /> */}
    </>
  )
}

export default App
