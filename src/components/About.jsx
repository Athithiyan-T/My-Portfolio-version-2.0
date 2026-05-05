import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="about__body">
        <p>
          I'm <strong>Athithiyan T</strong>, 👨‍💻 Python Full Stack Developer building scalable, 
          production-ready applications with a strong focus on performance, usability, and clean architecture.
        </p>
        <p>
         ⚙️ I specialize in end-to-end development—designing backend systems with Python and REST APIs, and delivering responsive, user-focused interfaces using modern JavaScript frameworks.
          I’ve built real-world projects involving authentication, API integrations, and modular system design aligned with industry practices.
        </p>
        <p>
          🚀 With a builder mindset suited for fast-paced environments, I enjoy turning ideas into deployable products and iterating quickly based on real feedback. Alongside full stack development,
           I’m actively expanding into AI-driven applications, integrating intelligent features into practical software solutions.
        </p>
        <p>
          Open to fresher roles 🌱 with opportunities for learning and hands-on development.
        </p>

        <div className="about__goal">
          <span className="tag">Goal</span>
          <p>
            To leverage modern AI & Gen AI technologies to solve real-world problems while strictly
            adhering to clean code practices and performance optimization.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
