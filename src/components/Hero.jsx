import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile from '../assets/linkdin profile pic.png';

// Custom hook to create a "Hacker Decrypt" text animation
const useHackerText = (finalText) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    // Start empty to avoid flashing final text immediately
    setDisplayText(finalText.replace(/./g, '-')); 
    
    // Alphanumeric + symbols for hacker scrambling effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        finalText.split("").map((letter, index) => {
          if (letter === " ") return " "; // Preserve spaces explicitly
          if (index < iterations) {
            return finalText[index]; // Resolve to actual correct character
          }
          // Scramble characters that are not yet decoded
          return letters[Math.floor(Math.random() * letters.length)];
        }).join("")
      );

      // Slower resolution so the user can enjoy the scrambling (resolves 1 char every 3 ticks)
      if (iterations >= finalText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3; 
    }, 40);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [finalText]);

  return displayText;
};

function Hero() {
  const animatedName = useHackerText("ATHITHIYAN T");

  return (
    <section id="home" className="hero">
      {/* Decorative background grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__badge">👋 Open to Fresher Roles</span>

        <h1 className="hero__name">
          I'm <span className="hero__highlight glitch-effect">{animatedName}</span>
        </h1>

        <p className="hero__role">
          Python Full Stack Developer &amp; Generative AI Enthusiast
        </p>

        <p className="hero__desc">
          Building scalable, accessible full-stack applications with a strong
          interest in AI & Generative AI‑driven innovation.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#resume"  className="btn btn-outline">Download My Resume</a>
        </div>
      </div>

      {/* Profile photo */}
      <div className="hero__photo-wrap">
        <img
          src={profile}
          alt="Athithiyan T"
          className="hero__photo"
        />
      </div>
    </section>
  );
}

export default Hero;
