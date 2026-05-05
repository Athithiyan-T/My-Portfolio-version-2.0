import React from 'react';
import './Footer.css';
import athiLogo from '../assets/athi_logo.png';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* ── Logo + brand ── */}
        <div className="footer__brand">
          <img
            src={athiLogo}
            alt="ATHI logo"
            className="footer__logo-img"
          />
          <span className="footer__logo">ATHI</span>
        </div>

        {/* ── Copyright ── */}
        <p className="footer__copy">
          © copyright {year} — Designed & Developed by{' '}
          <span className="footer__name">ATHITHIYAN T</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
