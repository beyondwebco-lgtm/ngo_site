import React from 'react';
import Link from 'next/link';
import InitiativeCard from '../components/InitiativeCard';
import { INITIATIVES_LIST } from '../data/initiatives';
import { IMPACT_METRICS } from '../data/impact';

export default function HomePage() {
  const previewGallery = [
    {
      src: '/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp',
      title: 'School Campus Swachh Bharat Cleanliness Drive',
      tag: 'Swachh Bharat',
    },
    {
      src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
      title: 'Youth Inspiration School Courtyard Assembly',
      tag: 'Education',
    },
    {
      src: '/images/haritha-haram/haritha-haram-community-tree-plantation-drive.webp',
      title: 'Haritha Haram Roadside Tree Plantation',
      tag: 'Haritha Haram',
    },
    {
      src: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
      title: 'Rural Government High School Outreach',
      tag: 'Rural Education',
    },
    {
      src: '/images/init_ashram.jpg',
      title: 'Daily Nutrition at Naadha Ashram Sanctuary',
      tag: 'Naadha Ashram',
    },
    {
      src: '/images/init_healthcare.jpg',
      title: 'Free Community Health Screening Camp',
      tag: 'Healthcare',
    },
  ];

  return (
    <>
      {/* ==========================================================================
           1. HERO SECTION
           ========================================================================== */}
      <section className="hero-section" id="hero">
        <div className="ash-container">
          <div className="hero-grid">
            {/* Hero Left Content Column */}
            <div className="hero-content">
              <div className="hero-pill">
                <span className="hero-pill-badge">Trust</span>
                <span>Registered Indian Charitable Trust &bull; 80G Tax Exemption</span>
              </div>

              <h1 className="hero-title">
                Together, We Build a{' '}
                <span className="hero-highlight">Brighter, Cleaner &amp; Compassionate</span>{' '}
                Tomorrow.
              </h1>

              <p className="hero-subheading">
                Anand Group Charitable Trust is committed to transformative grassroots social development across India &mdash; empowering children through education, leading Swachh Bharat and tree plantation drives, providing healthcare, and sheltering vulnerable residents at Naadha Ashram.
              </p>

              {/* Primary Call to Actions */}
              <div className="hero-buttons">
                <Link
                  href="/donate"
                  className="ash-btn ash-btn-primary"
                  aria-label="Pledge Support or Donate"
                >
                  <i className="fa fa-heart"></i>
                  <span>Pledge Support / Donate</span>
                </Link>

                <Link
                  href="/initiatives"
                  className="ash-btn ash-btn-outline"
                  aria-label="Explore Our Core Initiatives"
                >
                  <span>Explore Initiatives</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>

              {/* Verified Trust Stats Ribbon */}
              <div className="hero-glass-stats">
                <div className="glass-stat-item">
                  <div className="glass-stat-icon">
                    <i className="fa fa-broom"></i>
                  </div>
                  <div>
                    <div className="glass-stat-label">Cleanliness</div>
                    <div className="glass-stat-value">100+ Drives</div>
                  </div>
                </div>
                <div className="glass-stat-item">
                  <div className="glass-stat-icon">
                    <i className="fa fa-user-graduate"></i>
                  </div>
                  <div>
                    <div className="glass-stat-label">Education</div>
                    <div className="glass-stat-value">5,000+ Students</div>
                  </div>
                </div>
                <div className="glass-stat-item">
                  <div className="glass-stat-icon">
                    <i className="fa fa-bowl-rice"></i>
                  </div>
                  <div>
                    <div className="glass-stat-label">Sanctuary</div>
                    <div className="glass-stat-value">25,000+ Meals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Media Column */}
            <div className="hero-image-card">
              <img
                src="/images/hero_community_hope.jpg"
                alt="Anand Group Charitable Trust Community Initiatives"
                fetchPriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           2. SHORT ABOUT US INTRODUCTION
           ========================================================================== */}
      <section className="ash-section" id="about-intro">
        <div className="ash-container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-image-wrapper">
              <div className="about-image-accent-border"></div>
              <div className="about-image-card">
                <img
                  src="/images/about_mentorship.jpg"
                  alt="Anand Group Charitable Trust Community Mentorship"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-floating-badge">
                <h4>Grassroots Upliftment</h4>
                <p>Empowering children, seniors, and villages through dedicated volunteer seva.</p>
              </div>
            </div>

            <div className="about-content-col">
              <div className="section-eyebrow">
                <i className="fa fa-seedling"></i> About Anand Group Charitable Trust
              </div>
              <h2 className="section-title">
                Rooted in Compassion. Driven by Purpose.
              </h2>
              <p className="about-text-lead">
                Anand Group Charitable Trust is a registered Indian non-governmental organization working on the ground to build healthier, cleaner, and more compassionate communities.
              </p>
              <p className="about-text-p">
                We believe that every child deserves access to education and guidance, every elder deserves to live with dignity, and every neighborhood thrives when citizens take collective pride in environmental cleanliness and green living.
              </p>

              {/* 4 Feature Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem', margin: '1.5rem 0 2rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Swachh Bharat Cleanliness</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Haritha Haram Plantations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Naadha Ashram Adoption</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>100% 80G Tax Exemption</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="ash-btn ash-btn-primary">
                  <span>Learn More About Us</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
                <Link href="/volunteer" className="ash-btn ash-btn-outline">
                  <i className="fa fa-hands-helping"></i>
                  <span>Join Our Volunteers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           3. OUR SIX CORE INITIATIVES — SIMPLE CARDS
           ========================================================================== */}
      <section className="ash-section-ivory" id="initiatives-overview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-compass"></i> Six Core Pillars of Service
            </div>
            <h2 className="section-title">Areas Where We Create Meaningful Change</h2>
            <p className="section-subtitle">
              Every initiative addresses a fundamental community need. Click any initiative below to explore its specialized programs and field action.
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

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/initiatives" className="ash-btn ash-btn-primary">
              <i className="fa fa-layer-group"></i>
              <span>View All Detailed Initiatives &amp; Programs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           4. IMPACT STATISTICS
           ========================================================================== */}
      <section className="ash-section" id="impact-overview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-chart-line"></i> A Track Record of Grassroots Action
            </div>
            <h2 className="section-title">Measurable Results in Communities</h2>
            <p className="section-subtitle">
              Our initiatives deliver verifiable improvements in living conditions, public cleanliness, and child education.
            </p>
          </div>

          <div className="impact-stats-grid" style={{ marginTop: '3rem' }}>
            {IMPACT_METRICS.slice(0, 4).map((metric, idx) => (
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

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/impact" className="ash-btn ash-btn-outline">
              <i className="fa fa-award"></i>
              <span>Explore Milestones Timeline &amp; Community Stories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           5. FEATURED SPOTLIGHT: SWACHH BHARAT & NAADHA ASHRAM
           ========================================================================== */}
      <section className="ash-section-ivory" id="featured-activities">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-star"></i> Signature Seva Highlights
            </div>
            <h2 className="section-title">Featured Ground-Level Commitments</h2>
            <p className="section-subtitle">
              Highlighting two of our most enduring community programs: civic sanitation and sanctuary care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
            {/* Spotlight 1: Swachh Bharat & Haritha Haram */}
            <div className="initiative-main-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '100%', height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp"
                    alt="Swachh Bharat Cleanliness Drives"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--color-yellow-dark)',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                    }}
                  >
                    Environmental Seva
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    Swachh Bharat &amp; Haritha Haram Drives
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    From sweeping school grounds and rural road ways to distributing saplings across colleges, our team actively leads on-the-ground environmental action with students, community elders, and state leaders.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; 100+</strong> Village street sweeps and market cleanups</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; 1,200+</strong> Roadside trees planted and watered</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Anti-Plastic</strong> Rallies and safe road campaigns</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <Link href="/initiatives/social-environmental" className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Environmental Drives</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Spotlight 2: Naadha Ashram Sanctuary */}
            <div className="initiative-main-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '100%', height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/init_ashram.jpg"
                    alt="Naadha Ashram Sanctuary Care"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--color-yellow-dark)',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                    }}
                  >
                    Sanctuary Support
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    Naadha Ashram Sanctuary Adoption
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    Naadha Ashram shelters destitute seniors, special-needs individuals, and orphaned children. We provide continuous 365-day nutrition, doctor visits, hygiene upgrades, fresh bedding, and genuine family love.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; 3 Daily Hot Meals</strong> and nutritional supplements</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Full Healthcare</strong> and routine doctor screenings</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Resident Child Schooling</strong> &amp; study support</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <Link href="/initiatives/naadha-ashram" className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Naadha Ashram Seva</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           6. PHOTO GALLERY PREVIEW (6 Curated Highlights — NO POPUPS)
           ========================================================================== */}
      <section className="ash-section" id="gallery-preview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-camera-retro"></i> Captured in the Field
            </div>
            <h2 className="section-title">Photographic Moments of Seva</h2>
            <p className="section-subtitle">
              Authentic glimpses of our trustees, volunteers, students, and community members working together.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.75rem',
              marginTop: '3rem',
            }}
          >
            {previewGallery.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      background: 'rgba(255,255,255,0.95)',
                      color: 'var(--color-yellow-dark)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-text)', margin: 0, lineHeight: '1.4' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link href="/gallery" className="ash-btn ash-btn-primary">
              <i className="fa fa-images"></i>
              <span>View All 27+ Photographs in Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           7. GET INVOLVED & SUPPORT CTA
           ========================================================================== */}
      <section className="ash-section-ivory" id="get-involved-cta">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-hands-holding-child"></i> Get Involved
            </div>
            <h2 className="section-title">How You Can Make a Difference Today</h2>
            <p className="section-subtitle">
              Join our mission of compassion. Whether you donate, volunteer, or partner through corporate CSR, your support counts.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {/* Action 1 */}
            <div style={{ background: 'var(--color-white)', border: '2px solid var(--color-border-amber)', borderRadius: 'var(--radius-md)', padding: '2.25rem', boxShadow: 'var(--shadow-sm)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-yellow-tint)', margin: '0 auto 1.25rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                  <i className="fa fa-heart"></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                  Pledge Financial Support
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Sponsor daily meals at Naadha Ashram, school kits for rural children, or tree saplings. Eligible for 80G tax exemptions.
                </p>
              </div>
              <Link href="/donate" className="ash-btn ash-btn-primary" style={{ justifyContent: 'center' }}>
                <span>Donate / Pledge Now</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>

            {/* Action 2 */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.25rem', boxShadow: 'var(--shadow-sm)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-yellow-tint)', margin: '0 auto 1.25rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                  <i className="fa fa-hands-helping"></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                  Join as a Volunteer
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Join our weekend cleanliness drives, school mentorship assemblies, and cultural events. Receive official volunteer certificates.
                </p>
              </div>
              <Link href="/volunteer" className="ash-btn ash-btn-outline" style={{ justifyContent: 'center' }}>
                <span>Register as Volunteer</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>

            {/* Action 3 */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.25rem', boxShadow: 'var(--shadow-sm)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-yellow-tint)', margin: '0 auto 1.25rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-yellow-deep)', fontSize: '1.5rem' }}>
                  <i className="fa fa-handshake"></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                  Corporate CSR Partnerships
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Schedule VII Section 135 compliant CSR implementation with transparent CA utilization certificates and audited milestone reporting.
                </p>
              </div>
              <Link href="/csr-partnerships" className="ash-btn ash-btn-outline" style={{ justifyContent: 'center' }}>
                <span>Explore CSR Framework</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           8. CONTACT & HELPLINE CTA
           ========================================================================== */}
      <section className="ash-section" id="contact-cta">
        <div className="ash-container">
          <div
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, var(--color-bg-cream) 100%)',
              border: '2px solid var(--color-border-amber)',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2.5rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ flex: '1 1 450px' }}>
              <span className="section-eyebrow" style={{ marginBottom: '0.35rem' }}>
                <i className="fa fa-headset"></i> We Are Ready to Assist You
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', margin: '0.35rem 0 0.75rem 0' }}>
                Have Questions or Want to Visit Our Projects?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                Connect with our coordinators for donation receipts, CSR consultations, school awareness drive invitations, or visiting Naadha Ashram.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="ash-btn ash-btn-primary">
                <i className="fa fa-envelope"></i>
                <span>Send Us a Message</span>
              </Link>
              <a href="tel:+919848123456" className="ash-btn ash-btn-outline">
                <i className="fa fa-phone"></i>
                <span>Call +91 98481 23456</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
