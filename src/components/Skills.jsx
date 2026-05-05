import React, { useState } from 'react';
import './Skills.css';

// ── DATA ──────────────────────────────────────────────────────────────────────
// icon: devicon class OR a fallback emoji for logos without devicon support
const SKILLS = [
  // Languages
  { name: 'Python',      icon: 'devicon-python-plain',         color: '#3776AB' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain',      color: '#F7DF1E' },
  { name: 'C',           icon: 'devicon-c-plain',              color: '#A8B9CC' },

  // Frontend
  { name: 'HTML5',       icon: 'devicon-html5-plain',          color: '#E34F26' },
  { name: 'CSS3',        icon: 'devicon-css3-plain',           color: '#1572B6' },
  { name: 'React',       icon: 'devicon-react-original',       color: '#61DAFB' },

  // Backend
  { name: 'Node.js',     icon: 'devicon-nodejs-plain',         color: '#339933' },
  { name: 'Express',     icon: 'devicon-express-original',     color: '#ffffff'  },
  { name: 'Flask',       icon: 'devicon-flask-original',       color: '#ffffff'  },

  // Databases
  { name: 'MySQL',       icon: 'devicon-mysql-plain',          color: '#4479A1' },
  { name: 'MongoDB',     icon: 'devicon-mongodb-plain',        color: '#47A248' },

  // DevOps / Tools
  { name: 'Git',         icon: 'devicon-git-plain',            color: '#F05032' },
  { name: 'GitHub',      icon: 'devicon-github-original',      color: '#ffffff'  },
  { name: 'VS Code',     icon: 'devicon-vscode-plain',         color: '#007ACC' },

  // AI / GenAI — no devicon; use a simple SVG badge via img tag
  { name: 'Prompt Eng', icon: null, emoji: '🤖',               color: '#ff4444' },
  { name: 'LLMs',        icon: null, emoji: '🧠',              color: '#ff4444' },
];

// Stats
const TOTAL_SKILLS = SKILLS.length;

// ── PARTICLE COMPONENT ────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: `${Math.random() * 100}%`,
  bottom: `${Math.random() * 30}%`,
  duration: `${Math.random() * 12 + 8}s`,
  delay: `${Math.random() * 8}s`,
}));

function Particles() {
  return (
    <div className="skills-particles" aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: p.bottom,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// ── SKILL LOGO CARD ───────────────────────────────────────────────────────────
function SkillLogoCard({ name, icon, emoji, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="skill-logo-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={name}
      style={{ '--skill-color': color }}
    >
      {/* Glow ring */}
      <div className="skill-logo-card__glow" aria-hidden="true" />

      {/* Icon */}
      <div className="skill-logo-card__icon-wrap">
        {icon ? (
          <i className={`${icon} colored`} aria-hidden="true" />
        ) : (
          <span className="skill-logo-card__emoji" aria-hidden="true">{emoji}</span>
        )}
      </div>

      {/* Name */}
      <span className="skill-logo-card__name">{name}</span>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Devicons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      {/* ambient background */}
      <div className="skills-hex-bg" aria-hidden="true" />
      <Particles />

      {/* heading */}
      <p className="skills-subtitle">My Arsenal</p>
      <h2 className="section-title">Tech Stack</h2>

      {/* logo grid */}
      <div className="skills-logo-grid">
        {SKILLS.map((skill) => (
          <SkillLogoCard key={skill.name} {...skill} />
        ))}
      </div>

      {/* stats bar */}
      <div className="skills-stats" aria-label="Skills summary">
        <div className="skills-stat">
          <div className="skills-stat__number">16+</div>
          <div className="skills-stat__label">Technologies</div>
        </div>
        <div className="skills-stat__divider" aria-hidden="true" />
        <div className="skills-stat__divider" aria-hidden="true" />
        <div className="skills-stat">
          <div className="skills-stat__number">5+</div>
          <div className="skills-stat__label">Projects Built</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
