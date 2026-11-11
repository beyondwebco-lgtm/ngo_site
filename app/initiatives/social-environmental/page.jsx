import React from 'react';
import Link from 'next/link';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';
import { SOCIAL_AWARENESS_CAMPAIGNS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Social & Environmental Awareness | Anand Group Charitable Trust',
  description:
    'Traffic Awareness, Swachh Bharat cleanliness drives, Save Water campaigns, Haritha Haram tree plantation, and plastic-free living initiatives by Anand Group Charitable Trust.',
};

export default function SocialEnvironmentalPage() {
  const initiative = INITIATIVES_DATA['social-environmental'];

  return (
    <>
      <InitiativeSubpageLayout initiative={initiative} />

      {/* Highlighted Social Awareness Programmes */}
      <section className="ash-section-ivory" style={{ padding: '4.5rem 0' }}>
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-bullhorn"></i> Social Awareness Focus
            </div>
            <h2 className="section-title">Featured Social Awareness Campaigns</h2>
            <p className="section-subtitle">
              Action-oriented community education across road safety, public hygiene, and responsible water usage.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '2rem',
              marginTop: '2.75rem',
            }}
          >
            {SOCIAL_AWARENESS_CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                id={camp.id}
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
                <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={camp.image}
                    alt={`${camp.title} — Anand Group Charitable Trust`}
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
                    {camp.badge}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.4rem',
                      color: 'var(--color-text)',
                      marginBottom: '0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <i className={`fa ${camp.icon}`} style={{ color: 'var(--color-yellow-deep)' }}></i>
                    <span>{camp.title}</span>
                  </h3>
                  <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {camp.summary}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {camp.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.45rem' }}>
                        <span style={{ color: 'var(--color-yellow-deep)', fontWeight: 700 }}>&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link href="/awareness-programs" className="ash-btn ash-btn-outline">
              <i className="fa fa-layer-group"></i>
              <span>View All Educational &amp; Social Awareness Programmes</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
