import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';
import ActivityBookShowcase from '../../components/ActivityBookShowcase';
import {
  EDUCATIONAL_SUBPROGRAMS_LIST,
  SOCIAL_AWARENESS_CAMPAIGNS,
} from '../../data/awarenessPrograms';

export const metadata = {
  title: 'Awareness Programmes — Educational & Social | Anand Group Charitable Trust',
  description:
    'Explore Anand Group Charitable Trust’s educational awareness, mobile phone awareness, digital wellness activity book, teacher training, child psychology, mental wellness, Traffic Awareness, Swachh Bharat, and Save Water programmes.',
};

export default function AwarenessProgramsPage() {
  return (
    <>
      <PageBanner
        badge="Educational & Social Awareness"
        badgeIcon="fa-lightbulb"
        title="Empowering Minds. Inspiring Responsible Living."
        highlightWord="Inspiring"
        lead="Discover our focused awareness programmes spanning digital wellness, school guidance camps, teacher training, child psychology by qualified counsellors, mental wellness, road safety, sanitation, and water conservation."
        breadcrumbs={[{ label: 'Awareness Programs', href: '/awareness-programs' }]}
      />

      {/* Section 1: Educational Awareness Programmes */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-graduation-cap"></i> Primary Focus Area
            </div>
            <h2 className="section-title">Educational Awareness &amp; Wellness Programmes</h2>
            <p className="section-subtitle">
              Dedicated programmes supporting students, parents, and educators across schools and communities.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {EDUCATIONAL_SUBPROGRAMS_LIST.map((prog) => (
              <div
                key={prog.slug}
                className="initiative-main-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={prog.heroImage}
                      alt={prog.title}
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
                      {prog.tag}
                    </span>
                  </div>
                  <div style={{ padding: '1.65rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.6rem' }}>
                      {prog.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                      {prog.lead}
                    </p>
                  </div>
                </div>
                <div style={{ padding: '0 1.65rem 1.65rem 1.65rem' }}>
                  <Link
                    href={`/initiatives/${prog.slug}`}
                    className="ash-btn ash-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Explore {prog.title}</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Published Digital Wellness Activity Book */}
      <section className="ash-section-ivory" style={{ padding: '4.5rem 0' }}>
        <div className="ash-container">
          <ActivityBookShowcase />
        </div>
      </section>

      {/* Section 3: Social Awareness Campaigns */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-bullhorn"></i> Civic &amp; Environmental Campaigns
            </div>
            <h2 className="section-title">Social Awareness Programmes</h2>
            <p className="section-subtitle">
              Practical community drives promoting road safety, public cleanliness, and water conservation across villages and schools.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {SOCIAL_AWARENESS_CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                className="initiative-main-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={camp.image}
                      alt={camp.title}
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
                  <div style={{ padding: '1.65rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className={`fa ${camp.icon}`} style={{ color: 'var(--color-yellow-deep)' }}></i>
                      <span>{camp.title}</span>
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.93rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {camp.summary}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {camp.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.4rem' }}>
                          <span style={{ color: 'var(--color-yellow-deep)', fontWeight: 700 }}>&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ padding: '0 1.65rem 1.65rem 1.65rem' }}>
                  <Link href={camp.href} className="ash-btn ash-btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Learn More About {camp.title}</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

