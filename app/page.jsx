'use client';

import React, { useState, useEffect, useRef } from 'react';

// Initiative dynamic data for detail modal
const INITIATIVES_DATA = {
  education: {
    title: 'Education for Every Child',
    tag: 'Primary & Secondary Education',
    image: '/images/init_education.jpg',
    lead: 'Breaking the cycle of generational poverty begins with continuous, quality learning opportunities for every girl and boy.',
    desc: 'Our educational programs focus on bridging critical learning gaps in government and village schools. We provide supplementary remedial classes, distribute essential curriculum books, notebooks, and learning kits, and facilitate interactive digital classrooms where rural children can discover the joy of discovery.',
    goals: [
      'Remedial evening tutoring in underserved village clusters',
      'Distribution of essential study materials and uniforms',
      'Digital literacy basics and library corners',
      'Parental sensitization to prevent early school dropout',
    ],
  },
  healthcare: {
    title: 'Healthcare & Wellness Camps',
    tag: 'Preventive & Primary Care',
    image: '/images/init_healthcare.jpg',
    lead: 'Empowering communities through accessible medical consultations, diagnostic screenings, and preventive health guidance.',
    desc: 'Many underserved rural families lack easy access to primary medical centers. Our mobile medical camps bring certified doctors, pediatricians, and nurses directly to village doorsteps, providing general checkups, anemia screening, vision tests, and free basic medicines.',
    goals: [
      'Regular free general checkup and pediatric screening camps',
      'Maternal and adolescent health guidance and hygiene kits',
      'Nutritional monitoring and micronutrient guidance',
      'Referral pathways to district health institutions',
    ],
  },
  women: {
    title: 'Women Empowerment & Skill Building',
    tag: 'Self-Reliance & Livelihood',
    image: '/images/init_women.jpg',
    lead: 'When a woman is empowered, she uplifts her entire household and sets a new precedent for her community.',
    desc: 'We facilitate practical vocational training centers where rural and semi-urban women learn tailoring, embroidery, textile crafts, and digital financial management. Through Self-Help Groups (SHGs), participants receive peer mentoring, basic accounting skills, and access to fair market linkages.',
    goals: [
      'Certificate courses in tailoring, sewing, and artisanal crafts',
      'Financial literacy and banking enablement for women',
      'Formation and mentorship of Self-Help Groups (SHGs)',
      'Market linkage workshops to sell hand-crafted goods',
    ],
  },
  'child-welfare': {
    title: 'Child Welfare & Protection',
    tag: 'Safe & Nurturing Environments',
    image: '/images/init_child_welfare.jpg',
    lead: 'Every child deserves a secure childhood filled with warmth, play, emotional nourishment, and zero fear.',
    desc: 'We support local community spaces where children can learn creatively after school hours, participate in arts and crafts, sports, and life-skills workshops. We actively advocate against child labor and foster child protection committees comprising village elders and educators.',
    goals: [
      'Safe community learning hubs with recreational spaces',
      'Child rights awareness campaigns and community protection',
      'Nutrition reinforcement and emotional well-being mentorship',
      'Extracurricular arts, music, and sports engagement',
    ],
  },
  community: {
    title: 'Sustainable Community Development',
    tag: 'Grassroots Resilience',
    image: '/images/init_community.jpg',
    lead: 'Building self-sustaining, clean, and green communities through shared collective action.',
    desc: 'True empowerment occurs when local communities take active ownership of their environment and common assets. We facilitate community tree plantations, clean drinking water awareness, solar lighting for village study halls, and waste management practices.',
    goals: [
      'Native sapling plantation drives and green cover expansion',
      'Safe drinking water purification awareness',
      'Community clean-up and sanitation awareness sessions',
      'Solar lanterns and energy solutions for study centers',
    ],
  },
};

const GALLERY_ITEMS = [
  { id: 1, category: 'education', src: '/images/hero_community_hope.jpg', title: 'Village Learning Hub', tag: 'Education' },
  { id: 2, category: 'education', src: '/images/about_mentorship.jpg', title: 'Mentorship Under the Banyan', tag: 'Mentorship' },
  { id: 3, category: 'education', src: '/images/init_education.jpg', title: 'Classroom Discovery', tag: 'Education' },
  { id: 4, category: 'healthcare', src: '/images/init_healthcare.jpg', title: 'Compassionate Health Camp', tag: 'Healthcare' },
  { id: 5, category: 'community', src: '/images/init_women.jpg', title: 'Vocational Skill Center', tag: 'Livelihood' },
  { id: 6, category: 'education', src: '/images/init_child_welfare.jpg', title: 'Creative Children Workshop', tag: 'Child Welfare' },
  { id: 7, category: 'community', src: '/images/init_community.jpg', title: 'Community Sapling Drive', tag: 'Community' },
  { id: 8, category: 'volunteers', src: '/images/gallery_volunteers.jpg', title: 'Youth Volunteer Network', tag: 'Volunteers' },
];

