import React from 'react';
import './Experience.css';

// ── DATA — add more objects here to extend the timeline ─────────────────────
const EXPERIENCES = [
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Acaders',
    period: 'Feb 2026 – July 2026',
    type: 'Internship',
    description:
      'Developing and maintaining full-stack web applications using Python (Flask/Django) on the backend and React.js on the frontend. Collaborating with senior developers to design RESTful APIs, manage databases, and implement responsive UI components.',
    highlights: [
      'Built and integrated REST APIs with Flask',
      'Developed dynamic React.js front-end components',
      'Managed MySQL & MongoDB databases',
      'Practiced Git-based collaborative workflows',
    ],
    tech: ['Python', 'Flask', 'React.js', 'MySQL', 'MongoDB', 'REST APIs', 'Git'],
    current: true,
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
function ExperienceCard({ role, company, period, type, description, highlights, tech, current }) {
  return (
    <div className={`exp__card ${current ? 'exp__card--active' : ''}`}>

      {/* Timeline dot */}
      <div className="exp__dot" aria-hidden="true">
        <span className="exp__dot-inner" />
        {current && <span className="exp__dot-ping" />}
      </div>

      {/* Card body */}
      <div className="exp__body">

        {/* Header row */}
        <div className="exp__header">
          <div className="exp__meta">
            <span className="exp__period tag">{period}</span>
            {current && <span className="exp__badge">● Current</span>}
          </div>
          <span className="exp__type">{type}</span>
        </div>

        {/* Role & company */}
        <h3 className="exp__role">{role}</h3>
        <p className="exp__company">
          <span className="exp__company-icon">🏢</span>
          {company}
        </p>

        {/* Description */}
        <p className="exp__desc">{description}</p>

        {/* Highlights */}
        <ul className="exp__highlights">
          {highlights.map((h, i) => (
            <li key={i} className="exp__highlight-item">
              <span className="exp__bullet" aria-hidden="true">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack tags */}
        <div className="exp__tech">
          {tech.map((t) => (
            <span key={t} className="tag exp__tag">{t}</span>
          ))}
        </div>

      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="exp__timeline">
        {/* Vertical line */}
        <div className="exp__line" aria-hidden="true" />

        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
