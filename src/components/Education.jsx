import React from 'react';
import './Education.css';

const EDUCATION = [
  {
    period: '2023 – 2026',
    degree: 'B.E in Electronics & Communication Engineering',
    school : 'Government College of Engineering, Thanjavur (Anna University)',
    detail: 'Specialized in Electronics and Full Stack Technologies. CGPA: 7.7 / 10',
  },
  {
    period: '2021 – 2023',
    degree: 'Diploma in Electronics & Communication Engineering',
    school : 'Government Polytechnic College, Krishnagiri',
    detail: 'Focusing on practical knowledge. Department Topper — 1st Rank Holder — 91.6%',
  },
  {
    period: '2019 – 2021',
    degree: 'Tamil Nadu Higher Secondary Education',
    school: 'Government Boys Higher Secondary School',
    detail: 'Major in Physics, Chemistry, Botany and Zoology.',
  },
];

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="edu__timeline">
        {EDUCATION.map((e, i) => (
          <div key={i} className="edu__item">
            <span className="edu__period tag">{e.period}</span>
            <h3 className="edu__degree">{e.degree}</h3>
            <p className="edu__school">{e.school}</p>
            <p className="edu__detail">{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
