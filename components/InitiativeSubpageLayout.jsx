import React from 'react';
import Link from 'next/link';
import PageBanner from './PageBanner';
import PhotoShowcase from './PhotoShowcase';
import { INITIATIVES_LIST } from '../data/initiatives';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
  TAX_80G_DISCLOSURE,
} from '../data/siteConfig';

export default function InitiativeSubpageLayout({ initiative }) {
  const {
    slug,
    title,
    tag,
    heading,
    icon,
    image,
    lead,
    desc,
    programs,
    expectedBenefit,
    photoShowcaseTitle,
    photoShowcaseDesc,
    photos,
  } = initiative;

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
          { label: title, href: `/initiatives/${slug}` },
        ]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div className="initiative-detail-grid">
            {/* Main Content Column */}
            <div className="initiative-main-card">
              <div className="initiative-hero-img-wrap">
                <img src={image} alt={title} />
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

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: '1.25' }}>
                  {title}
                </h2>

                <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {lead}
                </p>

                <p style={{ fontSize: '0.98rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                  {desc}
                </p>

                {/* Programs Breakdown */}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1.25rem', borderBottom: '2px solid var(--color-yellow-light)', paddingBottom: '0.5rem' }}>
                  Key Programs &amp; Operational Activities
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                  {programs.map((prog, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        background: 'var(--color-bg-cream)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.25rem',
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fa fa-circle-check" style={{ color: 'var(--color-yellow-deep)', fontSize: '0.95rem' }}></i>
                        {prog.name}
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {prog.items.map((it, itIdx) => (
                          <li key={itIdx} style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                            <span style={{ color: 'var(--color-yellow-deep)', fontWeight: 'bold' }}>&bull;</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Expected Community Benefit Box */}
                <div className="init-benefit-box" style={{ marginBottom: '2.5rem' }}>
                  <strong style={{ color: 'var(--color-yellow-deep)', display: 'block', marginBottom: '0.35rem' }}>
                    <i className="fa fa-chart-line"></i> Expected Community Benefit:
                  </strong>
                  <span style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{expectedBenefit}</span>
                </div>

                {/* Field Action Photography Showcase with Inline Viewing (NO POPUPS) */}
                {photos && photos.length > 0 && (
                  <PhotoShowcase
                    title={photoShowcaseTitle || `${title} Field Photography`}
                    description={photoShowcaseDesc || 'Authentic photography from our field actions:'}
                    photos={photos}
                    icon={icon}
                  />
                )}

                {/* Subpage Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                  <Link
                    href={`/donate?target=${encodeURIComponent(title)}`}
                    className="ash-btn ash-btn-primary"
                  >
                    <i className="fa fa-heart"></i>
                    <span>Support {title}</span>
                  </Link>
                  <Link href="/volunteer" className="ash-btn ash-btn-outline">
                    <i className="fa fa-hands-helping"></i>
                    <span>Volunteer in This Area</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="initiative-sidebar">
              {/* Other Initiatives Navigation Box */}
              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-compass" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  All Initiatives
                </h3>
                <nav className="sidebar-nav-list">
                  {INITIATIVES_LIST.map((item) => {
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
                </nav>
              </div>

              {/* Tax Exemption & Governance Box */}
              <div className="sidebar-box highlight">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-certificate" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Section 80G Governance
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {TAX_80G_DISCLOSURE}
                </p>
                <div style={{ padding: '0.75rem', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-amber)', fontSize: '0.82rem', color: 'var(--color-yellow-dark)' }}>
                  <i className="fa fa-shield-alt" style={{ marginRight: '0.35rem' }}></i>
                  <strong>Direct Pledge Model:</strong> Verified directly by trust coordinators.
                </div>
                <Link
                  href="/donate"
                  className="ash-btn ash-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }}
                >
                  <i className="fa fa-heart"></i>
                  <span>Make a Pledge</span>
                </Link>
              </div>

              {/* Contact Box */}
              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-headset" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Have Questions?
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Connect with our program coordinators to sponsor a drive or collaborate on outreach programmes.
                </p>
                {SHOW_PUBLIC_UNVERIFIED_CONTACTS && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}>
                      <i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)' }}></i>
                      <span>{PENDING_VERIFICATION_CONTACTS.phone}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}>
                      <i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)' }}></i>
                      <span>{PENDING_VERIFICATION_CONTACTS.generalEmail}</span>
                    </div>
                  </div>
                )}
                <Link
                  href="/contact"
                  className="ash-btn ash-btn-outline"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  <span>Contact Coordinators</span>
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

