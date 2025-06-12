import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import IntroVideo from './components/IntroVideo';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showSpline, setShowSpline] = useState(false); // State to toggle Spline visibility

  return (
    <div className="App">
      {/* Spline Background */}
      <div className={`spline-background ${showSpline ? 'visible' : 'hidden'}`}>
        <React.Suspense fallback={<div>Loading Background...</div>}>
          <Spline scene="https://prod.spline.design/7C8nw4i7Ahk-xAkw/scene.splinecode" />
        </React.Suspense>
      </div>
      {/* Scrollable Content */}
      <div
        className="content"
        onMouseEnter={() => setShowSpline(true)} // Show Spline on hover
        onMouseLeave={() => setShowSpline(false)} // Hide Spline when not hovering
        onTouchStart={() => setShowSpline(true)} // Show Spline on touch start
        onTouchEnd={() => setShowSpline(false)} // Hide Spline on touch end
      >
        {showIntro ? (
          <IntroVideo onSkip={() => setShowIntro(false)} />
        ) : (
          <>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact /> {/* Add the Contact component */}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;