import React, { useState } from 'react';
import './App.css';
import { Navbar, Hero, About, Projects, Footer } from './Components';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
    </div >
  );
}

export default App;
