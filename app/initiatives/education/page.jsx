import React from 'react';
import Link from 'next/link';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import ActivityBookShowcase from '../../../components/ActivityBookShowcase';
import { INITIATIVES_DATA } from '../../../data/initiatives';
import { EDUCATIONAL_SUBPROGRAMS_LIST } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Education & Child Development | Anand Group Charitable Trust',
  description:
    'Educational awareness, mobile phone awareness, published digital wellness activity book, school awareness camps, teacher training, child psychology, mental wellness, and child education.',
};

export default function EducationPage() {
  const initiative = INITIATIVES_DATA['education'];

  return (
    <>
      <InitiativeSubpageLayout initiative={initiative} />

      {/* Specialized Educational Awareness Sub-Programmes */}
      <section className="ash-section-ivory" style={{ padding: '4.5rem 0' }}>
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-layer-group"></i> Specialized Educational Programmes
            </div>
            <h2 className="section-title">Explore Focused Educational &amp; Wellness Initiatives</h2>
            <p className="section-subtitle">
              Dedicated awareness sub-programmes operating under our Education &amp; Child Development pillar.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.75rem',
              marginTop: '2.75rem',
            }}
          >
            {EDUCATIONAL_SUBPROGRAMS_LIST.map((prog) => (
              <div
                key={prog.slug}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--color-yellow-tint)',
                      color: 'var(--color-yellow-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <i className={`fa ${prog.icon}`}></i>
                  </div>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--color-yellow-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {prog.tag}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-text)', margin: '0.35rem 0 0.65rem 0' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {prog.lead}
                  </p>
                </div>

                <Link href={`/initiatives/${prog.slug}`} className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore {prog.title}</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem' }}>
            <ActivityBookShowcase />
          </div>
        </div>
      </section>
    </>
  );
}
