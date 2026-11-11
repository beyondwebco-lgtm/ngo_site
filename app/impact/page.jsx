import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';
import { IMPACT_METRICS, MILESTONES, DOCUMENTED_HIGHLIGHTS, SHOW_PUBLIC_STORIES, STORIES } from '../../data/impact';

export const metadata = {
  title: 'Our Impact & Milestones | Anand Group Charitable Trust',
  description: 'Verified milestones, impact numbers, community testimonials, and governance standards of Anand Group Charitable Trust.',
};

export default function ImpactPage() {
  return (
    <>
      <PageBanner
        badge="Grassroots Transformation"
        badgeIcon="fa-award"
        title="Measurable Impact. Meaningful Lives Changed."
        highlightWord="Impact"
        lead="We measure our success not through promises, but through ground-level action. Explore our verified field metrics, historic milestones, and the real community stories behind our seva."
        breadcrumbs={[{ label: 'Impact & Milestones', href: '/impact' }]}
      />

      {/* Impact Stats Grid */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-chart-pie"></i> By the Numbers
            </div>
            <h2 className="section-title">A Decade of Ground-Level Dedication</h2>
            <p className="section-subtitle">
              Every statistic reflects real human lives touched across villages, schools, and communities.
            </p>
          </div>

          <div className="impact-stats-grid" style={{ marginTop: '3rem' }}>
            {IMPACT_METRICS.map((metric, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-icon">
                  <i className={`fa ${metric.icon}`}></i>
                </div>
                <div className="stat-number">{metric.number}</div>
                <div className="stat-title">{metric.label}</div>
                <div className="stat-meta">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="ash-section-ivory" style={{ padding: '5rem 0' }}>
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-timeline"></i> Our Journey
            </div>
            <h2 className="section-title">Key Milestones &amp; Evolution</h2>
            <p className="section-subtitle">
              How a local civic cleanliness initiative grew into a multidimensional grassroots charitable trust.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '3.5rem auto 0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-yellow-deep)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    style={{
                      background: 'var(--color-yellow-primary)',
                      color: 'var(--color-text)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '0.3rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {m.year}
                  </span>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-yellow-dark)',
                      background: 'var(--color-bg-cream)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      border: '1px solid var(--color-border-amber)',
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                  {m.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.98rem', margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Programme Action & Media Documentation */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-camera-retro"></i> Field Documentation
            </div>
            <h2 className="section-title">Documented Programme Action &amp; Media Coverage</h2>
            <p className="section-subtitle">
              Real field photographs and published press documentation reflecting Anand Group Charitable Trust’s active community programmes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {DOCUMENTED_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--color-yellow-dark)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '999px',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.94rem', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials (Hidden pending formal review & written permission) */}
          {SHOW_PUBLIC_STORIES && STORIES.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
              {STORIES.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2.25rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                      {s.title}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: '1.65', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                    <strong style={{ color: 'var(--color-text)', display: 'block', fontSize: '0.95rem' }}>
                      {s.beneficiary}
                    </strong>
                    <span style={{ color: 'var(--color-yellow-deep)', fontSize: '0.85rem' }}>
                      {s.location} &bull; {s.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <div style={{ marginTop: '4rem', textAlign: 'center', background: 'var(--color-bg-cream)', border: '2px solid var(--color-border-amber)', borderRadius: 'var(--radius-md)', padding: '3rem 2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
              Be Part of Our Next Chapter of Impact
            </h3>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto 1.75rem auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Whether through a monthly financial pledge, volunteering your skills, or initiating a corporate CSR partnership, your support changes lives.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/donate" className="ash-btn ash-btn-primary">
                <i className="fa fa-heart"></i>
                <span>Pledge Support</span>
              </Link>
              <Link href="/volunteer" className="ash-btn ash-btn-outline">
                <i className="fa fa-hands-helping"></i>
                <span>Join as a Volunteer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

