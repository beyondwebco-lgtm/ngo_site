import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';

export const metadata = {
  title: 'About Us | Anand Group Charitable Trust',
  description: 'Learn about the mission, founding history, trustees, values, and legal governance of Anand Group Charitable Trust.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="Who We Are"
        badgeIcon="fa-landmark"
        title="Rooted in Compassion. Driven by Purpose."
        highlightWord="Compassion"
        lead="Anand Group Charitable Trust is a dedicated non-governmental organization and registered charitable trust committed to grassroots social transformation, human dignity, and sustainable community empowerment across India."
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
      />

      {/* Section 1: Our Story & Founding Vision */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-image-wrapper">
              <div className="about-image-accent-border"></div>
              <div className="about-image-card">
                <img
                  src="/images/about_mentorship.jpg"
                  alt="Anand Group Charitable Trust Community Mentorship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-floating-badge">
                <h4>Grassroots Upliftment</h4>
                <p>Empowering children, seniors, and rural communities through dedicated volunteer seva.</p>
              </div>
            </div>

            <div className="about-content-col">
              <div className="section-eyebrow">
                <i className="fa fa-seedling"></i> Our Story &amp; Origins
              </div>
              <h2 className="section-title">
                Building a Foundation of Hope &amp; Dignity
              </h2>
              <p className="about-text-lead">
                Anand Group Charitable Trust was founded with an unwavering conviction: that sustainable social progress begins when community members, youth, and compassionate citizens join hands to solve real, ground-level challenges.
              </p>
              <p className="about-text-p">
                Starting with local Swachh Bharat street sanitation drives, tree plantations, and student awareness programs across Andhra Pradesh and Telangana, the Trust quickly expanded its horizon. Over the years, we recognized that poverty, lack of educational resources, environmental pollution, and senior citizen abandonment are deeply interconnected issues that require sustained, hands-on attention.
              </p>
              <p className="about-text-p">
                Today, our operations span educational awareness, teacher training, child psychology and individual attention programmes, digital wellness initiatives, mental wellness education, Haritha Haram green corridors, free rural medical camps, elderly care, and cultural heritage preservation across Andhra Pradesh and Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Founders */}
      <section className="subpage-section" style={{ background: 'var(--color-bg-cream)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '5rem 0' }}>
        <div className="ash-container">
          <div className="section-header text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div className="section-eyebrow">
              <i className="fa fa-hands-holding-seedling"></i> Founding Vision
            </div>
            <h2 className="section-title">Our Founders</h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
              Anand Group Charitable Trust was established and registered in 2014 by A. S. Rao and A. S. Devi, with a shared vision of promoting education, awareness, compassion, and meaningful community service.
            </p>
          </div>

          {/* Clean, Elegant, Text-Only Founders Display */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', maxWidth: '640px', margin: '2.5rem auto 1.75rem auto', textAlign: 'center' }}>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-amber)', borderRadius: '16px', padding: '2.25rem 1.5rem', boxShadow: '0 4px 18px rgba(234, 179, 8, 0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-text)', margin: 0, fontWeight: 700 }}>
                A. S. Rao
              </h3>
            </div>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-amber)', borderRadius: '16px', padding: '2.25rem 1.5rem', boxShadow: '0 4px 18px rgba(234, 179, 8, 0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-text)', margin: 0, fontWeight: 700 }}>
                A. S. Devi
              </h3>
            </div>
          </div>

          {/* Registration Badge */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: 'var(--color-yellow-tint)', border: '1px solid var(--color-border-gold)', color: 'var(--color-yellow-dark)', padding: '0.5rem 1.35rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.3px', boxShadow: 'var(--shadow-sm)' }}>
              <i className="fa fa-calendar-check" style={{ color: 'var(--color-yellow-deep)' }}></i>
              <span>Established &amp; Registered in 2014</span>
            </span>
          </div>
        </div>
      </section>

      {/* Section 3: Mission, Vision & Core Values */}
      <section className="ash-section-ivory" style={{ padding: '5rem 0' }}>
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-compass"></i> Guiding Principles
            </div>
            <h2 className="section-title">Our Mission, Vision &amp; Pillars</h2>
            <p className="section-subtitle">
              Every initiative we undertake is anchored in transparency, empathy, and measurable positive impact.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {/* Mission */}
            <div className="sidebar-box highlight" style={{ padding: '2.25rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--color-yellow-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                <i className="fa fa-bullseye"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--color-text)' }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                To uplift underprivileged communities by providing access to quality education, clean and healthy living environments, accessible healthcare, and compassionate care for vulnerable elders and destitute residents.
              </p>
            </div>

            {/* Vision */}
            <div className="sidebar-box highlight" style={{ padding: '2.25rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--color-yellow-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                <i className="fa fa-eye"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--color-text)' }}>
                Our Vision
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                An inclusive, compassionate society where every child is empowered through education, every elder lives with dignity, public spaces are clean and green, and no individual is left destitute or hungry.
              </p>
            </div>

            {/* Values */}
            <div className="sidebar-box highlight" style={{ padding: '2.25rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--color-yellow-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                <i className="fa fa-shield-heart"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--color-text)' }}>
                Core Values
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <li><strong style={{ color: 'var(--color-text)' }}>&bull; Unconditional Seva:</strong> Serving with humility, empathy, and devotion.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>&bull; Transparent Stewardship:</strong> Ethical direct pledge model with accountable governance.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>&bull; Youth Mobilization:</strong> Channeling student energy into civic nation building.</li>
                <li><strong style={{ color: 'var(--color-text)' }}>&bull; Environmental Respect:</strong> Revering Mother Earth through green action.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Legal Registration & Governance Box */}
      <section className="ash-section-ivory" style={{ padding: '4rem 0' }}>
        <div className="ash-container">
          <div style={{ background: 'var(--color-white)', border: '2px solid var(--color-border-amber)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 500px' }}>
                <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>
                  <i className="fa fa-stamp"></i> Trust Governance &amp; Compliance
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', color: 'var(--color-text)', margin: '0.5rem 0 0.85rem 0' }}>
                  Registered Indian Charitable Trust
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0, fontSize: '0.98rem' }}>
                  Anand Group Charitable Trust is a registered Indian charitable trust holding valid Section 80G approval. Eligible contributions may qualify for tax deduction under Section 80G of the Income Tax Act, 1961, subject to applicable statutory conditions, required donor documentation, and prevailing tax laws.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/initiatives" className="ash-btn ash-btn-outline">
                  <span>Explore Initiatives</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
                <Link href="/donate" className="ash-btn ash-btn-primary">
                  <i className="fa fa-heart"></i>
                  <span>Support Our Seva</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

