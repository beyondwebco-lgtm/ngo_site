'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle sticky header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/impact', label: 'Impact' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/csr-partnerships', label: 'CSR' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`ash-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="ash-container header-inner">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo" aria-label="Anand Group Charitable Trust Home">
          <img
            src="/logo-anand-trust.svg"
            alt="Anand Group Charitable Trust Logo"
            width="220"
            height="50"
            style={{ width: 'auto', height: '44px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <Link
            href="/donate"
            className="ash-btn ash-btn-primary nav-donate-btn"
            aria-label="Support Our Cause - Donate / Pledge"
          >
            <i className="fa fa-heart"></i>
            <span>Donate / Pledge</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-nav-item">
                <Link
                  href={link.href}
                  className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-cta" style={{ marginTop: '1.5rem', padding: '0 1rem' }}>
            <Link
              href="/donate"
              className="ash-btn ash-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa fa-heart"></i>
              <span>Donate / Pledge Now</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
