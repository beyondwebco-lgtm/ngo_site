'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
  ORGANIZATION_INFO,
} from '../data/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/awareness-programs', label: 'Awareness Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Utility Information Bar */}
      <div className="top-notice-bar">
        <div className="ash-container top-notice-content">
          <div className="top-contact-info">
            {SHOW_PUBLIC_UNVERIFIED_CONTACTS ? (
              <>
                <a href={`mailto:${PENDING_VERIFICATION_CONTACTS.generalEmail}`} aria-label="Email Anand Group Charitable Trust">
                  <i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  <span>{PENDING_VERIFICATION_CONTACTS.generalEmail}</span>
                </a>
                <a href={PENDING_VERIFICATION_CONTACTS.phoneHref} aria-label="Call Anand Group Charitable Trust helpline">
                  <i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  <span>{PENDING_VERIFICATION_CONTACTS.phone}</span>
                </a>
              </>
            ) : (
              <>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                  <i className="fa fa-map-marker-alt" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  <span>{ORGANIZATION_INFO.operatingRegions}</span>
                </span>
                <Link href="/contact" aria-label="Official Online Inquiry Form">
                  <i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  <span>Official Inquiry Desk</span>
                </Link>
              </>
            )}
          </div>
          <div className="top-trust-badge">
            <i className="fa fa-certificate" style={{ color: 'var(--color-yellow-deep)' }}></i>
            <span>{ORGANIZATION_INFO.statusLabel}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`ash-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="ash-container navbar-inner">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand-link" aria-label="Anand Group Charitable Trust Home">
            <img
              src="/logo-anand-trust.svg"
              alt="Anand Group Charitable Trust"
              width="210"
              height="44"
              className="navbar-brand-logo"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="nav-desktop-container">
            <ul className="nav-links-desktop">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-item-link ${isActive(link.href) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navbar Right Actions (CTA & Mobile Hamburger) */}
          <div className="navbar-actions">
            <Link
              href="/donate"
              className="ash-btn ash-btn-primary nav-donate-btn"
              aria-label="Pledge Support or Donate"
            >
              <i className="fa fa-heart"></i>
              <span>Donate<span className="hide-on-mobile"> / Pledge</span></span>
            </Link>

            <button
              type="button"
              className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Backdrop Overlay */}
        <div
          className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation Drawer">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--color-border)' }}>
              <img
                src="/logo-anand-trust.svg"
                alt="Anand Group Charitable Trust"
                style={{ height: '36px', width: 'auto' }}
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'var(--color-bg-cream)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--color-text)',
                  cursor: 'pointer',
                }}
                aria-label="Close mobile menu"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
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
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
            <Link
              href="/donate"
              className="ash-btn ash-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa fa-heart"></i>
              <span>Donate / Pledge Now</span>
            </Link>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              <p style={{ margin: 0 }}>Registered Indian Charitable Trust</p>
              <p style={{ margin: '0.25rem 0 0 0', color: 'var(--color-yellow-dark)', fontWeight: 600 }}>Valid Section 80G Approval</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
