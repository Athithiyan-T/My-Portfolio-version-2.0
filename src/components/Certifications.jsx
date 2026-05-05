import React, { useState, useCallback } from 'react';
import './Certifications.css';

// ── DATA ──────────────────────────────────────────────────────────────────────
// imageUrl: actual certificate image URL or null to show a styled placeholder
// link: direct URL to the certificate (LinkedIn, Credly, etc.)
const CERTS = [
  {
    id: 1,
    title: 'JavaScript Zero to Hero',
    issuer: 'HCL GUVI',
    issued: 'Dec 2025',
    imageUrl: null,
    link: '#',
    issuerLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/javascript/javascript-original.svg',
    accent: '#F7DF1E',
  },
  {
    id: 2,
    title: 'Young Professional Soft Skills',
    issuer: 'TCS iON',
    issued: 'Jan 2025',
    imageUrl: null,
    link: '#',
    issuerLogo: null,
    accent: '#ff4444',
  },
  {
    id: 3,
    title: 'Prompt Engineering',
    issuer: 'LinkedIn Learning',
    issued: 'Aug 2025',
    imageUrl: null,
    link: '#',
    issuerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    accent: '#0A66C2',
  },
  {
    id: 4,
    title: 'Network Technician',
    issuer: 'Cisco',
    issued: 'Nov 2024',
    imageUrl: null,
    link: '#',
    issuerLogo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cisco.svg',
    accent: '#1BA0D7',
  },
];

// ── LIGHTBOX COMPONENT ────────────────────────────────────────────────────────
function Lightbox({ cert, onClose }) {
  if (!cert) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="cert-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
      onClick={handleBackdropClick}
    >
      <div className="cert-lightbox__panel">
        <button
          className="cert-lightbox__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Certificate preview */}
        <div
          className="cert-lightbox__preview"
          style={{ '--cert-accent': cert.accent }}
        >
          {cert.imageUrl ? (
            <img src={cert.imageUrl} alt={cert.title} loading="lazy" />
          ) : (
            <div className="cert-lightbox__placeholder">
              {cert.issuerLogo && (
                <img
                  src={cert.issuerLogo}
                  alt={cert.issuer}
                  className="cert-lightbox__issuer-logo"
                />
              )}
              <div className="cert-lightbox__placeholder-seal">🏅</div>
              <p className="cert-lightbox__placeholder-title">{cert.title}</p>
              <p className="cert-lightbox__placeholder-issuer">{cert.issuer}</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="cert-lightbox__info">
          <h3 className="cert-lightbox__title">{cert.title}</h3>
          <p className="cert-lightbox__issuer">{cert.issuer}</p>
          <p className="cert-lightbox__date">Issued: {cert.issued}</p>
          {cert.link && cert.link !== '#' && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cert-lightbox__cta"
            >
              View Full Certificate ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── CERTIFICATE CARD ──────────────────────────────────────────────────────────
function CertCard({ cert, onOpen }) {
  return (
    <article
      className="cert-card"
      style={{ '--cert-accent': cert.accent }}
      aria-label={cert.title}
    >
      {/* Image / Placeholder area */}
      <div
        className="cert-card__image-wrap"
        onClick={() => onOpen(cert)}
        role="button"
        tabIndex={0}
        aria-label={`Preview ${cert.title}`}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(cert)}
      >
        {cert.imageUrl ? (
          <img
            src={cert.imageUrl}
            alt={cert.title}
            className="cert-card__image"
            loading="lazy"
          />
        ) : (
          <div className="cert-card__placeholder">
            {cert.issuerLogo ? (
              <img
                src={cert.issuerLogo}
                alt={cert.issuer}
                className="cert-card__issuer-logo"
                loading="lazy"
              />
            ) : (
              <span className="cert-card__placeholder-emoji">🏅</span>
            )}
            <span className="cert-card__view-hint">Click to preview</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="cert-card__overlay" aria-hidden="true">
          <span className="cert-card__overlay-icon">🔍</span>
        </div>
      </div>

      {/* Card body */}
      <div className="cert-card__body">
        <h3 className="cert-card__title">{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>
        <div className="cert-card__footer">
          <span className="cert-card__date tag">📅 {cert.issued}</span>
          {cert.link && cert.link !== '#' && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card__link"
              aria-label={`View ${cert.title} certificate`}
            >
              View ↗
            </a>
          )}
        </div>
      </div>

      {/* Accent line */}
      <div className="cert-card__accent-line" aria-hidden="true" />
    </article>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const openLightbox = useCallback((cert) => setActiveCert(cert), []);
  const closeLightbox = useCallback(() => setActiveCert(null), []);

  return (
    <section id="certifications" className="certs-section section">
      <p className="certs-subtitle">Validated Knowledge</p>
      <h2 className="section-title">Certifications</h2>

      <div className="certs__grid">
        {CERTS.map((cert) => (
          <CertCard key={cert.id} cert={cert} onOpen={openLightbox} />
        ))}
      </div>

      {/* Lightbox */}
      {activeCert && <Lightbox cert={activeCert} onClose={closeLightbox} />}
    </section>
  );
}

export default Certifications;
