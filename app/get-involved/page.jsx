import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';

export const metadata = {
  title: 'Get Involved | Anand Group Charitable Trust',
  description: 'Discover how you can support Anand Group Charitable Trust: volunteer, pledge donations, partner via corporate CSR, or sponsor essential community programs.',
};

export default function GetInvolvedPage() {
  const waysToHelp = [
    {
      title: 'Make a Financial Pledge / Donation',
      icon: 'fa-heart',
      badge: '80G Tax Exemption',
      desc: 'Directly fund school kits for underprivileged children, educational awareness initiatives, rural medical camps, tree saplings, or elder care essentials. Eligible contributions qualify for Section 80G tax deductions subject to applicable conditions.',
      href: '/donate',
      btnLabel: 'Donate / Pledge Now',
      isPrimary: true,
    },
    {
      title: 'Volunteer Your Time & Energy',
      icon: 'fa-hands-helping',
      badge: 'Field Seva',
      desc: 'Join our weekend Swachh Bharat street cleaning drives, teach remedial classes at rural schools, plant roadside trees, or assist at rural medical screening camps.',
      href: '/volunteer',
      btnLabel: 'Register as Volunteer',
      isPrimary: false,
    },
    {
      title: 'Corporate CSR Partnerships',
      icon: 'fa-handshake',
      badge: 'Schedule VII Compliant',
      desc: 'Align your organization’s statutory CSR goals with high-impact, verified grassroots programs in education, rural sanitation, environmental protection, and senior healthcare.',
      href: '/csr-partnerships',
      btnLabel: 'Explore CSR Framework',
      isPrimary: false,
    },
    {
      title: 'Sponsor Community Annadanam Meals',
      icon: 'fa-bowl-rice',
      badge: 'Annadanam Seva',
      desc: 'Sponsor wholesome, freshly prepared hot meals and nutrition kits for indigent families, rural pilgrims, and elderly community members.',
      href: '/donate?target=Temple%20Development%20%26%20Cultural%20Activities',
      btnLabel: 'Sponsor Annadanam',
      isPrimary: false,
    },
    {
      title: 'Adopt a Government School',
      icon: 'fa-school',
      badge: 'Education Seva',
      desc: 'Sponsor a rural school with science kits, a reading library, ceiling fans, student desks, and clean drinking water purification facilities.',
      href: '/donate?target=Education%20%26%20Child%20Development',
      btnLabel: 'Sponsor School Program',
      isPrimary: false,
    },
    {
      title: 'Spread Civic & Environmental Awareness',
      icon: 'fa-bullhorn',
      badge: 'Community Action',
      desc: 'Lead anti-plastic campaigns in your neighborhood, organize roadside tree plantation drives, and inspire your community to practice road safety discipline.',
      href: '/initiatives/social-environmental',
      btnLabel: 'View Awareness Guides',
      isPrimary: false,
    },
  ];

  return (
    <>
      <PageBanner
        badge="Community Action"
        badgeIcon="fa-hands-holding-child"
        title="Together, We Can Transform Countless Lives"
        highlightWord="Transform"
        lead="Meaningful social change is not built by an organization alone — it is created when compassionate citizens step forward. Explore the many ways you can contribute your time, resources, and passion."
        breadcrumbs={[{ label: 'Get Involved', href: '/get-involved' }]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-sparkles"></i> Pathways to Contribute
            </div>
            <h2 className="section-title">Six Meaningful Ways to Support Our Mission</h2>
            <p className="section-subtitle">
              Choose the pathway that aligns best with your values, time availability, or organizational goals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '2rem',
              marginTop: '3.5rem',
            }}
          >
            {waysToHelp.map((way, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: way.isPrimary ? '2px solid var(--color-border-amber)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.25rem',
                  boxShadow: way.isPrimary ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: 'var(--color-yellow-tint)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-yellow-deep)',
                        fontSize: '1.4rem',
                      }}
                    >
                      <i className={`fa ${way.icon}`}></i>
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        background: 'var(--color-bg-cream)',
                        color: 'var(--color-yellow-dark)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        border: '1px solid var(--color-border-amber)',
                      }}
                    >
                      {way.badge}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.85rem' }}>
                    {way.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                    {way.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={way.href}
                    className={`ash-btn ${way.isPrimary ? 'ash-btn-primary' : 'ash-btn-outline'}`}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{way.btnLabel}</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Governance Callout */}
          <div
            style={{
              marginTop: '4.5rem',
              background: 'var(--color-bg-cream)',
              border: '2px solid var(--color-border-amber)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <span className="section-eyebrow" style={{ marginBottom: '0.35rem' }}>
                <i className="fa fa-shield-halved"></i> Ethical Seva Assurance
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', margin: '0.35rem 0 0.65rem 0' }}>
                Every Rupee &amp; Minute Directly Reaches the Field
              </h3>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                We practice a transparent pledge and verification model. Our trustees work hands-on with zero administrative leakage, and all donors receive complete receipts and photo documentation of activities supported.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="ash-btn ash-btn-outline">
                <span>Learn About Governance</span>
              </Link>
              <Link href="/contact" className="ash-btn ash-btn-primary">
                <i className="fa fa-phone"></i>
                <span>Speak to a Trustee</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

