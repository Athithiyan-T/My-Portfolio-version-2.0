import React, { useState } from 'react';
import './Contact.css';

// ── SVG ICON COMPONENTS ─────────────────────────────────────────────────────
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// ── Social links data ────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/athithiyan17/',
    Icon: IconLinkedIn,
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Athithiyan-T',
    Icon: IconGitHub,
    color: '#ffffff',
  },
  {
    label: 'Email',
    href: 'mailto:athithiyan2004@gmail.com',
    Icon: IconEmail,
    color: '#EA4335',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/athicruzz17',
    Icon: IconInstagram,
    color: '#E1306C',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/athi.cruzz.7',
    Icon: IconFacebook,
    color: '#1877F2',
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [sent, setSent]         = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim())    errs.name    = 'Name is required.';
    if (!formData.email.trim())   errs.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
                                  errs.email   = 'Enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Find Me On</h2>

      <div className="contact__layout">

        {/* ── FORM ── */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <span>✅</span>
              <p>Thanks! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" type="text" name="name"
                  placeholder="Your name" value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'input--error' : ''}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" type="email" name="email"
                  placeholder="your@email.com" value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input--error' : ''}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="Your message..." value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input--error' : ''}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* ── SOCIALS ── */}
        <div className="contact__socials">
          <p className="contact__socials-label">Or reach me directly</p>
          <div className="contact__social-links">
            {SOCIALS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label={label}
                style={{ '--brand-color': color }}
              >
                <span className="social-btn__icon">
                  <Icon />
                </span>
                <span className="social-btn__label">{label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