export default function HomePage() {
  // Navigation & UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'donation' | 'volunteer' | 'partner' | 'story' | 'privacy' | 'terms' | 'initiative'
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);

  // Gallery filter
  const [galleryFilter, setGalleryFilter] = useState('all');

  // Toast notification
  const [toast, setToast] = useState(null);

  // Form states
  const [customAmount, setCustomAmount] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Scroll listener for sticky navbar & active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'initiatives', 'impact', 'featured', 'gallery', 'get-involved', 'stories', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (activeModal || lightboxData || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModal, lightboxData, mobileMenuOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setLightboxData(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openInitiativeModal = (key) => {
    setSelectedInitiative(INITIATIVES_DATA[key]);
    setActiveModal('initiative');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      e.target.reset();
      showToast('Thank you! Your message has been received by Aashraya Foundation. We will connect with you shortly.');
    }, 900);
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setCustomAmount('');
    setSelectedTier('');
    showToast('Thank you for your contribution pledge! Our outreach team will share official trust documentation and credentials.');
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    showToast('Thank you for applying to volunteer with Aashraya Foundation! Welcome to the movement.');
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    showToast('Partnership inquiry received! Our institutional collaboration team will reach out with the proposal docket.');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    showToast('Subscribed! You will receive our quarterly Aashraya Foundation impact bulletin.');
  };

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <>
      {/* Top Notice & Trust Bar */}
      <div className="top-notice-bar">
        <div className="ash-container">
          <div className="top-notice-content">
            <div className="top-contact-info">
              <a href="mailto:contact@aashrayafoundation.org.in" title="Official Registered Email">
                <i className="fa fa-envelope" style={{ color: '#C69B55' }}></i> contact@aashrayafoundation.org.in [Placeholder]
              </a>
              <a href="tel:+919876543210" title="Contact Helpline">
                <i className="fa fa-phone" style={{ color: '#C69B55' }}></i> +91 98765 43210 [Placeholder]
              </a>
            </div>
            <div className="top-trust-badge">
              <i className="fa fa-shield-alt"></i> Non-Governmental Organization / Registered Charitable Trust &bull; India
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`ash-navbar ${isScrolled ? 'scrolled' : ''}`} id="ashNavbar">
        <div className="ash-container">
          <div className="navbar-inner">
            <a href="#home" className="navbar-brand-link" aria-label="Aashraya Foundation Home">
              <img src="/logo-aashraya.svg" alt="Aashraya Foundation Logo" />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links-desktop">
              <li><a href="#home" className={`nav-item-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
              <li><a href="#about" className={`nav-item-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a></li>
              <li><a href="#initiatives" className={`nav-item-link ${activeSection === 'initiatives' ? 'active' : ''}`}>Our Initiatives</a></li>
              <li><a href="#impact" className={`nav-item-link ${activeSection === 'impact' ? 'active' : ''}`}>Our Impact</a></li>
              <li><a href="#gallery" className={`nav-item-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a></li>
              <li><a href="#get-involved" className={`nav-item-link ${activeSection === 'get-involved' ? 'active' : ''}`}>Get Involved</a></li>
              <li><a href="#contact" className={`nav-item-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
            </ul>

            {/* Navbar Actions */}
            <div className="navbar-actions">
              <button
                type="button"
                className="ash-btn ash-btn-gold ash-btn-sm"
                onClick={() => setActiveModal('donation')}
                id="navDonateBtn"
              >
                <i className="fa fa-heart"></i> Donate Now
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <aside className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li><a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#initiatives" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Our Initiatives</a></li>
            <li><a href="#impact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Our Impact</a></li>
            <li><a href="#gallery" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#get-involved" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Get Involved</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <div style={{ marginTop: '2rem' }}>
          <button
            type="button"
            className="ash-btn ash-btn-gold"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveModal('donation');
            }}
          >
            <i className="fa fa-heart"></i> Support Our Mission
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
            Aashraya Foundation &bull; India
          </p>
        </div>
      </aside>

      {/* ==========================================================================
           HERO SECTION
           ========================================================================== */}
      <section className="hero-section" id="home">
        <div className="ash-container">
          <div className="hero-content reveal-on-scroll">
            <div className="hero-pill">
              <span className="hero-pill-badge">Grassroots NGO</span>
              <span>Empowering Lives. Building Hope.</span>
            </div>

            <h1 className="hero-title">
              Together, We Can Create a Better Tomorrow.
            </h1>

            <p className="hero-subheading">
              Empowering communities through education, compassion, and meaningful action. Every small step brings us closer to a brighter, more inclusive future.
            </p>

            <div className="hero-buttons">
              <a href="#initiatives" className="ash-btn ash-btn-gold">
                <span>Explore Our Work</span>
                <i className="fa fa-arrow-right"></i>
              </a>
              <button
                type="button"
                className="ash-btn ash-btn-outline"
                onClick={() => setActiveModal('donation')}
              >
                <i className="fa fa-hands-helping"></i>
                <span>Support Our Mission</span>
              </button>
            </div>

            {/* Glassmorphic stats */}
            <div className="hero-glass-stats">
              <div className="glass-stat-item">
                <div className="glass-stat-icon"><i className="fa fa-graduation-cap"></i></div>
                <div>
                  <div className="glass-stat-label">Focus Areas</div>
                  <div className="glass-stat-value">Education &amp; Care</div>
                </div>
              </div>
              <div className="glass-stat-item">
                <div className="glass-stat-icon"><i className="fa fa-map-marker-alt"></i></div>
                <div>
                  <div className="glass-stat-label">Grassroots Reach</div>
                  <div className="glass-stat-value">Rural &amp; Urban Hubs</div>
                </div>
              </div>
              <div className="glass-stat-item">
                <div className="glass-stat-icon"><i className="fa fa-hand-holding-heart"></i></div>
                <div>
                  <div className="glass-stat-label">Philosophy</div>
                  <div className="glass-stat-value">100% Compassion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           ABOUT AASHRAYA FOUNDATION
           ========================================================================== */}
      <section className="ash-section ash-section-ivory" id="about">
        <div className="ash-container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal-on-scroll">
              <div className="about-image-accent-border"></div>
              <div className="about-image-card">
                <img src="/images/about_mentorship.jpg" alt="Aashraya Foundation Community Mentorship in Village" />
              </div>
              <div className="about-floating-badge">
                <h4>Grassroots Upliftment</h4>
                <p>Empowering children and women through continuous community-based mentoring.</p>
              </div>
            </div>

            <div className="about-content-col reveal-on-scroll">
              <div className="section-eyebrow">
                <i className="fa fa-seedling"></i> About Aashraya Foundation
              </div>
              <h2 className="section-title">
                Rooted in Compassion. Driven by Purpose.
              </h2>
              <p className="about-text-lead">
                Aashraya Foundation is a proposed charitable trust established with an enduring dedication to grassroots social transformation in India. We believe every child, woman, and vulnerable individual possesses the inherent right to live with dignity, self-sufficiency, and boundless opportunity.
              </p>
              <p>
                Rather than brief relief work, our initiatives focus on sustainable community architecture: supporting educational access, nurturing preventive rural healthcare, fostering women's economic independence, and preserving child welfare.
              </p>

              <div className="mission-vision-boxes">
                <div className="mv-card">
                  <div className="mv-icon"><i className="fa fa-compass"></i></div>
                  <h3>Our Mission</h3>
                  <p>Creating meaningful opportunities for underserved communities through education, healthcare, empowerment, and sustainable development.</p>
                </div>

                <div className="mv-card">
                  <div className="mv-icon"><i className="fa fa-eye"></i></div>
                  <h3>Our Vision</h3>
                  <p>A compassionate and inclusive society where every individual has access to dignity, opportunity, and a better future.</p>
                </div>
              </div>

              <div className="values-wrap">
                <div className="values-title">Our Guiding Values</div>
                <div className="values-grid">
                  <div className="value-pill"><i className="fa fa-heart"></i> Compassion</div>
                  <div className="value-pill"><i className="fa fa-balance-scale"></i> Integrity</div>
                  <div className="value-pill"><i className="fa fa-equals"></i> Equality</div>
                  <div className="value-pill"><i className="fa fa-bolt"></i> Empowerment</div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="ash-btn ash-btn-primary"
                  onClick={() => setActiveModal('story')}
                >
                  <span>Discover Our Story</span>
                  <i className="fa fa-book-reader"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           KEY INITIATIVES (5 CARDS GRID)
           ========================================================================== */}
      <section className="ash-section ash-section-sand" id="initiatives">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-hands"></i> Core Focus Areas
            </div>
            <h2 className="section-title">
              Creating Change Where It Matters Most
            </h2>
            <p className="section-subtitle">
              Holistic, community-centered programs designed to address core challenges and foster sustainable independence across underserved regions.
            </p>
          </div>

          <div className="initiatives-grid">
            {/* Card 1 */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_education.jpg" alt="Children reading in school" loading="lazy" />
                <span className="initiative-badge">Education</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">1. Education for Every Child</h3>
                <p className="initiative-desc">
                  Supporting access to quality education, learning resources, and educational opportunities for underserved children across rural and semi-urban learning hubs.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => openInitiativeModal('education')}
                    aria-label="Learn more about Education for Every Child"
                  >
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_healthcare.jpg" alt="Doctor conducting health checkup" loading="lazy" />
                <span className="initiative-badge">Healthcare</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">2. Healthcare &amp; Wellness</h3>
                <p className="initiative-desc">
                  Promoting health awareness, preventive care, diagnostic medical screening, and improved access to essential healthcare services for remote families.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => openInitiativeModal('healthcare')}
                    aria-label="Learn more about Healthcare and Wellness"
                  >
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_women.jpg" alt="Women vocational training center" loading="lazy" />
                <span className="initiative-badge">Livelihood</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">3. Women Empowerment</h3>
                <p className="initiative-desc">
                  Encouraging financial independence through vocational skill development, tailoring, craft incubation, and self-help group mentorship.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => openInitiativeModal('women')}
                    aria-label="Learn more about Women Empowerment"
                  >
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Card 4 */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_child_welfare.jpg" alt="Children drawing and smiling" loading="lazy" />
                <span className="initiative-badge">Child Rights</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">4. Child Welfare</h3>
                <p className="initiative-desc">
                  Supporting safe, nurturing environments where children can learn, grow, play, and thrive free from exploitation and neglect.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => openInitiativeModal('child-welfare')}
                    aria-label="Learn more about Child Welfare"
                  >
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* Card 5 */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_community.jpg" alt="Villagers planting trees together" loading="lazy" />
                <span className="initiative-badge">Sustainability</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">5. Community Development</h3>
                <p className="initiative-desc">
                  Strengthening communities through ecological sustainability, green tree plantations, clean water awareness, and inclusive local development.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => openInitiativeModal('community')}
                    aria-label="Learn more about Community Development"
                  >
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           OUR IMPACT / COMMITMENT & TARGETS
           ========================================================================== */}
      <section className="ash-section ash-section-ivory" id="impact">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-chart-line"></i> Our Commitment &amp; Targets
            </div>
            <h2 className="section-title">
              Every Action Has the Power to Make a Difference
            </h2>
            <p className="section-subtitle">
              Driven by ethical stewardship and transparent benchmarks. The figures below outline our proposed operational outreach targets and active program commitments.
            </p>
          </div>

          <div className="impact-stats-grid">
            <div className="stat-box reveal-on-scroll">
              <div className="stat-icon"><i className="fa fa-users"></i></div>
              <div className="stat-number">50,000+</div>
              <div className="stat-title">Lives Impacted</div>
              <div className="stat-meta">[Proposed Outreach Target]</div>
            </div>

            <div className="stat-box reveal-on-scroll">
              <div className="stat-icon"><i className="fa fa-city"></i></div>
              <div className="stat-number">120+</div>
              <div className="stat-title">Communities Reached</div>
              <div className="stat-meta">[Active Cluster Network]</div>
            </div>

            <div className="stat-box reveal-on-scroll">
              <div className="stat-icon"><i className="fa fa-hands-helping"></i></div>
              <div className="stat-number">1,500+</div>
              <div className="stat-title">Volunteers Engaged</div>
              <div className="stat-meta">[Enrolled Community Advocates]</div>
            </div>

            <div className="stat-box reveal-on-scroll">
              <div className="stat-icon"><i className="fa fa-project-diagram"></i></div>
              <div className="stat-number">25+</div>
              <div className="stat-title">Initiatives Supported</div>
              <div className="stat-meta">[Grassroots Programs]</div>
            </div>
          </div>

          <div className="impact-disclaimer-card reveal-on-scroll">
            <i className="fa fa-info-circle"></i>
            <p>
              <strong>Transparency Disclosure:</strong> As a dedicated charitable organization, Aashraya Foundation holds transparency as a foundational pillar. All figures represent projected benchmarks and ongoing capacity commitments. We do not display unverified achievements as concluded results.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           FEATURED INITIATIVES
           ========================================================================== */}
      <section className="ash-section ash-section-sand" id="featured">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-star"></i> Flagship Programs
            </div>
            <h2 className="section-title">
              Featured Community Interventions
            </h2>
            <p className="section-subtitle">
              An editorial look into our proposed grassroots programs designed for enduring, measurable social transformation.
            </p>
          </div>

          <div className="featured-programs-list">
            {/* Program 1 */}
            <div className="featured-program-item reveal-on-scroll">
              <div className="program-img-box">
                <img src="/images/init_education.jpg" alt="Education Support Program" loading="lazy" />
              </div>
              <div className="program-info-box">
                <div className="program-status-pill">
                  <i className="fa fa-clipboard-check"></i> Proposed Initiative &bull; Active Planning
                </div>
                <h3 className="program-title">Education Support Program</h3>
                <p className="program-summary">
                  Ensuring uninterrupted academic learning for first-generation school-goers through after-school remedial learning circles, educational kits, and dedicated youth tutors.
                </p>
                <ul className="program-features-list">
                  <li><i className="fa fa-check"></i> Remedial Evening Tutoring</li>
                  <li><i className="fa fa-check"></i> Textbook &amp; Stationery Kits</li>
                  <li><i className="fa fa-check"></i> Foundational Numeracy &amp; Reading</li>
                  <li><i className="fa fa-check"></i> Dropout Prevention Tracking</li>
                </ul>
                <div>
                  <button
                    type="button"
                    className="ash-btn ash-btn-primary ash-btn-sm"
                    onClick={() => openInitiativeModal('education')}
                  >
                    View Program Details <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="featured-program-item reverse reveal-on-scroll">
              <div className="program-img-box">
                <img src="/images/init_healthcare.jpg" alt="Community Health Awareness" loading="lazy" />
              </div>
              <div className="program-info-box">
                <div className="program-status-pill">
                  <i className="fa fa-clipboard-check"></i> Proposed Initiative &bull; Active Planning
                </div>
                <h3 className="program-title">Community Health Awareness</h3>
                <p className="program-summary">
                  Bridging the last-mile medical divide by organizing mobile health camps, periodic pediatric growth tracking, and adolescent hygiene guidance sessions.
                </p>
                <ul className="program-features-list">
                  <li><i className="fa fa-check"></i> General Health &amp; Eye Checkups</li>
                  <li><i className="fa fa-check"></i> Maternal Nutrition Screening</li>
                  <li><i className="fa fa-check"></i> Free Basic Medicines &amp; Vitamins</li>
                  <li><i className="fa fa-check"></i> Water-borne Disease Prevention</li>
                </ul>
                <div>
                  <button
                    type="button"
                    className="ash-btn ash-btn-primary ash-btn-sm"
                    onClick={() => openInitiativeModal('healthcare')}
                  >
                    View Program Details <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="featured-program-item reveal-on-scroll">
              <div className="program-img-box">
                <img src="/images/init_women.jpg" alt="Women Skill Development" loading="lazy" />
              </div>
              <div className="program-info-box">
                <div className="program-status-pill">
                  <i className="fa fa-clipboard-check"></i> Proposed Initiative &bull; Active Planning
                </div>
                <h3 className="program-title">Women Skill Development</h3>
                <p className="program-summary">
                  Equipping women with marketable vocational skills in sewing, handloom textile finishing, and digital financial management to nurture independent livelihoods.
                </p>
                <ul className="program-features-list">
                  <li><i className="fa fa-check"></i> Tailoring &amp; Embroidery Courses</li>
                  <li><i className="fa fa-check"></i> Self-Help Group (SHG) Incubation</li>
                  <li><i className="fa fa-check"></i> Banking &amp; Financial Literacy</li>
                  <li><i className="fa fa-check"></i> Fair Craft Market Linkages</li>
                </ul>
                <div>
                  <button
                    type="button"
                    className="ash-btn ash-btn-primary ash-btn-sm"
                    onClick={() => openInitiativeModal('women')}
                  >
                    View Program Details <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Program 4 */}
            <div className="featured-program-item reverse reveal-on-scroll">
              <div className="program-img-box">
                <img src="/images/gallery_nutrition.jpg" alt="Food & Essential Supplies Support" loading="lazy" />
              </div>
              <div className="program-info-box">
                <div className="program-status-pill">
                  <i className="fa fa-clipboard-check"></i> Proposed Initiative &bull; Active Planning
                </div>
                <h3 className="program-title">Food &amp; Essential Supplies Support</h3>
                <p className="program-summary">
                  Distributing wholesome nutritional rations and essential hygiene kits to vulnerable elderly, single mothers, and families experiencing sudden hardship.
                </p>
                <ul className="program-features-list">
                  <li><i className="fa fa-check"></i> Nutritious Dry Ration Kits</li>
                  <li><i className="fa fa-check"></i> Vulnerable Household Identification</li>
                  <li><i className="fa fa-check"></i> Community Grain Bank Partnerships</li>
                  <li><i className="fa fa-check"></i> Emergency Seasonal Relief Packs</li>
                </ul>
                <div>
                  <button
                    type="button"
                    className="ash-btn ash-btn-primary ash-btn-sm"
                    onClick={() => setActiveModal('donation')}
                  >
                    Support This Cause <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           GALLERY SECTION
           ========================================================================== */}
      <section className="ash-section ash-section-ivory" id="gallery">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-camera-retro"></i> Visual Chronicles
            </div>
            <h2 className="section-title">
              Moments of Hope. Stories of Change.
            </h2>
            <p className="section-subtitle">
              Authentic glimpses of community unity, educational milestones, and ground-level engagement across India.
            </p>
          </div>

          <div className="gallery-filters reveal-on-scroll">
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
            >
              All Moments
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'education' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('education')}
            >
              Education
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'healthcare' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('healthcare')}
            >
              Healthcare
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'community' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('community')}
            >
              Community
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'volunteers' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('volunteers')}
            >
              Volunteers
            </button>
          </div>

          <div className="gallery-masonry-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item reveal-on-scroll"
                onClick={() => setLightboxData(item)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
           GET INVOLVED
           ========================================================================== */}
      <section className="ash-section ash-section-sand" id="get-involved">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-hand-holding-heart"></i> Get Involved
            </div>
            <h2 className="section-title">
              Be the Reason Someone Smiles Today.
            </h2>
            <p className="section-subtitle">
              Sustainable social change requires collective action. Discover the multiple pathways you can contribute your heart, skills, or resources to Aashraya Foundation.
            </p>
          </div>

          <div className="get-involved-grid">
            {/* Card 1: Donate */}
            <div className="involve-card featured reveal-on-scroll">
              <div className="involve-badge-top">Direct Impact</div>
              <div className="involve-icon-box">
                <i className="fa fa-hand-holding-usd"></i>
              </div>
              <h3>Donate</h3>
              <p>
                Support meaningful community initiatives. Your contributions help fund student education kits, primary healthcare supplies, and critical food relief.
              </p>
              <button
                type="button"
                className="ash-btn ash-btn-gold"
                style={{ width: '100%' }}
                onClick={() => setActiveModal('donation')}
              >
                <i className="fa fa-heart"></i> Make a Contribution
              </button>
            </div>

            {/* Card 2: Volunteer */}
            <div className="involve-card reveal-on-scroll">
              <div className="involve-icon-box">
                <i className="fa fa-user-friends"></i>
              </div>
              <h3>Volunteer</h3>
              <p>
                Contribute your time, skills, and compassion. Be part of our on-ground education drives, weekend reading clubs, health camps, and creative workshops.
              </p>
              <button
                type="button"
                className="ash-btn ash-btn-outline-dark"
                style={{ width: '100%' }}
                onClick={() => setActiveModal('volunteer')}
              >
                <i className="fa fa-user-plus"></i> Join as Volunteer
              </button>
            </div>

            {/* Card 3: Partner */}
            <div className="involve-card reveal-on-scroll">
              <div className="involve-icon-box">
                <i className="fa fa-handshake"></i>
              </div>
              <h3>Partner With Us</h3>
              <p>
                Explore opportunities to collaborate for social good. Partner through Corporate Social Responsibility (CSR) grants, institutional alliances, and joint initiatives.
              </p>
              <button
                type="button"
                className="ash-btn ash-btn-outline-dark"
                style={{ width: '100%' }}
                onClick={() => setActiveModal('partner')}
              >
                <i className="fa fa-briefcase"></i> CSR Collaboration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           TESTIMONIALS / STORIES
           ========================================================================== */}
      <section className="ash-section ash-section-ivory" id="stories">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-comment-dots"></i> Testimonials &amp; Voices
            </div>
            <h2 className="section-title">
              Stories That Inspire Change
            </h2>
            <p className="section-subtitle">
              Reflections from beneficiary families, dedicated volunteers, and medical partners collaborating with Aashraya Foundation.
            </p>
          </div>

          <div className="stories-grid">
            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;The vocational skill center has brought a newfound dignity and financial confidence to over 30 women in our village cluster. Being able to sew and earn independently changed how our families look at our daughters&apos; futures.&rdquo;
                </p>
              </div>
              <div className="story-author-box">
                <div className="author-avatar">SD</div>
                <div className="author-info">
                  <h4>Sunita Devi</h4>
                  <p>Self-Help Group Coordinator &bull; Rural Outreach</p>
                </div>
              </div>
            </div>

            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;Volunteering for the weekend learning sessions taught me that even an hour of dedicated mentorship can completely reignite a child&apos;s curiosity for mathematics and reading. The children&apos;s energy is infectious.&rdquo;
                </p>
              </div>
              <div className="story-author-box">
                <div className="author-avatar">RS</div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Weekend Learning Mentor &bull; Youth Volunteer</p>
                </div>
              </div>
            </div>

            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;Preventive rural health screening catches conditions early. Aashraya Foundation’s community health camps bridge a crucial gap between remote households and quality primary clinical advice.&rdquo;
                </p>
              </div>
              <div className="story-author-box">
                <div className="author-avatar">AR</div>
                <div className="author-info">
                  <h4>Dr. Anita Rao</h4>
                  <p>Visiting Medical Consultant &bull; Preventive Care</p>
                </div>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
            *Representative community narratives reflecting organizational program targets and field interactions.
          </p>
        </div>
      </section>

      {/* ==========================================================================
           CONTACT SECTION
           ========================================================================== */}
      <section className="ash-section ash-section-sand" id="contact">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-envelope-open-text"></i> Reach Out To Us
            </div>
            <h2 className="section-title">
              Let&apos;s Make a Difference Together.
            </h2>
            <p className="section-subtitle">
              Have questions about our initiatives, want to partner, or wish to visit a community center? Reach out to our dedicated team.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-card reveal-on-scroll">
              <h3 className="contact-form-title">Send Us a Message</h3>
              <p className="contact-form-desc">
                Fill in the details below and an Aashraya Foundation coordinator will respond within 24-48 business hours.
              </p>

              <form onSubmit={handleContactSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contactName" className="form-label">Full Name *</label>
                    <input type="text" id="contactName" className="form-input" placeholder="e.g. Meera Raman" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail" className="form-label">Email Address *</label>
                    <input type="email" id="contactEmail" className="form-input" placeholder="e.g. meera@example.com" required />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contactPhone" className="form-label">Phone Number</label>
                    <input type="tel" id="contactPhone" className="form-input" placeholder="e.g. +91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactSubject" className="form-label">Subject</label>
                    <select id="contactSubject" className="form-select">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering">Volunteering Opportunity</option>
                      <option value="CSR Partnership">CSR &amp; Corporate Partnership</option>
                      <option value="Donation Inquiry">Donation &amp; Support Inquiry</option>
                      <option value="Media & Outreach">Media &amp; Community Outreach</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">Your Message *</label>
                  <textarea id="contactMessage" className="form-textarea" placeholder="How would you like to collaborate with or support Aashraya Foundation?" required></textarea>
                </div>

                <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%' }} disabled={contactSubmitting}>
                  {contactSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin"></i> Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="contact-info-col reveal-on-scroll">
              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-envelope"></i></div>
                <div className="info-item-text">
                  <h4>Official Email</h4>
                  <p><a href="mailto:contact@aashrayafoundation.org.in">contact@aashrayafoundation.org.in</a></p>
                  <p style={{ fontSize: '0.75rem', color: '#8BAF96' }}>[Official Registered Inquiry Mailbox - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-phone-alt"></i></div>
                <div className="info-item-text">
                  <h4>Helpline &amp; Coordination</h4>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  <p style={{ fontSize: '0.75rem', color: '#8BAF96' }}>[Community Desk Phone - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-map-marked-alt"></i></div>
                <div className="info-item-text">
                  <h4>Registered Office</h4>
                  <p>Aashraya Foundation, 14 Institutional Area, Sector 5, New Delhi - 110001, India</p>
                  <p style={{ fontSize: '0.75rem', color: '#8BAF96' }}>[Registered Head Office - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-clock"></i></div>
                <div className="info-item-text">
                  <h4>Operating Hours</h4>
                  <p>Monday &ndash; Saturday: 9:30 AM &ndash; 6:00 PM IST</p>
                  <p style={{ fontSize: '0.75rem', color: '#8BAF96' }}>Field centers operate on extended weekend schedules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           FOOTER
           ========================================================================== */}
      <footer className="ash-footer">
        <div className="ash-container">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <a href="#home" className="footer-brand-logo">
                <img src="/logo-aashraya.svg" alt="Aashraya Foundation" />
              </a>
              <p className="footer-mission-text">
                Aashraya Foundation is a registered Indian non-governmental organization and charitable trust dedicated to empowering underserved communities through education, healthcare, women&apos;s self-reliance, and sustainable grassroots development.
              </p>
              <div className="footer-social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Aashraya</a></li>
                <li><a href="#initiatives">Our Initiatives</a></li>
                <li><a href="#impact">Our Impact &amp; Targets</a></li>
                <li><a href="#gallery">Moments &amp; Gallery</a></li>
                <li><a href="#get-involved">Get Involved</a></li>
                <li><a href="#contact">Contact &amp; Visit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Our Initiatives</h4>
              <ul className="footer-links-list">
                <li><button type="button" onClick={() => openInitiativeModal('education')}>Education for Every Child</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('healthcare')}>Healthcare &amp; Wellness</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('women')}>Women Empowerment</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('child-welfare')}>Child Welfare</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('community')}>Community Development</button></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Stay Connected</h4>
              <p className="footer-newsletter-p">
                Subscribe to our quarterly impact newsletter to receive verified stories from the field.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form-inline">
                <input type="email" className="newsletter-input" placeholder="Your email address" required aria-label="Newsletter email" />
                <button type="submit" className="ash-btn ash-btn-gold ash-btn-sm" style={{ borderRadius: 'var(--radius-full)' }}>
                  Join
                </button>
              </form>
              <div style={{ marginTop: '1.5rem', fontSize: '0.775rem', color: 'rgba(250,248,242,0.6)' }}>
                <i className="fa fa-lock" style={{ color: '#C69B55' }}></i> We respect your privacy. No spam ever.
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              &copy; 2026 Aashraya Foundation. All Rights Reserved.
            </div>
            <div className="footer-bottom-links">
              <button type="button" onClick={() => setActiveModal('privacy')}>Privacy Policy</button>
              <button type="button" onClick={() => setActiveModal('terms')}>Terms &amp; Conditions</button>
              <button type="button" onClick={() => setActiveModal('story')}>Governance &amp; Trust Ethics</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================================================
           MODALS
           ========================================================================== */}

      {/* 1. Donation Modal */}
      {activeModal === 'donation' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-hand-holding-heart"></i></div>
            <h3 className="modal-title">Support Aashraya Foundation</h3>
            <p className="modal-subtitle">Empower lives and build hope in underserved communities.</p>

            <div className="modal-disclaimer-box">
              <i className="fa fa-info-circle"></i>
              <div>
                <strong>Informational Notice:</strong> Aashraya Foundation does not process live card/gateway payments without confirmed organizational verification and 80G tax clearance. Submit your pledge below and our team will furnish official trust verification credentials.
              </div>
            </div>

            <form onSubmit={handleDonationSubmit}>
              <div className="form-group">
                <label className="form-label">Select Support Tier</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {[
                    { label: '₹500 (Kit)', val: '500' },
                    { label: '₹1,500 (Month Care)', val: '1500' },
                    { label: '₹3,000 (Skill Training)', val: '3000' },
                    { label: '₹5,000 (Health Camp)', val: '5000' },
                  ].map((tier) => (
                    <button
                      key={tier.val}
                      type="button"
                      className="ash-btn ash-btn-outline-dark ash-btn-sm"
                      style={selectedTier === tier.val ? { backgroundColor: 'var(--color-primary)', color: '#fff' } : {}}
                      onClick={() => {
                        setSelectedTier(tier.val);
                        setCustomAmount(tier.val);
                      }}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Or enter custom amount in ₹"
                  min="100"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier('');
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input type="text" className="form-input" placeholder="Donor / Supporter Name" required />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-input" placeholder="Email for receipt & acknowledgment" required />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input type="tel" className="form-input" placeholder="+91 Phone Number" />
              </div>

              <button type="submit" className="ash-btn ash-btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
                <i className="fa fa-heart"></i> Submit Contribution Pledge
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Volunteer Modal */}
      {activeModal === 'volunteer' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-user-friends"></i></div>
            <h3 className="modal-title">Join As a Volunteer</h3>
            <p className="modal-subtitle">Contribute your time, skills, and energy to make an active difference.</p>

            <form onSubmit={handleVolunteerSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="Contact Number" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary Interest Area</label>
                <select className="form-select">
                  <option value="Child Education & Teaching">Child Education &amp; Teaching</option>
                  <option value="Health Camps & Nutrition">Healthcare Camps &amp; Nutrition</option>
                  <option value="Women Skill Training">Women Skill Training</option>
                  <option value="Tree Plantation & Clean Village">Tree Plantation &amp; Clean Village</option>
                  <option value="Content, Photography & Design">Content, Photography &amp; Design</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Location / City</label>
                <input type="text" className="form-input" placeholder="e.g. Delhi NCR, Bengaluru, Mumbai" />
              </div>

              <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <i className="fa fa-paper-plane"></i> Submit Volunteer Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Partner Modal */}
      {activeModal === 'partner' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-handshake"></i></div>
            <h3 className="modal-title">Partner With Aashraya Foundation</h3>
            <p className="modal-subtitle">Corporate Social Responsibility (CSR), Grants &amp; Institutional Alliances.</p>

            <form onSubmit={handlePartnerSubmit}>
              <div className="form-group">
                <label className="form-label">Organization / Company Name *</label>
                <input type="text" className="form-input" placeholder="Company or Foundation Name" required />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Representative Name *</label>
                  <input type="text" className="form-input" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Official Work Email *</label>
                  <input type="email" className="form-input" placeholder="corporate@company.com" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Collaboration Type</label>
                <select className="form-select">
                  <option value="CSR Grant">CSR Grant Partnership</option>
                  <option value="Employee Volunteering">Employee Volunteering Drive</option>
                  <option value="Educational Sponsorship">Direct Educational Sponsorship</option>
                  <option value="Healthcare Infrastructure">Healthcare Equipment / Medical Support</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Brief Partnership Objectives</label>
                <textarea className="form-textarea" placeholder="Describe your CSR focus or alignment areas"></textarea>
              </div>

              <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%' }}>
                <i className="fa fa-briefcase"></i> Submit Partnership Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. Initiative Detail Modal */}
      {activeModal === 'initiative' && selectedInitiative && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog wide">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="section-eyebrow">{selectedInitiative.tag}</span>
            </div>
            <h3 className="modal-title" style={{ fontSize: '2.1rem' }}>{selectedInitiative.title}</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', fontWeight: 500, marginBottom: '1.5rem' }}>
              {selectedInitiative.lead}
            </p>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', height: '260px' }}>
              <img src={selectedInitiative.image} alt={selectedInitiative.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
              {selectedInitiative.desc}
            </p>

            <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Key Intervention Objectives:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {selectedInitiative.goals.map((goal, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-check-circle" style={{ color: '#C69B55', marginRight: '8px' }}></i>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="ash-btn ash-btn-gold"
                onClick={() => setActiveModal('donation')}
              >
                <i className="fa fa-heart"></i> Support This Initiative
              </button>
              <button
                type="button"
                className="ash-btn ash-btn-outline-dark"
                onClick={() => setActiveModal('volunteer')}
              >
                Volunteer For This Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Story Modal */}
      {activeModal === 'story' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog wide">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-book-open"></i></div>
            <h3 className="modal-title">The Aashraya Foundation Story</h3>
            <p className="modal-subtitle">Empowering Lives. Building Hope.</p>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-muted)' }}>
              <p>
                <strong>Aashraya Foundation</strong> was conceived from a simple yet resolute understanding: sustainable community development cannot happen from afar. It requires sitting alongside children under village banyan trees, understanding the quiet aspirations of mothers seeking self-reliance, and enabling preventive health access before sickness destabilizes an entire household.
              </p>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '1.5rem' }}>Our Core Approach</h4>
              <p>
                Unlike fragmented charity interventions, Aashraya Foundation works through an interconnected four-pillar model:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                <li><strong>Foundational Education:</strong> Ensuring no child drops out of school due to lack of books, coaching, or basic guidance.</li>
                <li><strong>Preventive Healthcare:</strong> Delivering doorstep screening, anemia awareness, and maternal support.</li>
                <li><strong>Livelihood &amp; Dignity:</strong> Equipping rural women with vocational tailoring, craftsmanship, and financial independence.</li>
                <li><strong>Ecological Sustainability:</strong> Creating green village groves, sapling nurseries, and community water stewardship.</li>
              </ul>
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginTop: '1.5rem' }}>Governance &amp; Trust Ethics</h4>
              <p>
                We operate under uncompromising standards of financial accountability, zero tolerance for exaggerated marketing, and rigorous community consensus before any field center is initiated.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button
                type="button"
                className="ash-btn ash-btn-primary"
                onClick={() => setActiveModal('volunteer')}
              >
                Join Hands With Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Privacy Modal */}
      {activeModal === 'privacy' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <h3 className="modal-title">Privacy Policy</h3>
            <p className="modal-subtitle">Commitment to Data Dignity &amp; Privacy</p>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
              <p>Aashraya Foundation values the confidentiality and trust of our supporters, donors, volunteers, and website visitors.</p>
              <p>We do not sell, rent, or trade your personal information. Any information provided through contact forms, newsletter sign-ups, or volunteer inquiries is utilized exclusively for organizational communication and program updates.</p>
              <p>For questions regarding your data or to unsubscribe from bulletins, please email <a href="mailto:contact@aashrayafoundation.org.in">contact@aashrayafoundation.org.in</a>.</p>
            </div>
          </div>
        </div>
      )}

      {/* 7. Terms Modal */}
      {activeModal === 'terms' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <h3 className="modal-title">Terms &amp; Conditions</h3>
            <p className="modal-subtitle">Organizational Terms of Use</p>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
              <p>All materials, including text, photographs, and brand assets displayed on this website, are the intellectual property of Aashraya Foundation.</p>
              <p>Proposed initiatives, figures, and program frameworks are published for informational purposes and community collaboration. No financial transactions are finalized on this website without verified trust documentation.</p>
            </div>
          </div>
        </div>
      )}

      {/* 8. Lightbox Modal */}
      {lightboxData && (
        <div className="ash-lightbox-modal open" onClick={(e) => { if (e.target === e.currentTarget) setLightboxData(null); }}>
          <div className="lightbox-content-box">
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxData(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <div className="lightbox-img-wrap">
              <img src={lightboxData.src} alt={lightboxData.title} />
            </div>
            <div className="lightbox-caption-wrap">
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, color: '#C69B55' }}>
                  {lightboxData.tag}
                </span>
                <h4 style={{ fontSize: '1.35rem', margin: '0.25rem 0 0 0', color: '#174D3A', fontFamily: "'Playfair Display', serif" }}>
                  {lightboxData.title}
                </h4>
              </div>
              <button
                type="button"
                className="ash-btn ash-btn-gold ash-btn-sm"
                onClick={() => {
                  setLightboxData(null);
                  setActiveModal('donation');
                }}
              >
                <i className="fa fa-heart"></i> Support
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toast && (
        <div className="ash-toast-container">
          <div className={`ash-toast ${toast.type}`}>
            <i className={`fa ${toast.type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}`}></i>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </>
  );
}
