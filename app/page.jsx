import React from 'react';
import Link from 'next/link';
import InitiativeCard from '../components/InitiativeCard';
import ActivityBookShowcase from '../components/ActivityBookShowcase';
import { INITIATIVES_LIST } from '../data/initiatives';
import { IMPACT_METRICS } from '../data/impact';
import { SOCIAL_AWARENESS_CAMPAIGNS } from '../data/awarenessPrograms';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
  ORGANIZATION_INFO,
} from '../data/siteConfig';

export default function HomePage() {
  const heroHighlightTags = [
    'Educational Awareness',
    'Teacher Training',
    'Child Development',
    'Digital Wellness',
    'Social Responsibility',
  ];

  const featuredEducationalProgrammes = [
    {
      title: 'School Awareness Camps',
      tag: 'Campus Outreach',
      icon: 'fa-school',
      desc: 'Interactive school camps delivering educational guidance, positive student behaviour awareness, digital wellness, and value-based habits.',
      href: '/initiatives/school-awareness-programs',
      image: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
    },
    {
      title: 'Mental Wellness Awareness',
      tag: 'Emotional Well-Being',
      icon: 'fa-brain',
      desc: 'Supporting emotional well-being through stress management education, supportive communication, and professional counselling awareness.',
      href: '/initiatives/mental-wellness',
      image: '/images/school-awareness/school-awareness-auditorium-mentorship-session.webp',
    },
    {
      title: 'Education & Child Support',
      tag: 'Core Education Pillar',
      icon: 'fa-graduation-cap',
      desc: 'Empowering underprivileged children with school kits, learning infrastructure, remedial coaching, and strong family values.',
      href: '/initiatives/education',
      image: '/images/education/anand-vidyalaya-school-anniversary-celebration.webp',
    },
  ];

  const previewGallery = [
    {
      src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
      title: 'Youth Inspiration School Courtyard Assembly',
      tag: 'School Awareness',
    },
    {
      src: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
      title: 'Rural Government High School Outreach',
      tag: 'Rural Education',
    },
    {
      src: '/images/education/anand-vidyalaya-school-anniversary-celebration.webp',
      title: 'Anand Vidyalaya School 1st Anniversary Celebrations',
      tag: 'Education & Values',
    },
    {
      src: '/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp',
      title: 'School Campus Swachh Bharat Cleanliness Drive',
      tag: 'Swachh Bharat',
    },
    {
      src: '/images/haritha-haram/haritha-haram-community-tree-plantation-drive.webp',
      title: 'Haritha Haram Roadside Tree Plantation',
      tag: 'Haritha Haram',
    },
    {
      src: '/images/healthcare/healthcare-press-ambati-srinu-patient-medical-aid.webp',
      title: 'Emergency Medical Aid — Published Press Coverage',
      tag: 'Healthcare Support',
    },
  ];

  return (
    <>
      {/* ==========================================================================
           2. EDUCATIONAL AWARENESS HERO SECTION
           ========================================================================== */}
      <section className="hero-section" id="hero">
        <div className="ash-container">
          <div className="hero-grid">
            {/* Hero Left Content Column */}
            <div className="hero-content">
              <div className="hero-pill">
                <span className="hero-pill-badge">Trust</span>
                <span>{ORGANIZATION_INFO.statusLabel} &bull; AP &amp; Telangana</span>
              </div>

              <h1 className="hero-title">
                Empowering Education.{' '}
                <span className="hero-highlight">Creating Awareness.</span>{' '}
                Transforming Communities.
              </h1>

              <p className="hero-subheading">
                Anand Group Charitable Trust works to build a brighter future through educational awareness, teacher training, child psychology sessions, responsible mobile usage programmes, mental wellness initiatives, and meaningful social projects.
              </p>

              {/* Highlight Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem',
                }}
                aria-label="Core Focus Areas"
              >
                {heroHighlightTags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-border-amber)',
                      color: 'var(--color-yellow-dark)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '0.32rem 0.78rem',
                      borderRadius: '999px',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Call to Actions */}
              <div className="hero-buttons">
                <Link
                  href="/initiatives"
                  className="ash-btn ash-btn-primary"
                  aria-label="Explore Our Initiatives"
                >
                  <span>Explore Our Initiatives</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>

                <Link
                  href="/impact"
                  className="ash-btn ash-btn-outline"
                  aria-label="Our Social Impact"
                >
                  <i className="fa fa-chart-line"></i>
                  <span>Our Social Impact</span>
                </Link>
              </div>

              {/* Verified Trust Stats Ribbon */}
              <div className="hero-glass-stats">
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
                    <i className="fa fa-broom"></i>
                  </div>
                  <div>
                    <div className="glass-stat-label">Cleanliness</div>
                    <div className="glass-stat-value">100+ Drives</div>
                  </div>
                </div>
                <div className="glass-stat-item">
                  <div className="glass-stat-icon">
                    <i className="fa fa-bowl-rice"></i>
                  </div>
                  <div>
                    <div className="glass-stat-label">Annadanam</div>
                    <div className="glass-stat-value">25,000+ Meals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Media Column — Authentic School Awareness Photograph */}
            <div className="hero-image-card">
              <img
                src="/images/school-awareness/school-awareness-youth-inspiration-assembly.webp"
                alt="Anand Group Charitable Trust School Educational Awareness Session"
                fetchPriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           3. ABOUT ANAND GROUP CHARITABLE TRUST
           ========================================================================== */}
      <section className="ash-section" id="about-intro">
        <div className="ash-container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-image-wrapper">
              <div className="about-image-accent-border"></div>
              <div className="about-image-card">
                <img
                  src="/images/about_mentorship.jpg"
                  alt="Anand Group Charitable Trust Educational & Community Mentorship"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-floating-badge">
                <h4>Grassroots Action</h4>
                <p>Advancing educational awareness, wellness, and charitable service across Andhra Pradesh &amp; Telangana.</p>
              </div>
            </div>

            <div className="about-content-col">
              <div className="section-eyebrow">
                <i className="fa fa-seedling"></i> About Anand Group Charitable Trust
              </div>
              <h2 className="section-title">
                {ORGANIZATION_INFO.tagline}
              </h2>
              <p className="about-text-lead">
                Anand Group Charitable Trust is a registered Indian charitable trust operating across Andhra Pradesh and Telangana with primary focus on educational awareness, teacher training, child development, digital wellness, mental wellness, and social awareness.
              </p>
              <p className="about-text-p">
                Alongside our educational mission, we remain deeply dedicated to charitable service through healthcare camps, elderly care, heritage temple development, environmental conservation, and community welfare.
              </p>

              {/* 4 Feature Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem', margin: '1.5rem 0 2rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Educational &amp; Digital Wellness</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Teacher &amp; Child Psychology</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Healthcare, Elder &amp; Social Seva</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', fontSize: '1.1rem' }}></i>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>Registered Trust &bull; 80G Approved</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="ash-btn ash-btn-primary">
                  <span>Learn More About Us</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
                <Link href="/awareness-programs" className="ash-btn ash-btn-outline">
                  <i className="fa fa-lightbulb"></i>
                  <span>Explore Awareness Programs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           4. FEATURED EDUCATIONAL AWARENESS PROGRAMMES
           ========================================================================== */}
      <section className="ash-section-ivory" id="educational-awareness">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-graduation-cap"></i> Primary Trust Focus
            </div>
            <h2 className="section-title">Featured Educational Awareness Programmes</h2>
            <p className="section-subtitle">
              Practical school guidance, emotional well-being awareness, and foundational child education across communities.
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
            {featuredEducationalProgrammes.map((item) => (
              <div
                key={item.title}
                className="initiative-main-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: '100%', height: '215px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={item.image}
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
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className={`fa ${item.icon}`} style={{ color: 'var(--color-yellow-deep)' }}></i>
                      <span>{item.title}</span>
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div style={{ padding: '0 1.75rem 1.75rem 1.75rem' }}>
                  <Link href={item.href} className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           5. MOBILE PHONE AWARENESS & PUBLISHED ACTIVITY BOOK
           ========================================================================== */}
      <section className="ash-section" id="digital-wellness">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-mobile-screen-button"></i> Digital Wellness Initiative
            </div>
            <h2 className="section-title">Helping Children Build Healthier Digital Habits</h2>
            <p className="section-subtitle">
              Completed and ongoing mobile phone awareness programmes paired with our published digital wellness activity book for constructive offline learning.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <div
              style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-yellow-deep)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)' }}></i>
                <span>Completed Awareness Programmes</span>
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                The Trust has conducted mobile phone awareness programmes guiding children on responsible smartphone habits, online safety, and balanced daily routines, alongside distribution of its educational activity book.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-bg-cream)',
                border: '1px solid var(--color-border-amber)',
                borderLeft: '4px solid var(--color-yellow-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa fa-calendar-check" style={{ color: 'var(--color-yellow-deep)' }}></i>
                <span>Planned School &amp; Community Outreach</span>
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Additional digital wellness programmes are planned across partner schools to foster age-appropriate screen boundaries, physical play, and constructive offline reading.
              </p>
            </div>
          </div>

          <ActivityBookShowcase compact={true} />
        </div>
      </section>

      {/* ==========================================================================
           6. TEACHER TRAINING & CHILD DEVELOPMENT
           ========================================================================== */}
      <section className="ash-section-ivory" id="teacher-child-development">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-chalkboard-user"></i> Educators &amp; Learners
            </div>
            <h2 className="section-title">Teacher Training &amp; Child Development</h2>
            <p className="section-subtitle">
              Supporting educators with values-driven pedagogy while nurturing each child through individual attention and qualified psychology sessions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '2.25rem',
              marginTop: '3rem',
            }}
          >
            {/* Card 1: Teacher Training */}
            <div className="initiative-main-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/about_mentorship.jpg"
                    alt="Teacher Training & Values Education"
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
                    Teacher Empowerment
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    Teacher Training — Empowering Teachers to Shape Better Futures
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    Equipping classroom educators with practical understanding of moral values, child psychology, positive communication, and empathetic student guidance.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Moral Values &amp; Character:</strong> Fostering empathy, discipline, and responsibility</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Child Psychology:</strong> Recognizing diverse student learning and emotional needs</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Classroom Communication:</strong> Attentive, encouraging, and individual student care</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <Link href="/initiatives/teacher-training" className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Teacher Training</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Child Psychology & Individual Attention */}
            <div className="initiative-main-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/images/school-awareness/school-awareness-student-civic-pledge.webp"
                    alt="Child Psychology & Individual Attention"
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
                    Qualified Psychologists &amp; Counsellors
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
                    Child Psychology &amp; Individual Attention — Every Child Deserves to Be Understood
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    Conducted by qualified psychologists and counsellors to strengthen student emotional development, confidence building, and parent-teacher alignment.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Individual Attention:</strong> Identifying and supporting each learner’s distinct needs</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Qualified Guidance:</strong> Child psychology sessions led by qualified professionals</li>
                    <li><strong style={{ color: 'var(--color-text)' }}>&bull; Positive Environments:</strong> Constructive parent-teacher and classroom dialogue</li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: '0 2rem 2rem 2rem' }}>
                <Link href="/initiatives/child-development" className="ash-btn ash-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Child Development</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           7. SOCIAL AWARENESS CAMPAIGNS (Traffic, Swachh Bharat, Save Water)
           ========================================================================== */}
      <section className="ash-section" id="social-awareness">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-bullhorn"></i> Social Responsibility Campaigns
            </div>
            <h2 className="section-title">Traffic Awareness, Swachh Bharat &amp; Save Water</h2>
            <p className="section-subtitle">
              Action-driven community awareness campaigns promoting safer roads, cleaner public spaces, and water conservation.
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
                  <div style={{ padding: '1.65rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className={`fa ${camp.icon}`} style={{ color: 'var(--color-yellow-deep)' }}></i>
                      <span>{camp.title}</span>
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.93rem', lineHeight: '1.6', margin: 0 }}>
                      {camp.summary}
                    </p>
                  </div>
                </div>
                <div style={{ padding: '0 1.65rem 1.65rem 1.65rem' }}>
                  <Link href={camp.href} className="ash-btn ash-btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Explore {camp.title}</span>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           8. FIVE CORE CHARITABLE INITIATIVES
           ========================================================================== */}
      <section className="ash-section-ivory" id="initiatives-overview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-compass"></i> Five Core Charitable Pillars
            </div>
            <h2 className="section-title">Comprehensive Community Service &amp; Welfare</h2>
            <p className="section-subtitle">
              Alongside our primary focus on educational awareness, all five charitable pillars operate actively across rural and urban communities.
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
              <span>View All Five Core Initiatives &amp; Sub-Programmes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           9. VERIFIED IMPACT STATISTICS
           ========================================================================== */}
      <section className="ash-section" id="impact-overview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-chart-line"></i> Track Record of Grassroots Action
            </div>
            <h2 className="section-title">Confirmed Community Impact Figures</h2>
            <p className="section-subtitle">
              Documented field outcomes reflecting sustained engagement across education, sanitation, healthcare, and green drives.
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

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/impact" className="ash-btn ash-btn-outline">
              <i className="fa fa-award"></i>
              <span>Explore Milestones Timeline &amp; Documentation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           10. GALLERY PREVIEW
           ========================================================================== */}
      <section className="ash-section-ivory" id="gallery-preview">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-camera-retro"></i> Authentic Field Moments
            </div>
            <h2 className="section-title">Glimpses of Seva in Action</h2>
            <p className="section-subtitle">
              Genuine photographs documenting school assemblies, environmental campaigns, and medical support.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {previewGallery.map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      background: 'rgba(17, 24, 39, 0.8)',
                      color: '#FACC15',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-text)', margin: 0, fontWeight: 600 }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/gallery" className="ash-btn ash-btn-primary">
              <i className="fa fa-images"></i>
              <span>Browse Full Photo Gallery</span>
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           11. GET INVOLVED
           ========================================================================== */}
      <section className="ash-section" id="get-involved-cta">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-hands-holding-child"></i> Get Involved
            </div>
            <h2 className="section-title">How You Can Make a Difference Today</h2>
            <p className="section-subtitle">
              Join our mission in educational awareness, digital wellness, health camps, and community welfare.
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
                  Support school awareness outreach, rural health camps, and community seva. Eligible contributions may qualify under Section 80G rules.
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
                  Participate in school awareness sessions, cleanliness drives, plantation programmes, and community welfare initiatives.
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
                  Schedule VII Section 135 aligned CSR partnerships across education, sanitation, healthcare, and elder care.
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
           12. CONTACT CTA
           ========================================================================== */}
      <section className="ash-section-ivory" id="contact-cta">
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
                <i className="fa fa-headset"></i> Connect With Us
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', margin: '0.35rem 0 0.75rem 0' }}>
                Invite an Awareness Session or Collaborate With Us
              </h2>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                Reach out through our official online inquiry page for school awareness camps, digital wellness book sessions, teacher training workshops, CSR partnerships, or charitable support.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="ash-btn ash-btn-primary">
                <i className="fa fa-envelope"></i>
                <span>Open Contact Form</span>
              </Link>
              {SHOW_PUBLIC_UNVERIFIED_CONTACTS ? (
                <a href={PENDING_VERIFICATION_CONTACTS.phoneHref} className="ash-btn ash-btn-outline">
                  <i className="fa fa-phone"></i>
                  <span>Call {PENDING_VERIFICATION_CONTACTS.phone}</span>
                </a>
              ) : (
                <Link href="/awareness-programs" className="ash-btn ash-btn-outline">
                  <i className="fa fa-lightbulb"></i>
                  <span>Awareness Programmes</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
