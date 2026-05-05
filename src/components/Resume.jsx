import React from 'react';
import './Resume.css';
import resumePDF from '../assets/Athithiyan T_full stack developer_resume.pdf';

function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>

      <div className="resume__card">
        <div className="resume__text">
          <h3 className="resume__heading">Ready to hire?</h3>
          <p className="resume__sub">
            Grab a copy of my detailed resume to learn more about my experience,
            skills, and projects.
          </p>
        </div>

        {/*
          target="_blank"  → opens in new tab
          rel="noreferrer" → security best practice when using target="_blank"
        */}
        <a
          href={resumePDF}
          download="Athithiyan_T_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary resume__btn"
        >
          ⬇ Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
