import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for internal links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="details">
        <EventDetails />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="involved">
        <GetInvolved />
      </div>
      <Footer />
    </div>
  );
}

export default App;