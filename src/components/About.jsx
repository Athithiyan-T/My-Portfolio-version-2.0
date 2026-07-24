import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="about__body">
     <p>
  I'm <strong>Athithiyan T</strong>, 👨‍💻Full Stack & AI Engineer | Machine Learning & Deep Learning
</p>
<p>
  ⚙️ I specialize in end-to-end development—designing backend systems with Python and REST
  APIs, and delivering responsive, user-focused interfaces using modern JavaScript frameworks.
  I've built real-world projects involving authentication, API integrations, and modular
  system design aligned with industry practices. Alongside this, I've worked on ML and Deep
  Learning projects — from data preprocessing and model training to integrating trained
  models into functional applications — giving me a practical, product-first understanding
  of how AI features actually ship, not just how they're prototyped in a notebook.
</p>
<p>
  🚀I'm actively deepening
  my expertise in AI-driven applications and Generative AI, focused on integrating
  intelligent, model-backed features into practical software — the kind of work that sits
  at the intersection of solid engineering and applied AI, which is where I want to grow.
</p>
<p>
  Open to fresher roles 🌱 in Full Stack Development and AI/ML-integrated software, with
  opportunities to learn fast, build real systems, and grow under experienced teams.
</p>
<div className="about__goal">
  <span className="tag">Goal</span>
  <p>
    To build production-grade software that combines clean full stack engineering with
    applied AI, ML, and Gen AI — solving real-world problems with performant, well-architected
    systems rather than surface-level integrations.
  </p>
</div>

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
