import React from 'react';
import './Projects.css';
import AI from '../assets/AI document chat bot.png';
import pg from '../assets/Pg.png';
import portfolio from '../assets/portfolio.png';
// ── DATA ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'AI Document Chat Bot',
    desc: ' Developed an AI application to enable users to upload PDF documents and interact',
    image: AI,
    tags: [ 'Python', 'Flask', 'React.js', 'Vite', 'Gemini API','HTML', 'CSS'],
    github: 'https://github.com/Athithiyan-T/AI-Document-chat-bot',
    live: 'https://www.linkedin.com/posts/athithiyan17_ai-fullstackdevelopment-reactjs-activity-7451469074431139840-aEOD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElEpUEBFSNL1KGQ0lq57JA6P5LJNfHIFss',
  },
  {
    id: 2,
    title: 'PG Tenant & Facility Management System',
    desc: 'Built a scalable full-stack PG Tenant & Facility Management System using MERN stack',
    image: pg,
    tags: [ 'React.js (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    github: 'https://github.com/Athithiyan-T/PG-Tenant-Facility-Administration-System',
    live: 'https://www.linkedin.com/posts/athithiyan17_mern-fullstackdeveloper-webdevelopment-activity-7447611122259505152-TFNC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElEpUEBFSNL1KGQ0lq57JA6P5LJNfHIFss',
  },
    {
    id: 3,
    title: 'Portfolio',
    desc: '"What I can do, What I can impact, What I can build"',
    image: portfolio,
    tags: ['HTML', 'CSS', 'JavaScript','React'],
    github: 'https://github.com/Athithiyan-T/My-Portfolio-version-2.0',
    live: null,
  },
  {
    id: 4,
    title: 'My Hobby Showcase',
    desc: 'A responsive frontend static page that replicates my hobby.',
    image: 'https://athithiyan-t-portfolio.vercel.app/assets/images/project1.jpg.png',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/Athithiyan-T/My-Hobby',
    live: 'https://athithiyan-hobby-gallery.netlify.app/',
  },
  {
    id: 5,
    title: 'Password Generator',
    desc: 'Create a strong and secure password with customizable options.',
    image: 'https://athithiyan-t-portfolio.vercel.app/assets/images/project2.jpg.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Athithiyan-T/password-generator',
    live: 'https://athithiyan-t.github.io/password-generator/',
  },
];

// ── CARD ──────────────────────────────────────────────────────────────────────
function ProjectCard({ title, desc, image, tags, github, live }) {
  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        <img src={image} alt={title} className="project-card__img" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{desc}</p>

        <div className="project-card__tags">
          {tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary">
               Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── SECTION ───────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Work</h2>

      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
