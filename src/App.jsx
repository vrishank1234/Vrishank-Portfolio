import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Funk from './components/Funk'
// import Feature from './components/Feature'
// import { RevealLinks } from './components/Feature';
import { HoverImageLinks } from './components/Feature'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import AboutMe from './components/AboutMe'


function App() {

const locomotiveScroll = new LocomotiveScroll();
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data, etc.)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (or when your data is ready)
    }, 5000);
  }, []);
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      {loading ? (
        <Preloader /> // Show the preloader while loading
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <AboutMe />
          <Marquee />
          
          <Funk />
          {/* <Feature /> */}
          {/* <RevealLinks /> */}
          <About />
          <HoverImageLinks />
          
        </>
      )}
    </div>
  );
}

export default App