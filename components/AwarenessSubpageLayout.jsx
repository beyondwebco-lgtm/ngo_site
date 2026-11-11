import React from 'react';
import Link from 'next/link';
import PageBanner from './PageBanner';
import PhotoShowcase from './PhotoShowcase';
import ActivityBookShowcase from './ActivityBookShowcase';
import { EDUCATIONAL_SUBPROGRAMS_LIST } from '../data/awarenessPrograms';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
  TAX_80G_DISCLOSURE,
} from '../data/siteConfig';

export default function AwarenessSubpageLayout({ program }) {
  const {
    slug,
    parentSlug,
    parentTitle,
    title,
    tag,
    heading,
    icon,
    heroImage,
    lead,
    overview,
    statusBreakdown,
    pillars,
    photos,
    showActivityBook,
  } = program;

  return (
    <>
      <PageBanner
        badge={tag}
        badgeIcon={icon}
        title={heading}
        highlightWord={title.split(' ')[0]}
        lead={lead}
        breadcrumbs={[
          { label: 'Initiatives', href: '/initiatives' },
          { label: parentTitle, href: `/initiatives/${parentSlug}` },
          { label: title, href: `/initiatives/${slug}` },
        ]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div className="initiative-detail-grid">
            {/* Main Content Column */}
            <div className="initiative-main-card">
              <div className="initiative-hero-img-wrap">
                <img src={heroImage} alt={`${title} — Anand Group Charitable Trust`} />
              </div>

              <div className="initiative-main-body">
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--color-yellow-tint)',
                    color: 'var(--color-yellow-dark)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    marginBottom: '1rem',
                  }}
                >
                  <i className={`fa ${icon}`} style={{ marginRight: '0.4rem', color: 'var(--color-yellow-deep)' }}></i>
                  {tag}
                </span>

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text)', marginBottom: '1.15rem', lineHeight: '1.25' }}>
                  {title}
                </h2>

                <p style={{ fontSize: '1.06rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1.25rem', fontWeight: 500 }}>
                  {lead}
                </p>

                <p style={{ fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                  {overview}
                </p>

                {/* Completed vs Upcoming Planned Breakdown (where applicable) */}
                {statusBreakdown && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                      gap: '1.25rem',
                      marginBottom: '2.25rem',
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        borderLeft: '4px solid var(--color-yellow-deep)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-yellow-dark)', fontWeight: 700, fontSize: '0.95rem' }}>
                        <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)' }}></i>
                        <span>{statusBreakdown.completedTitle}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        {statusBreakdown.completedDesc}
                      </p>
                    </div>

                    <div
                      style={{
                        background: 'var(--color-bg-cream)',
                        border: '1px solid var(--color-border-amber)',
                        borderLeft: '4px solid var(--color-yellow-primary)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-yellow-dark)', fontWeight: 700, fontSize: '0.95rem' }}>
                        <i className="fa fa-calendar-check" style={{ color: 'var(--color-yellow-deep)' }}></i>
                        <span>{statusBreakdown.plannedTitle}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        {statusBreakdown.plannedDesc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Themes Grid */}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-yellow-light)', paddingBottom: '0.5rem' }}>
                  Key Programme Focus Areas
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', marginBottom: '2.25rem' }}>
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'var(--color-bg-cream)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem',
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fa fa-circle-check" style={{ color: 'var(--color-yellow-deep)', fontSize: '0.95rem' }}></i>
                        <span>{pillar.name}</span>
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {pillar.items.map((item, itIdx) => (
                          <li key={itIdx} style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.55', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                            <span style={{ color: 'var(--color-yellow-deep)', fontWeight: 'bold' }}>&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Published Activity Book Section (if enabled) */}
                {showActivityBook && (
                  <div style={{ margin: '2.5rem 0' }}>
                    <ActivityBookShowcase />
                  </div>
                )}

                {/* Field Action Photographs */}
                {photos && photos.length > 0 && (
                  <PhotoShowcase
                    title={`${title} — Field Photography`}
                    description="Authentic photographs from Anand Group Charitable Trust’s school and awareness programmes:"
                    photos={photos}
                    icon={icon}
                  />
                )}

                {/* Navigation & Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <Link href="/donate" className="ash-btn ash-btn-primary">
                    <i className="fa fa-heart"></i>
                    <span>Support Educational Awareness</span>
                  </Link>
                  <Link href="/initiatives/education" className="ash-btn ash-btn-outline">
                    <i className="fa fa-graduation-cap"></i>
                    <span>Back to Education Pillar</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="initiative-sidebar">
              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-graduation-cap" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Educational Programmes
                </h3>
                <nav className="sidebar-nav-list" aria-label="Educational Programmes">
                  <Link href="/initiatives/education" className="sidebar-nav-link">
                    <span>Education Overview</span>
                    <i className="fa fa-angle-right" style={{ fontSize: '0.85rem' }}></i>
                  </Link>
                  {EDUCATIONAL_SUBPROGRAMS_LIST.map((item) => {
                    const isCurrent = item.slug === slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/initiatives/${item.slug}`}
                        className={`sidebar-nav-link ${isCurrent ? 'active' : ''}`}
                      >
                        <span>{item.title}</span>
                        <i className={`fa ${isCurrent ? 'fa-check' : 'fa-angle-right'}`} style={{ fontSize: '0.85rem' }}></i>
                      </Link>
                    );
                  })}
                  <Link href="/awareness-programs" className="sidebar-nav-link">
                    <span>All Awareness Programmes</span>
                    <i className="fa fa-angle-right" style={{ fontSize: '0.85rem' }}></i>
                  </Link>
                </nav>
              </div>

              <div className="sidebar-box highlight">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-certificate" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Section 80G Governance
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {TAX_80G_DISCLOSURE}
                </p>
                <Link
                  href="/donate"
                  className="ash-btn ash-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <i className="fa fa-heart"></i>
                  <span>Make a Pledge</span>
                </Link>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-headset" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Invite a School Session
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.55', marginBottom: '1rem' }}>
                  Schools, colleges, and parent associations in Andhra Pradesh and Telangana can reach out via our contact form to request awareness sessions.
                </p>
                {SHOW_PUBLIC_UNVERIFIED_CONTACTS && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', marginBottom: '1rem' }}>
                    <div><i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)', marginRight: '0.45rem' }}></i>{PENDING_VERIFICATION_CONTACTS.phone}</div>
                    <div><i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)', marginRight: '0.45rem' }}></i>{PENDING_VERIFICATION_CONTACTS.generalEmail}</div>
                  </div>
                )}
                <Link
                  href="/contact"
                  className="ash-btn ash-btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Connect via Contact Form</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

