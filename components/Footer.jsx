import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ash-footer">
      <div className="ash-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-logo" aria-label="Anand Group Charitable Trust Home">
              <img
                src="/logo-anand-trust.svg"
                alt="Anand Group Charitable Trust"
                width="220"
                height="48"
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className="footer-mission-text">
              Anand Group Charitable Trust is a registered Indian public charitable trust dedicated to compassionate grassroots service, sustainable environmental cleanliness, educational opportunities, and dignity for all.
            </p>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/initiatives">All Initiatives</Link></li>
              <li><Link href="/impact">Impact &amp; Milestones</Link></li>
              <li><Link href="/gallery">Photo Gallery</Link></li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li><Link href="/volunteer">Volunteer With Us</Link></li>
              <li><Link href="/donate">Donate / Pledge</Link></li>
              <li><Link href="/csr-partnerships">CSR Partnerships</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Initiatives Column */}
          <div>
            <h4 className="footer-col-title">Our Initiatives</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/initiatives/social-environmental">
                  Social &amp; Environmental
                </Link>
              </li>
              <li>
                <Link href="/initiatives/education">
                  Education &amp; Children
                </Link>
              </li>
              <li>
                <Link href="/initiatives/temple-development">
                  Temple Heritage &amp; Annadanam
                </Link>
              </li>
              <li>
                <Link href="/initiatives/healthcare">
                  Healthcare &amp; Medical Camps
                </Link>
              </li>
              <li>
                <Link href="/initiatives/elderly-care">
                  Elderly Care &amp; Dignity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="footer-col-title">Headquarters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--color-text)' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <i className="fa fa-map-marker-alt" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                <span>Andhra Pradesh &amp; Telangana, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                <span style={{ wordBreak: 'break-all' }}>contact@anandgroupcharitabletrust.org.in</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                <span>+91 98481 23456</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <i className="fa fa-certificate" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                <span style={{ color: 'var(--color-yellow-dark)', fontWeight: 600 }}>80G Tax Exemption Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} Anand Group Charitable Trust. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', minHeight: '36px', display: 'inline-flex', alignItems: 'center' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', minHeight: '36px', display: 'inline-flex', alignItems: 'center' }}>
              Terms &amp; Conditions
            </Link>
            <Link href="/csr-partnerships" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', minHeight: '36px', display: 'inline-flex', alignItems: 'center' }}>
              CSR Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
