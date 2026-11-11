import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';
import InitiativeCard from '../../components/InitiativeCard';
import { INITIATIVES_LIST } from '../../data/initiatives';

export const metadata = {
  title: 'Our Initiatives | Anand Group Charitable Trust',
  description: 'Explore the 5 core pillars of Anand Group Charitable Trust: environmental awareness, education, temple heritage, healthcare, and elderly care.',
};

export default function InitiativesOverviewPage() {
  return (
    <>
      <PageBanner
        badge="Holistic Grassroots Focus"
        badgeIcon="fa-hand-holding-heart"
        title="Our Five Pillars of Compassionate Action"
        highlightWord="Compassionate"
        lead="We believe lasting community progress requires an interconnected approach. From clean public environments and youth education to accessible healthcare, cultural heritage preservation, and dignity for senior citizens, explore our five core initiatives."
        breadcrumbs={[{ label: 'Initiatives', href: '/initiatives' }]}
      />

      {/* Initiatives 6-Grid */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-cubes"></i> Core Focus Areas
            </div>
            <h2 className="section-title">Explore Our Work by Initiative</h2>
            <p className="section-subtitle">
              Click any initiative below to explore its specialized programs, expected community benefits, and authentic field action photography.
            </p>
          </div>

          <div className="initiatives-grid" style={{ marginTop: '3rem' }}>
            {INITIATIVES_LIST.map((initiative, idx) => (
              <InitiativeCard
                key={initiative.slug}
                initiative={initiative}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Methodology Callout */}
      <section className="ash-section-ivory" style={{ padding: '4.5rem 0' }}>
        <div className="ash-container">
          <div className="impact-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">
                <i className="fa fa-chart-line"></i> Our Grassroots Methodology
              </span>
              <h2 className="section-title">How We Create Lasting Change</h2>
              <p className="impact-text-lead" style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                Unlike conventional charities that only provide temporary handouts, Anand Group Charitable Trust works directly at the village and neighborhood level to build self-sustaining community consciousness and ownership.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.25rem' }}></i>
                  <div>
                    <strong style={{ color: 'var(--color-text)' }}>Direct Youth &amp; Student Involvement:</strong>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                      We engage schoolchildren and college youth directly, instilling values of civic duty and community pride early.
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.25rem' }}></i>
                  <div>
                    <strong style={{ color: 'var(--color-text)' }}>Unbroken Long-Term Commitments:</strong>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                      In rural school education, tree nurturing, and elderly care, our support is sustained and continuous, not just one-off promotional events.
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.25rem' }}></i>
                  <div>
                    <strong style={{ color: 'var(--color-text)' }}>Zero Intermediate Leakage:</strong>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                      Trust leadership personally supervises every field drive, distribution camp, and community event.
                    </p>
                  </div>
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/impact" className="ash-btn ash-btn-primary">
                  <i className="fa fa-award"></i>
                  <span>View Verified Milestones</span>
                </Link>
                <Link href="/donate" className="ash-btn ash-btn-outline">
                  <span>Support an Initiative</span>
                </Link>
              </div>
            </div>

            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '1.25rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fa fa-heart-circle-bolt" style={{ color: 'var(--color-yellow-deep)' }}></i>
                Pledge Your Support Today
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Your contribution directly funds school supplies, free medical camps, tree saplings for Haritha Haram, and healthcare assistance for rural elders.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <Link href="/donate" className="ash-btn ash-btn-primary" style={{ justifyContent: 'center' }}>
                  <i className="fa fa-heart"></i>
                  <span>Make a Donation / Pledge</span>
                </Link>
                <Link href="/volunteer" className="ash-btn ash-btn-outline" style={{ justifyContent: 'center' }}>
                  <i className="fa fa-hands-helping"></i>
                  <span>Register as a Volunteer</span>
                </Link>
                <Link href="/csr-partnerships" className="ash-btn" style={{ justifyContent: 'center', background: 'var(--color-bg-cream)', border: '1px solid var(--color-border-amber)', color: 'var(--color-yellow-dark)' }}>
                  <i className="fa fa-handshake"></i>
                  <span>Corporate CSR Partnerships</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

