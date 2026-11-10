import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ash-footer">
      <div className="ash-container">
        <div className="footer-grid">
          {/* Column 1: Organization & Identity */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-logo" aria-label="Anand Group Charitable Trust Home">
              <img
                src="/logo-anand-trust.svg"
                alt="Anand Group Charitable Trust"
                width="220"
                height="50"
                style={{ width: 'auto', height: '46px', objectFit: 'contain', marginBottom: '1.25rem' }}
              />
            </Link>
            <p className="footer-desc">
              Anand Group Charitable Trust is a registered Indian non-governmental charitable trust dedicated to compassionate grassroots service, sustainable environmental cleanliness, educational opportunities, and dignity for all.
            </p>
            <div className="footer-tax-badge">
              <i className="fa fa-certificate" style={{ color: 'var(--color-yellow-deep)' }}></i>
              <span>80G Tax Exemption Eligible &bull; Registered Trust</span>
            </div>
            <div className="footer-social-links" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
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

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/initiatives" className="footer-link">Our Initiatives</Link></li>
              <li><Link href="/impact" className="footer-link">Impact &amp; Milestones</Link></li>
              <li><Link href="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li><Link href="/get-involved" className="footer-link">Get Involved</Link></li>
              <li><Link href="/volunteer" className="footer-link">Volunteer With Us</Link></li>
              <li><Link href="/donate" className="footer-link">Donate / Pledge</Link></li>
              <li><Link href="/csr-partnerships" className="footer-link">CSR Partnerships</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Initiatives */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Initiatives</h4>
            <ul className="footer-link-list">
              <li>
                <Link href="/initiatives/social-environmental" className="footer-link">
                  Social &amp; Environmental Awareness
                </Link>
              </li>
              <li>
                <Link href="/initiatives/education" className="footer-link">
                  Education &amp; Child Development
                </Link>
              </li>
              <li>
                <Link href="/initiatives/temple-development" className="footer-link">
                  Temple Development &amp; Annadanam
                </Link>
              </li>
              <li>
                <Link href="/initiatives/healthcare" className="footer-link">
                  Healthcare &amp; Medical Camps
                </Link>
              </li>
              <li>
                <Link href="/initiatives/elderly-care" className="footer-link">
                  Elderly Care &amp; Social Welfare
                </Link>
              </li>
              <li>
                <Link href="/initiatives/naadha-ashram" className="footer-link">
                  Naadha Ashram Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-item">
              <i className="fa fa-map-marker-alt footer-icon"></i>
              <div>
                <strong>Trust Operations Office</strong>
                <p>Andhra Pradesh &amp; Telangana, India</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa fa-envelope footer-icon"></i>
              <div>
                <strong>Email Enquiries</strong>
                <p>contact@anandgroupcharitabletrust.org.in</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa fa-phone footer-icon"></i>
              <div>
                <strong>Support &amp; Helpline</strong>
                <p>+91 98481 23456</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fa fa-clock footer-icon"></i>
              <div>
                <strong>Working Hours</strong>
                <p>Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Anand Group Charitable Trust. All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="legal-divider">&bull;</span>
            <Link href="/terms-and-conditions" className="footer-legal-link">Terms &amp; Conditions</Link>
            <span className="legal-divider">&bull;</span>
            <Link href="/csr-partnerships" className="footer-legal-link">CSR Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
