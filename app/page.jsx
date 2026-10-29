'use client';

import React, { useState, useEffect } from 'react';

// Comprehensive six focus areas data with programs and community benefits
const INITIATIVES_DATA = {
  awareness: {
    id: 'awareness',
    title: 'Social & Environmental Awareness',
    tag: 'Civic Responsibility & Ecology',
    heading: 'Building Awareness. Inspiring Responsibility.',
    image: '/images/init_awareness.jpg',
    lead: 'Promoting responsible citizenship, environmental protection, and positive social habits through educational campaigns and community participation.',
    desc: 'Sustainable social change begins at the grassroots when community members take conscious pride in public cleanliness, water conservation, road safety, and reducing plastic pollution. We work directly with neighborhood leaders, schools, and youth volunteers to lead high-impact public awareness campaigns.',
    programs: [
      {
        name: 'Swachh Bharat & Cleanliness Drives',
        items: [
          'Community cleanliness campaigns in neighborhoods and public markets',
          'Public sanitation and open-defecation prevention awareness',
          'Clean streets, village squares, and common public spaces',
          'Hygiene, segregation, and responsible waste management education',
        ],
      },
      {
        name: 'Save Water Campaigns',
        items: [
          'Water conservation awareness for households and schools',
          'Preventing urban and rural water wastage at source',
          'Responsible community usage and rainwater awareness',
          'Local water-saving and groundwater protection initiatives',
        ],
      },
      {
        name: 'Road Safety & Traffic Awareness',
        items: [
          'Traffic discipline and fundamental road safety rules',
          'Mandatory helmet and seatbelt compliance campaigns',
          'Safe driving practices and pedestrian safety awareness',
          'Interactive road safety workshops for students and commuters',
        ],
      },
      {
        name: 'Plastic-Free Environment',
        items: [
          'Reducing single-use plastics in daily community life',
          'Promoting durable cloth, jute, and reusable alternatives',
          'Plastic waste segregation and recycling awareness',
          'Cleanliness and litter-free public campaigns',
        ],
      },
    ],
    expectedBenefit: 'Fosters civic consciousness, reduces public health hazards and environmental degradation, conserves local water resources, and creates safer roads for students and families.',
  },
  education: {
    id: 'education',
    title: 'Education & Child Development',
    tag: 'Learning & Value Education',
    heading: 'Every Child Deserves a Better Future.',
    image: '/images/init_education.jpg',
    lead: 'Supporting underprivileged children through educational opportunities, learning infrastructure, life skills, and value-based awareness programs.',
    desc: 'Education is the single most enduring pathway out of generational hardship. Our initiatives empower children from economically disadvantaged families with remedial schooling, essential study materials, science and digital labs, etiquette training, and strong moral values.',
    programs: [
      {
        name: 'Education for Underprivileged Children',
        items: [
          'Educational assistance for children from disadvantaged families',
          'Distribution of school bags, textbooks, and learning materials',
          'Continuous tracking to prevent dropout and support school continuation',
        ],
      },
      {
        name: 'Free Education Initiatives',
        items: [
          'Free evening educational support and foundational coaching',
          'Community learning sessions under village mentors',
          'One-on-one academic mentoring and remedial tutoring',
        ],
      },
      {
        name: 'Educational Facilities Development',
        items: [
          'Supporting village school infrastructure and classroom upgrades',
          'Setting up science models and basic computer laboratories',
          'Curating reading libraries and learning corner facilities',
          'Providing essential educational resources and desks',
        ],
      },
      {
        name: 'Mobile Phone & Digital Awareness',
        items: [
          'Guidance on responsible smartphone usage for young learners',
          'Awareness about the harms of excessive screen time and gaming',
          'Online safety, cyber hygiene, and digital discipline',
          'Encouraging healthy reading and outdoor physical play habits',
        ],
      },
      {
        name: 'Cleanliness, Etiquette & Discipline',
        items: [
          'Personal hygiene, handwashing, and oral healthcare awareness',
          'Keeping classrooms, study desks, and surroundings clean',
          'Good manners, attentive listening, and respectful communication',
          'Cultivating positive daily routines and time management',
        ],
      },
      {
        name: 'Family Values & Respect',
        items: [
          'Instilling deep respect for parents, elders, and teachers',
          'Encouraging empathy, kindness, and peer support among students',
          'Building strong family bonds and community civic responsibility',
        ],
      },
    ],
    expectedBenefit: 'Improves school retention rates, fosters academic confidence in first-generation students, cultivates digital discipline, and nurtures well-mannered, responsible citizens.',
  },
  temple: {
    id: 'temple',
    title: 'Temple Development & Cultural Activities',
    tag: 'Heritage Preservation & Seva',
    heading: 'Preserving Heritage. Strengthening Communities.',
    image: '/images/init_temple.jpg',
    lead: 'Supporting the preservation of spiritual and cultural heritage through temple renovation, community events, and charitable service activities.',
    desc: 'Throughout Indian history, traditional temples have served as sacred centers of spiritual peace, community congregation, ethical education, and compassionate charity. We support the architectural preservation, cleanliness, cultural celebrations, and traditional Annadanam seva at heritage shrines.',
    programs: [
      {
        name: 'Temple Renovation & Development',
        items: [
          'Renovation and restoration of ancient and rural temple structures',
          'Maintenance, paving, and hygiene improvement of temple precincts',
          'Supporting essential pilgrim amenities, drinking water, and lighting',
        ],
      },
      {
        name: 'Cultural & Spiritual Events',
        items: [
          'Organizing uplifting community festivals and heritage celebrations',
          'Supporting traditional arts, devotional music, and cultural programs',
          'Mobilizing dedicated volunteer teams for crowd care and public events',
        ],
      },
      {
        name: 'Food Donation & Annadanam',
        items: [
          'Organizing structured Annadanam food distribution programs',
          'Providing freshly cooked, wholesome meals to pilgrims and underprivileged citizens',
          'Supporting permanent community food service and hunger relief initiatives',
        ],
      },
    ],
    expectedBenefit: 'Preserves cherished architectural and cultural heritage, nurtures community harmony and social cohesion, and ensures dignified nutrition through the noble tradition of Annadanam.',
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare & Medical Support',
    tag: 'Preventive Care & Clinical Camps',
    heading: 'Accessible Healthcare. Healthier Communities.',
    image: '/images/init_healthcare.jpg',
    lead: 'Improving access to preventive healthcare, basic medical screening, and community health awareness through organized medical initiatives.',
    desc: 'Quality primary healthcare should not be a privilege reserved only for urban centers. We bring qualified doctors, diagnostic screenings, preventive consultations, and voluntary blood donation drives directly to remote and underserved community doorsteps.',
    programs: [
      {
        name: 'Free Medical Camps',
        items: [
          'Comprehensive general health checkups in rural and slum clusters',
          'Primary consultations with licensed general physicians',
          'Preventive healthcare, sanitation, and nutritional counseling',
        ],
      },
      {
        name: 'Blood Donation Camps',
        items: [
          'Organizing voluntary blood donation drives across community centers',
          'Close coordination with authorized hospitals and certified blood banks',
          'Encouraging healthy eligible youth and donors to save lives',
        ],
      },
      {
        name: 'Diabetes & Blood Pressure Screening',
        items: [
          'Free blood glucose screening camps for early diabetes detection',
          'Hypertension and blood pressure monitoring for adults and seniors',
          'Dietary counseling and medical guidance for chronic condition management',
        ],
      },
      {
        name: 'Eye Checkup Camps',
        items: [
          'Basic vision testing and cataract screening for seniors',
          'Preventive eye care awareness for schoolchildren and workers',
          'Facilitating specialized referrals to partner ophthalmic hospitals',
        ],
      },
    ],
    expectedBenefit: 'Catches silent chronic diseases at early stages, prevents catastrophic healthcare spending for low-income households, and bolsters life-saving blood bank reserves.',
  },
  elderly: {
    id: 'elderly',
    title: 'Elderly Care & Social Welfare',
    tag: 'Senior Dignity & Compassion',
    heading: 'Care, Compassion & Dignity for Every Elder.',
    image: '/images/init_elderly.jpg',
    lead: 'Extending compassionate support to senior citizens, vulnerable individuals, and people living in old age homes.',
    desc: 'Our elders laid the foundations of our families and communities. When age, vulnerability, or financial hardship leaves them isolated, Anand Group Charitable Trust steps forward with food supplies, medical care, clothing, and the warm touch of compassionate companionship.',
    programs: [
      {
        name: 'Old Age Home Support',
        items: [
          'Regular nutritious food distribution and grocery supply support',
          'Provision of bed linens, hygiene essentials, and personal toiletries',
          'Warm seasonal clothing, shawls, and mobility assistance aids',
          'Heartwarming volunteer visits, listening circles, and emotional companionship',
        ],
      },
      {
        name: 'Food & Essential Donations',
        items: [
          'Nutritious meal packages for impoverished elderly and destitute individuals',
          'Monthly grocery and dry ration support for senior-headed households',
          'Emergency relief support during harsh winter and monsoon periods',
        ],
      },
      {
        name: 'Community Welfare Activities',
        items: [
          'Direct welfare support to disadvantaged and destitute individuals',
          'Grassroots community outreach to identify unserved vulnerable pockets',
          'Promoting civic empathy and encouraging youth to adopt elder-care values',
        ],
      },
    ],
    expectedBenefit: 'Combats loneliness and despair among seniors, provides guaranteed daily nutrition and clothing, and ensures elderly individuals live with the profound dignity they deserve.',
  },
  ashram: {
    id: 'ashram',
    title: 'Naadha Ashram Support',
    tag: 'Sanctuary & Loving Care',
    heading: 'A Place of Compassion, Care & Belonging.',
    image: '/images/init_ashram.jpg',
    lead: 'Extending compassionate support to Naadha Ashram through regular nutritional aid, daily essential supplies, healthcare assistance, and volunteer engagement.',
    desc: 'Naadha Ashram provides sanctuary, shelter, and peace to vulnerable individuals seeking care and belonging. Anand Group Charitable Trust proudly collaborates with Naadha Ashram to deliver consistent food supplies, hygiene items, seasonal clothing, and dedicated volunteer support.',
    programs: [
      {
        name: 'Food & Nutrition Support',
        items: [
          'Provision of daily wholesome grains, pulses, cooking oil, and vegetables',
          'Ensuring balanced, nutritious meals for all residents',
          'Special festive Annadanam meal services prepared with love and care',
        ],
      },
      {
        name: 'Daily Essential Supplies',
        items: [
          'Household hygiene kits, soaps, sanitizers, and cleaning necessities',
          'Comfortable bedding, blankets, bed linens, and mosquito nets',
          'Essential kitchen and maintenance provisions for the ashram premises',
        ],
      },
      {
        name: 'Clothing & Hygiene Assistance',
        items: [
          'Clean, comfortable seasonal clothing, kurtas, sarees, and sweaters',
          'Personal hygiene products and dignity kits for all residents',
          'Assisting with laundry supplies and daily cleanliness routines',
        ],
      },
      {
        name: 'Healthcare & Volunteer Engagement',
        items: [
          'Arranging basic medical consultations and regular health monitoring',
          'Providing prescribed daily medicines, supplements, and first-aid kits',
          'Coordinating volunteer companionship, devotional singing, and interactive sessions',
        ],
      },
    ],
    expectedBenefit: 'Provides an unbroken safety net of wholesome nourishment, hygienic living conditions, and genuine emotional warmth for all residents of Naadha Ashram.',
  },
};

// Curated authentic gallery items matching prompt categories
const GALLERY_ITEMS = [
  { id: 1, category: 'awareness', src: '/images/init_awareness.jpg', title: 'Clean Village Awareness Drive', tag: 'Awareness' },
  { id: 2, category: 'education', src: '/images/init_education.jpg', title: 'Underprivileged Children Classroom', tag: 'Education' },
  { id: 3, category: 'education', src: '/images/about_mentorship.jpg', title: 'Values & Academic Mentorship', tag: 'Education' },
  { id: 4, category: 'temple', src: '/images/init_temple.jpg', title: 'Heritage Temple Precinct Renovation', tag: 'Temple' },
  { id: 5, category: 'medical', src: '/images/init_healthcare.jpg', title: 'Free Community Health Screening', tag: 'Medical Camps' },
  { id: 6, category: 'elderly', src: '/images/init_elderly.jpg', title: 'Dignity & Care for Senior Citizens', tag: 'Elderly Care' },
  { id: 7, category: 'ashram', src: '/images/init_ashram.jpg', title: 'Daily Support at Naadha Ashram', tag: 'Naadha Ashram' },
  { id: 8, category: 'food', src: '/images/init_annadanam.jpg', title: 'Community Annadanam Food Distribution', tag: 'Food Donations' },
  { id: 9, category: 'awareness', src: '/images/gallery_volunteers.jpg', title: 'Youth Volunteers for Cleanliness', tag: 'Awareness' },
  { id: 10, category: 'education', src: '/images/hero_community_hope.jpg', title: 'Curiosity and Learning Opportunities', tag: 'Education' },
  { id: 11, category: 'food', src: '/images/gallery_nutrition.jpg', title: 'Wholesome Grocery Kit Support', tag: 'Food Donations' },
  { id: 12, category: 'elderly', src: '/images/init_child_welfare.jpg', title: 'Intergenerational Care & Life Skills', tag: 'Elderly Care' },
];

export default function HomePage() {
  // Navigation & UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'donation' | 'volunteer' | 'csr' | 'sponsor' | 'initiative' | 'story' | 'privacy' | 'terms'
  const [selectedInitiativeKey, setSelectedInitiativeKey] = useState('awareness');
  const [activeInitiativeTab, setActiveInitiativeTab] = useState('awareness');
  const [lightboxData, setLightboxData] = useState(null);

  // Gallery filter state
  const [galleryFilter, setGalleryFilter] = useState('all');

  // Toast notification
  const [toast, setToast] = useState(null);

  // Form handling states
  const [customAmount, setCustomAmount] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [donationTarget, setDonationTarget] = useState('All Initiatives');
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [csrSubmitting, setCsrSubmitting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Scroll listener for sticky navbar & active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'initiatives', 'ashram', 'impact', 'csr', 'gallery', 'get-involved', 'stories', 'contact'];
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
  }, [activeInitiativeTab, galleryFilter]);

  // Handle Initiative Modal opening
  const openInitiativeModal = (key) => {
    setSelectedInitiativeKey(key);
    setActiveModal('initiative');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      e.target.reset();
      showToast('Thank you! Your message has been received by Anand Group Charitable Trust. We will connect with you shortly.');
    }, 800);
  };

  const handleCsrSubmit = (e) => {
    e.preventDefault();
    setCsrSubmitting(true);
    setTimeout(() => {
      setCsrSubmitting(false);
      e.target.reset();
      setActiveModal(null);
      showToast('Thank you for your CSR partnership enquiry! Our institutional collaboration team will connect with your CSR office within 24-48 business hours.');
    }, 850);
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setCustomAmount('');
    setSelectedTier('');
    showToast('Thank you for your contribution pledge! Our trust coordinator will reach out with official verification details and credentials.');
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    showToast('Thank you for applying to volunteer with Anand Group Charitable Trust! Welcome to the movement.');
  };

  const handleSponsorSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    showToast('Thank you for your sponsorship enquiry! A coordinator will share project metrics and implementation schedules shortly.');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    showToast('Subscribed! You will receive our quarterly Anand Group Charitable Trust impact bulletin.');
  };

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  const selectedInit = INITIATIVES_DATA[selectedInitiativeKey] || INITIATIVES_DATA.awareness;
  const tabInit = INITIATIVES_DATA[activeInitiativeTab] || INITIATIVES_DATA.awareness;

  return (
    <>
      {/* Top Notice & Trust Bar */}
      <div className="top-notice-bar">
        <div className="ash-container">
          <div className="top-notice-content">
            <div className="top-contact-info">
              <a href="mailto:contact@anandgroupcharitabletrust.org.in" title="Official Registered Email">
                <i className="fa fa-envelope" style={{ color: '#0284C7' }}></i> contact@anandgroupcharitabletrust.org.in [Placeholder]
              </a>
              <a href="tel:+919876543210" title="Contact Helpline">
                <i className="fa fa-phone" style={{ color: '#0284C7' }}></i> +91 98765 43210 [Placeholder]
              </a>
            </div>
            <div className="top-trust-badge">
              <i className="fa fa-shield-alt"></i> Registered Indian Non-Governmental Organization &amp; Charitable Trust
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Pure White) */}
      <header className={`ash-navbar ${isScrolled ? 'scrolled' : ''}`} id="ashNavbar">
        <div className="ash-container">
          <div className="navbar-inner">
            <a href="#home" className="navbar-brand-link" aria-label="Anand Group Charitable Trust Home">
              <img src="/logo-anand-trust.svg" alt="Anand Group Charitable Trust Logo" />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links-desktop">
              <li><a href="#home" className={`nav-item-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
              <li><a href="#about" className={`nav-item-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a></li>
              <li><a href="#initiatives" className={`nav-item-link ${activeSection === 'initiatives' ? 'active' : ''}`}>Our Initiatives</a></li>
              <li><a href="#impact" className={`nav-item-link ${activeSection === 'impact' ? 'active' : ''}`}>Our Impact</a></li>
              <li><a href="#ashram" className={`nav-item-link ${activeSection === 'ashram' ? 'active' : ''}`}>Naadha Ashram</a></li>
              <li><a href="#gallery" className={`nav-item-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a></li>
              <li><a href="#csr" className={`nav-item-link ${activeSection === 'csr' ? 'active' : ''}`}>CSR Partnerships</a></li>
              <li><a href="#get-involved" className={`nav-item-link ${activeSection === 'get-involved' ? 'active' : ''}`}>Get Involved</a></li>
              <li><a href="#contact" className={`nav-item-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
            </ul>

            <div className="navbar-actions">
              <button
                type="button"
                className="ash-btn ash-btn-primary"
                onClick={() => {
                  setDonationTarget('All Initiatives');
                  setActiveModal('donation');
                }}
              >
                <i className="fa fa-heart"></i> Donate Now
              </button>

              <button
                type="button"
                className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <aside className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li><a href="#home" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#initiatives" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Our Initiatives</a></li>
            <li><a href="#impact" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Our Impact</a></li>
            <li><a href="#ashram" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Naadha Ashram Support</a></li>
            <li><a href="#gallery" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
            <li><a href="#csr" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>CSR Partnerships</a></li>
            <li><a href="#get-involved" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Get Involved</a></li>
            <li><a href="#contact" className="nav-item-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </nav>
        <div style={{ marginTop: '2rem' }}>
          <button
            type="button"
            className="ash-btn ash-btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              setDonationTarget('All Initiatives');
              setActiveModal('donation');
            }}
          >
            <i className="fa fa-heart"></i> Donate Now
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#4B5563', textAlign: 'center' }}>
            Anand Group Charitable Trust &bull; India
          </p>
        </div>
      </aside>

      {/* ==========================================================================
           1. HERO SECTION
           ========================================================================== */}
      <section className="hero-section" id="home">
        <div className="ash-container">
          <div className="hero-grid">
            {/* Left Column: Content */}
            <div className="hero-content reveal-on-scroll">
              <h1 className="hero-title">
                Together, We Build a Better Tomorrow.
              </h1>

              <p className="hero-subheading">
                Empowering communities through education, social awareness, healthcare, cultural preservation, and compassionate service. Creating meaningful change, one initiative at a time.
              </p>

              <div className="hero-buttons">
                <a href="#initiatives" className="ash-btn ash-btn-primary">
                  <span>Explore Our Initiatives</span>
                  <i className="fa fa-arrow-right"></i>
                </a>
                <button
                  type="button"
                  className="ash-btn ash-btn-outline"
                  onClick={() => {
                    setDonationTarget('All Initiatives');
                    setActiveModal('donation');
                  }}
                >
                  <i className="fa fa-hands-helping"></i>
                  <span>Support Our Mission</span>
                </button>
              </div>

              {/* Stats / Highlight Box */}
              <div className="hero-glass-stats">
                <div className="glass-stat-item">
                  <div className="glass-stat-icon"><i className="fa fa-layer-group"></i></div>
                  <div>
                    <div className="glass-stat-label">Core Pillars</div>
                    <div className="glass-stat-value">6 Focus Areas</div>
                  </div>
                </div>
                <div className="glass-stat-item">
                  <div className="glass-stat-icon"><i className="fa fa-hand-holding-heart"></i></div>
                  <div>
                    <div className="glass-stat-label">Approach</div>
                    <div className="glass-stat-value">Grassroots Seva</div>
                  </div>
                </div>
                <div className="glass-stat-item">
                  <div className="glass-stat-icon"><i className="fa fa-handshake"></i></div>
                  <div>
                    <div className="glass-stat-label">Alliances</div>
                    <div className="glass-stat-value">CSR &amp; Donors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Media */}
            <div className="hero-image-card reveal-on-scroll">
              <img src="/images/hero_community_hope.jpg" alt="Anand Group Charitable Trust Community Initiatives" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           2. ABOUT US SECTION
           ========================================================================== */}
      <section className="ash-section" id="about">
        <div className="ash-container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal-on-scroll">
              <div className="about-image-accent-border"></div>
              <div className="about-image-card">
                <img src="/images/about_mentorship.jpg" alt="Anand Group Charitable Trust Community Mentorship in Village" />
              </div>
              <div className="about-floating-badge">
                <h4>Grassroots Upliftment</h4>
                <p>Empowering children, seniors, and communities through dedicated humanitarian seva.</p>
              </div>
            </div>

            <div className="about-content-col reveal-on-scroll">
              <div className="section-eyebrow">
                <i className="fa fa-seedling"></i> About Anand Group Charitable Trust
              </div>
              <h2 className="section-title">
                Rooted in Compassion. Driven by Purpose.
              </h2>
              <p className="about-text-lead">
                Anand Group Charitable Trust is a dedicated non-governmental organization and registered charitable trust established with an enduring dedication to grassroots social transformation in India. We believe every individual possesses the inherent right to live with dignity, good health, and boundless opportunity.
              </p>
              <p>
                Rather than short-term relief, our initiatives focus on enduring community empowerment: delivering quality child education, instilling civic and environmental awareness, providing preventive healthcare and clinical camps, restoring cultural temples, providing elder care, and offering comprehensive support to Naadha Ashram.
              </p>

              <div className="mission-vision-boxes">
                <div className="mv-card">
                  <div className="mv-icon"><i className="fa fa-compass"></i></div>
                  <h3>Our Mission</h3>
                  <p>To create meaningful social change through education, environmental awareness, accessible healthcare, cultural preservation, and compassionate community service.</p>
                </div>

                <div className="mv-card">
                  <div className="mv-icon"><i className="fa fa-eye"></i></div>
                  <h3>Our Vision</h3>
                  <p>To build an inclusive, responsible, and compassionate society where individuals and communities have opportunities to live with dignity, good health, and purpose.</p>
                </div>
              </div>

              <div className="values-wrap">
                <div className="values-title">Our Guiding Values</div>
                <div className="values-grid">
                  <div className="value-pill"><i className="fa fa-heart"></i> Compassion</div>
                  <div className="value-pill"><i className="fa fa-balance-scale"></i> Integrity</div>
                  <div className="value-pill"><i className="fa fa-hands-helping"></i> Service</div>
                  <div className="value-pill"><i className="fa fa-leaf"></i> Responsibility</div>
                  <div className="value-pill"><i className="fa fa-equals"></i> Equality</div>
                  <div className="value-pill"><i className="fa fa-users"></i> Community Development</div>
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
           3. MAIN INITIATIVES — SIX CORE FOCUS AREAS (CARDS GRID)
           ========================================================================== */}
      <section className="ash-section" id="initiatives">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-hands"></i> Core Focus Areas
            </div>
            <h2 className="section-title">
              Six Pillars of Community Transformation
            </h2>
            <p className="section-subtitle">
              Comprehensive, compassionate initiatives designed to address core societal needs, promote environmental responsibility, and build lasting grassroots self-reliance.
            </p>
          </div>

          <div className="initiatives-grid">
            {/* 1. Social & Environmental Awareness */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_awareness.jpg" alt="Swachh Bharat Cleanliness and Tree Planting Drive" loading="lazy" />
                <span className="initiative-badge">Awareness</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">1. Social &amp; Environmental Awareness</h3>
                <p className="initiative-desc">
                  Building awareness and inspiring responsibility through Swachh Bharat cleanliness drives, save water campaigns, traffic road safety, and plastic-free living.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('awareness');
                      openInitiativeModal('awareness');
                    }}
                    aria-label="Explore Social and Environmental Awareness"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* 2. Education & Child Development */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_education.jpg" alt="Underprivileged Children Classroom Tutoring" loading="lazy" />
                <span className="initiative-badge">Education</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">2. Education &amp; Child Development</h3>
                <p className="initiative-desc">
                  Every child deserves a better future. Supporting underprivileged learners with free education, school infrastructure, digital discipline, and value-based mentoring.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('education');
                      openInitiativeModal('education');
                    }}
                    aria-label="Explore Education and Child Development"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* 3. Temple Development & Cultural Activities */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_temple.jpg" alt="Heritage Temple Courtyard Renovation" loading="lazy" />
                <span className="initiative-badge">Heritage &amp; Seva</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">3. Temple Development &amp; Culture</h3>
                <p className="initiative-desc">
                  Preserving heritage and strengthening communities through temple renovation, sacred precinct hygiene, cultural events, and traditional Annadanam food distribution.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('temple');
                      openInitiativeModal('temple');
                    }}
                    aria-label="Explore Temple Development"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* 4. Healthcare & Medical Support */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_healthcare.jpg" alt="Free Medical Camp and Screening" loading="lazy" />
                <span className="initiative-badge">Healthcare</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">4. Healthcare &amp; Medical Support</h3>
                <p className="initiative-desc">
                  Accessible healthcare for healthier communities. Free general medical camps, voluntary blood donation drives, diabetes &amp; BP screening, and eye checkups.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('healthcare');
                      openInitiativeModal('healthcare');
                    }}
                    aria-label="Explore Healthcare and Medical Support"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* 5. Elderly Care & Social Welfare */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_elderly.jpg" alt="Senior Citizen Care and Comfort" loading="lazy" />
                <span className="initiative-badge">Elderly Care</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">5. Elderly Care &amp; Social Welfare</h3>
                <p className="initiative-desc">
                  Care, compassion, and dignity for every elder. Supporting old age homes, food and grocery assistance, warm seasonal clothing, and dedicated volunteer visits.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('elderly');
                      openInitiativeModal('elderly');
                    }}
                    aria-label="Explore Elderly Care and Social Welfare"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>

            {/* 6. Naadha Ashram Support */}
            <article className="initiative-card reveal-on-scroll">
              <div className="initiative-img-container">
                <img src="/images/init_ashram.jpg" alt="Naadha Ashram Community Food and Care" loading="lazy" />
                <span className="initiative-badge">Naadha Ashram</span>
              </div>
              <div className="initiative-body">
                <h3 className="initiative-title">6. Naadha Ashram Support</h3>
                <p className="initiative-desc">
                  A place of compassion, care, and belonging. Providing ongoing wholesome nutrition, daily essential supplies, clothing, hygiene, and volunteer companionship.
                </p>
                <div className="initiative-footer">
                  <button
                    type="button"
                    className="learn-more-btn"
                    onClick={() => {
                      setActiveInitiativeTab('ashram');
                      openInitiativeModal('ashram');
                    }}
                    aria-label="Explore Naadha Ashram Support"
                  >
                    <span>Explore Initiative</span>
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* ==========================================================================
               DETAILED INITIATIVE BROWSER (EXPANDABLE TABS)
               ========================================================================== */}
          <div style={{ marginTop: '4.5rem' }} className="reveal-on-scroll">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="section-eyebrow">
                <i className="fa fa-book-open"></i> Detailed Program Showcase
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Browse All Six Focus Categories</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem' }}>
                Select a category below to explore its specific programs, key activities, and expected community benefits.
              </p>
            </div>

            {/* Tabs Selector */}
            <div className="initiatives-nav-tabs">
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'awareness' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('awareness')}
              >
                <i className="fa fa-leaf"></i> 1. Social &amp; Environment
              </button>
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('education')}
              >
                <i className="fa fa-graduation-cap"></i> 2. Education &amp; Children
              </button>
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'temple' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('temple')}
              >
                <i className="fa fa-om"></i> 3. Temple &amp; Culture
              </button>
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'healthcare' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('healthcare')}
              >
                <i className="fa fa-stethoscope"></i> 4. Medical Support
              </button>
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'elderly' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('elderly')}
              >
                <i className="fa fa-heart"></i> 5. Elderly Care
              </button>
              <button
                type="button"
                className={`init-tab-btn ${activeInitiativeTab === 'ashram' ? 'active' : ''}`}
                onClick={() => setActiveInitiativeTab('ashram')}
              >
                <i className="fa fa-hands-helping"></i> 6. Naadha Ashram
              </button>
            </div>

            {/* Tab Detail Card */}
            <div className="init-detail-card">
              <div className="init-detail-grid">
                <div className="init-detail-media">
                  <img src={tabInit.image} alt={tabInit.title} loading="lazy" />
                  <div className="init-detail-badge">{tabInit.tag}</div>
                </div>

                <div>
                  <div style={{ color: 'var(--color-blue-heading)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.35rem' }}>
                    {tabInit.title}
                  </div>
                  <h3 style={{ fontSize: '1.85rem', marginBottom: '0.85rem' }}>{tabInit.heading}</h3>
                  <p style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 500, lineHeight: 1.7, marginBottom: '1rem' }}>
                    {tabInit.lead}
                  </p>
                  <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.68 }}>
                    {tabInit.desc}
                  </p>

                  <h4 style={{ fontSize: '1.15rem', marginTop: '1.75rem', marginBottom: '0.75rem' }}>
                    Key Activities &amp; Programs
                  </h4>

                  <div className="init-programs-subgrid">
                    {tabInit.programs.map((prog, idx) => (
                      <div key={idx} className="init-program-card">
                        <h4><i className="fa fa-check-circle"></i> {prog.name}</h4>
                        <ul>
                          {prog.items.map((it, itemIdx) => (
                            <li key={itemIdx}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="init-benefit-box">
                    <strong style={{ color: 'var(--color-blue-heading)' }}><i className="fa fa-chart-line"></i> Expected Community Benefit:</strong> {tabInit.expectedBenefit}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <button
                      type="button"
                      className="ash-btn ash-btn-primary"
                      onClick={() => {
                        setDonationTarget(tabInit.title);
                        setActiveModal('donation');
                      }}
                    >
                      <i className="fa fa-heart"></i> Support This Initiative
                    </button>
                    <button
                      type="button"
                      className="ash-btn ash-btn-outline"
                      onClick={() => setActiveModal('volunteer')}
                    >
                      <i className="fa fa-user-plus"></i> Volunteer for Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           4. DEDICATED NAADHA ASHRAM SUPPORT SECTION
           ========================================================================== */}
      <section className="ash-section" id="ashram" style={{ backgroundColor: 'var(--color-blue-tint)' }}>
        <div className="ash-container">
          <div className="ashram-hero-card reveal-on-scroll">
            <div className="ashram-grid">
              <div className="ashram-media-col">
                <img src="/images/init_ashram.jpg" alt="Naadha Ashram Community Food and Care" loading="lazy" />
              </div>

              <div className="ashram-info-col">
                <div className="ashram-pill">
                  <i className="fa fa-star"></i> Dedicated Social Support Initiative
                </div>
                <div className="section-eyebrow">
                  <i className="fa fa-hands-helping"></i> Naadha Ashram Support
                </div>
                <h2 className="section-title" style={{ fontSize: '2.3rem' }}>
                  A Place of Compassion, Care &amp; Belonging
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#111827', fontWeight: 500 }}>
                  Naadha Ashram provides sanctuary, shelter, and peace to vulnerable individuals seeking care and belonging. Anand Group Charitable Trust works in active community partnership to extend an unbroken safety net of nutritious food, clean daily essentials, and emotional warmth.
                </p>
                <p style={{ fontSize: '0.925rem', color: '#4B5563', lineHeight: 1.65 }}>
                  Every day, our dedicated volunteer teams collaborate with the ashram to support wholesome meal preparation, distribute clean clothing, organize primary medical checkups, and sit with residents to share comforting fellowship.
                </p>

                <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="ash-btn ash-btn-primary"
                    onClick={() => {
                      setDonationTarget('Naadha Ashram Support');
                      setActiveModal('donation');
                    }}
                  >
                    <i className="fa fa-heart"></i> Support Naadha Ashram
                  </button>
                  <button
                    type="button"
                    className="ash-btn ash-btn-outline"
                    onClick={() => setActiveModal('volunteer')}
                  >
                    <i className="fa fa-hands"></i> Join as Ashram Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Ashram Focus Grid Cards */}
          <div className="ashram-focus-grid reveal-on-scroll">
            <div className="ashram-focus-card">
              <div className="ashram-focus-icon"><i className="fa fa-utensils"></i></div>
              <h4>Food &amp; Nutrition Support</h4>
              <p>Daily provision of quality rice, wheat flour, pulses, cooking oils, and fresh seasonal vegetables to ensure wholesome, balanced meals for every resident.</p>
            </div>

            <div className="ashram-focus-card">
              <div className="ashram-focus-icon"><i className="fa fa-box-open"></i></div>
              <h4>Daily Essential Supplies</h4>
              <p>Supplying household hygiene necessities, soaps, detergents, clean bedsheets, blankets, and essential maintenance supplies to ensure dignified living spaces.</p>
            </div>

            <div className="ashram-focus-card">
              <div className="ashram-focus-icon"><i className="fa fa-tshirt"></i></div>
              <h4>Clothing &amp; Hygiene Assistance</h4>
              <p>Providing clean, comfortable seasonal garments, winter shawls, and personal dignity kits tailored to the needs of residents throughout the year.</p>
            </div>

            <div className="ashram-focus-card">
              <div className="ashram-focus-icon"><i className="fa fa-user-md"></i></div>
              <h4>Healthcare &amp; Volunteer Care</h4>
              <p>Arranging periodic doctor visits, first aid kits, necessary prescribed medicines, and heart-to-heart volunteer companionship to brighten daily life.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: '#6B7280' }}>
            <i className="fa fa-info-circle" style={{ color: 'var(--color-blue-heading)' }}></i> <em>Transparency Note: Anand Group Charitable Trust supports Naadha Ashram as a voluntary humanitarian initiative and community partner to foster welfare and shared compassion.</em>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           5. OUR IMPACT / COMMITMENT & TARGETS
           ========================================================================== */}
      <section className="ash-section" id="impact">
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
              <strong>Transparency Disclosure:</strong> As a dedicated charitable organization, Anand Group Charitable Trust holds transparency as a foundational pillar. All figures represent projected benchmarks and ongoing capacity commitments. We do not display unverified achievements as concluded results.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           6. DEDICATED CSR FUNDING & PARTNERSHIPS SECTION
           ========================================================================== */}
      <section className="ash-section" id="csr">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-handshake"></i> Corporate Social Responsibility
            </div>
            <h2 className="section-title">
              Partner With Us. Create Lasting Impact.
            </h2>
            <p className="section-subtitle">
              We welcome collaboration with businesses, corporate organizations, institutions, and socially responsible partners to support meaningful community development initiatives.
            </p>
          </div>

          <div className="csr-container-grid">
            {/* Left Column: CSR Opportunities & Benefits */}
            <div className="reveal-on-scroll">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                CSR Collaboration Opportunities
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.68 }}>
                Align your corporate social responsibility vision with verified, impactful grassroots projects designed for long-term community transformation:
              </p>

              <div className="csr-opp-grid">
                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-school"></i></div>
                  <div>
                    <h4>Education &amp; Infrastructure</h4>
                    <p>School upgrades, science/computer labs, libraries, and remedial tutoring centers.</p>
                  </div>
                </div>

                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-leaf"></i></div>
                  <div>
                    <h4>Environment &amp; Cleanliness</h4>
                    <p>Swachh Bharat village drives, sapling plantations, and water-saving initiatives.</p>
                  </div>
                </div>

                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-heartbeat"></i></div>
                  <div>
                    <h4>Healthcare &amp; Medical Camps</h4>
                    <p>Mobile clinical camps, diabetes &amp; BP screening, and voluntary blood donation drives.</p>
                  </div>
                </div>

                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-user-shield"></i></div>
                  <div>
                    <h4>Elderly Care &amp; Social Welfare</h4>
                    <p>Sustained old age home care, dignity rations, and essential supplies distribution.</p>
                  </div>
                </div>

                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-utensils"></i></div>
                  <div>
                    <h4>Food &amp; Nutrition Support</h4>
                    <p>Structured Annadanam seva and ongoing meal support for Naadha Ashram residents.</p>
                  </div>
                </div>

                <div className="csr-opp-item">
                  <div className="csr-opp-icon"><i className="fa fa-hands"></i></div>
                  <div>
                    <h4>Community Development</h4>
                    <p>Multi-sectoral grassroots upliftment programs subject to applicable CSR eligibility.</p>
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem' }}>
                Why Partner With Anand Group Charitable Trust?
              </h4>
              <ul className="csr-benefit-list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  <div><strong>Structured Community Programs:</strong> Well-planned implementation frameworks aligned with Schedule VII priorities.</div>
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <div><strong>Employee Volunteering Engagement:</strong> Meaningful on-ground participation opportunities for your company workforce.</div>
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <div><strong>Transparent Utilization Reporting:</strong> Clear documentation, milestone reviews, and auditable expense tracking.</div>
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <div><strong>Potential for Measurable Impact:</strong> Regular baseline tracking and field reporting to verify authentic community transformation.</div>
                </li>
              </ul>
            </div>

            {/* Right Column: CSR Enquiry Form */}
            <div className="reveal-on-scroll">
              <div className="csr-form-card">
                <h3 className="csr-form-title">CSR Partnership Enquiry</h3>
                <p className="csr-form-desc">
                  Connect with our institutional collaborations desk to design or sponsor a targeted CSR initiative.
                </p>

                <form onSubmit={handleCsrSubmit}>
                  <div className="form-group">
                    <label className="form-label">Company / Organization Name *</label>
                    <input type="text" className="form-input" placeholder="e.g. Acme Enterprises Ltd." required />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Contact Person *</label>
                      <input type="text" className="form-input" placeholder="e.g. Rajesh Malhotra" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Designation / Role</label>
                      <input type="text" className="form-input" placeholder="e.g. Head of CSR / Director" />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Official Work Email *</label>
                      <input type="email" className="form-input" placeholder="csr@company.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">CSR Focus Area *</label>
                      <select className="form-select" required>
                        <option value="Education & Infrastructure">Education &amp; School Infrastructure</option>
                        <option value="Environmental Awareness">Environmental &amp; Cleanliness Drives</option>
                        <option value="Healthcare & Medical Camps">Healthcare &amp; Medical Camps</option>
                        <option value="Elderly Care & Welfare">Elderly Care &amp; Social Welfare</option>
                        <option value="Naadha Ashram & Food Support">Naadha Ashram &amp; Food Assistance</option>
                        <option value="Multi-Sectoral Program">Multi-Sectoral CSR Program</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Estimated Budget (Optional)</label>
                      <select className="form-select">
                        <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹50 Lakhs">₹15 Lakhs - ₹50 Lakhs</option>
                        <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
                        <option value="To Be Discussed">To Be Discussed</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Partnership Message / Project Goals *</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Share your company's CSR objectives, target geographies, or proposed partnership scope..."
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="ash-btn ash-btn-primary"
                    style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
                    disabled={csrSubmitting}
                  >
                    {csrSubmitting ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i> Submitting Proposal...
                      </>
                    ) : (
                      <>
                        <i className="fa fa-paper-plane"></i> Become a CSR Partner
                      </>
                    )}
                  </button>
                </form>

                <div className="csr-compliance-box">
                  <strong><i className="fa fa-shield-alt"></i> Compliance &amp; Verification Note:</strong> Official trust incorporation credentials, project docket documents, and relevant statutory documentation are furnished upon formal corporate review. Individual program CSR eligibility is subject to applicable legal guidelines and project structuring.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           7. GALLERY SECTION
           ========================================================================== */}
      <section className="ash-section" id="gallery">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-camera-retro"></i> Visual Chronicles
            </div>
            <h2 className="section-title">
              Moments of Hope. Stories of Change.
            </h2>
            <p className="section-subtitle">
              Authentic glimpses of community unity, educational milestones, medical outreach, and selfless service across India.
            </p>
          </div>

          <div className="gallery-filters reveal-on-scroll">
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
            >
              All Activities
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'awareness' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('awareness')}
            >
              Awareness Campaigns
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
              className={`gallery-filter-btn ${galleryFilter === 'temple' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('temple')}
            >
              Temple Development
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'medical' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('medical')}
            >
              Medical Camps
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'elderly' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('elderly')}
            >
              Elderly Care
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'ashram' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('ashram')}
            >
              Naadha Ashram
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${galleryFilter === 'food' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('food')}
            >
              Food Donations
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
           8. GET INVOLVED (FOUR OPTIONS)
           ========================================================================== */}
      <section className="ash-section" id="get-involved">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-hand-holding-heart"></i> Get Involved
            </div>
            <h2 className="section-title">
              Be the Reason Someone Smiles Today
            </h2>
            <p className="section-subtitle">
              Sustainable social change requires collective action. Discover the multiple pathways you can contribute your heart, skills, or resources to Anand Group Charitable Trust.
            </p>
          </div>

          <div className="get-involved-grid">
            {/* Option 1: Donate */}
            <div className="involve-card featured reveal-on-scroll">
              <div className="involve-badge-top">Direct Impact</div>
              <div className="involve-icon-box">
                <i className="fa fa-hand-holding-heart"></i>
              </div>
              <h3>Donate</h3>
              <p>
                Support education, healthcare, food assistance, and community welfare initiatives that transform lives.
              </p>
              <button
                type="button"
                className="ash-btn ash-btn-primary"
                style={{ width: '100%' }}
                onClick={() => {
                  setDonationTarget('All Initiatives');
                  setActiveModal('donation');
                }}
              >
                <i className="fa fa-heart"></i> Make a Contribution
              </button>
            </div>

            {/* Option 2: Volunteer */}
            <div className="involve-card reveal-on-scroll">
              <div className="involve-icon-box">
                <i className="fa fa-user-friends"></i>
              </div>
              <h3>Volunteer</h3>
              <p>
                Participate in cleanliness campaigns, educational programs, medical camps, and food distribution activities.
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

            {/* Option 3: CSR Partnership */}
            <div className="involve-card reveal-on-scroll">
              <div className="involve-icon-box">
                <i className="fa fa-handshake"></i>
              </div>
              <h3>CSR Partnership</h3>
              <p>
                Collaborate with the trust on structured community development programs aligned with your corporate values.
              </p>
              <a
                href="#csr"
                className="ash-btn ash-btn-outline-dark"
                style={{ width: '100%' }}
              >
                <i className="fa fa-briefcase"></i> Partner With Us
              </a>
            </div>

            {/* Option 4: Sponsor an Initiative */}
            <div className="involve-card reveal-on-scroll">
              <div className="involve-icon-box">
                <i className="fa fa-star"></i>
              </div>
              <h3>Sponsor an Initiative</h3>
              <p>
                Support a specific education, healthcare, awareness, Naadha Ashram, or elder welfare program directly.
              </p>
              <button
                type="button"
                className="ash-btn ash-btn-outline-dark"
                style={{ width: '100%' }}
                onClick={() => setActiveModal('sponsor')}
              >
                <i className="fa fa-award"></i> Sponsor a Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           9. TESTIMONIALS / VOICES
           ========================================================================== */}
      <section className="ash-section" id="stories">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-comment-dots"></i> Testimonials &amp; Voices
            </div>
            <h2 className="section-title">
              Stories That Inspire Change
            </h2>
            <p className="section-subtitle">
              Reflections from beneficiary families, dedicated volunteers, and medical partners collaborating with Anand Group Charitable Trust.
            </p>
          </div>

          <div className="stories-grid">
            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;The awareness drives on cleanliness and digital screen time have inspired our entire village school. Children are more attentive, hygiene has improved, and parents feel actively supported.&rdquo;
                </p>
              </div>
              <div className="story-author-box">
                <div className="author-avatar">SD</div>
                <div className="author-info">
                  <h4>Sunita Devi</h4>
                  <p>Community Teacher &bull; Village Learning Hub</p>
                </div>
              </div>
            </div>

            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;Volunteering for the weekend food distribution and temple heritage cleanups taught me how much strength lies in selfless service. The joy of giving back is truly unmatched.&rdquo;
                </p>
              </div>
              <div className="story-author-box">
                <div className="author-avatar">RS</div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Youth Volunteer &bull; Community Outreach</p>
                </div>
              </div>
            </div>

            <div className="story-card reveal-on-scroll">
              <div>
                <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
                <p className="story-quote-text">
                  &ldquo;Preventive rural health screening catches conditions early. Anand Group Charitable Trust’s community health camps bridge a crucial gap between remote households and quality primary clinical advice.&rdquo;
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
        </div>
      </section>

      {/* ==========================================================================
           10. CONTACT SECTION
           ========================================================================== */}
      <section className="ash-section" id="contact">
        <div className="ash-container">
          <div className="section-header reveal-on-scroll">
            <div className="section-eyebrow">
              <i className="fa fa-map-marker-alt"></i> Connect With Us
            </div>
            <h2 className="section-title">
              We Would Love to Hear From You
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
                Fill in the details below and an Anand Group Charitable Trust coordinator will respond within 24-48 business hours.
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
                      <option value="CSR Partnership">CSR &amp; Corporate Partnership</option>
                      <option value="Naadha Ashram Support">Naadha Ashram Support</option>
                      <option value="Volunteering">Volunteering Opportunity</option>
                      <option value="Donation Inquiry">Donation &amp; Support Inquiry</option>
                      <option value="Temple Heritage & Annadanam">Temple Heritage &amp; Annadanam</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">Your Message *</label>
                  <textarea id="contactMessage" className="form-textarea" placeholder="How would you like to collaborate with or support Anand Group Charitable Trust?" required></textarea>
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
                  <p><a href="mailto:contact@anandgroupcharitabletrust.org.in">contact@anandgroupcharitabletrust.org.in</a></p>
                  <p style={{ fontSize: '0.75rem', color: '#0284C7' }}>[Official Registered Inquiry Mailbox - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-phone-alt"></i></div>
                <div className="info-item-text">
                  <h4>Helpline &amp; Coordination</h4>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  <p style={{ fontSize: '0.75rem', color: '#0284C7' }}>[Community Desk Phone - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-map-marked-alt"></i></div>
                <div className="info-item-text">
                  <h4>Registered Office</h4>
                  <p>Anand Group Charitable Trust, 14 Institutional Area, Sector 5, New Delhi - 110001, India</p>
                  <p style={{ fontSize: '0.75rem', color: '#0284C7' }}>[Registered Head Office - Placeholder]</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-item-icon"><i className="fa fa-clock"></i></div>
                <div className="info-item-text">
                  <h4>Operating Hours</h4>
                  <p>Monday &ndash; Saturday: 9:30 AM &ndash; 6:00 PM IST</p>
                  <p style={{ fontSize: '0.75rem', color: '#0284C7' }}>Community camps and field centers operate on extended schedules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           11. FOOTER (PURE WHITE THEME)
           ========================================================================== */}
      <footer className="ash-footer">
        <div className="ash-container">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <a href="#home" className="footer-brand-logo">
                <img src="/logo-anand-trust.svg" alt="Anand Group Charitable Trust" />
              </a>
              <p className="footer-mission-text">
                Anand Group Charitable Trust is a registered Indian non-governmental organization dedicated to creating sustainable social transformation through education, environmental awareness, accessible healthcare, temple heritage, elderly welfare, and Naadha Ashram support.
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
                <li><a href="#about">About Us</a></li>
                <li><a href="#initiatives">Our Initiatives</a></li>
                <li><a href="#impact">Our Impact &amp; Targets</a></li>
                <li><a href="#ashram">Naadha Ashram Support</a></li>
                <li><a href="#csr">CSR Partnerships</a></li>
                <li><a href="#gallery">Moments &amp; Gallery</a></li>
                <li><a href="#get-involved">Get Involved</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Our Initiatives</h4>
              <ul className="footer-links-list">
                <li><button type="button" onClick={() => openInitiativeModal('awareness')}>Social &amp; Environment</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('education')}>Education &amp; Children</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('temple')}>Temple &amp; Cultural Heritage</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('healthcare')}>Healthcare &amp; Medical Camps</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('elderly')}>Elderly Care &amp; Welfare</button></li>
                <li><button type="button" onClick={() => openInitiativeModal('ashram')}>Naadha Ashram Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Stay Connected</h4>
              <p className="footer-newsletter-p">
                Subscribe to our quarterly impact newsletter to receive verified stories from the field.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form-inline">
                <input type="email" className="newsletter-input" placeholder="Your email address" required aria-label="Newsletter email" />
                <button type="submit" className="ash-btn ash-btn-primary ash-btn-sm" style={{ borderRadius: 'var(--radius-full)' }}>
                  Join
                </button>
              </form>
              <div style={{ marginTop: '1.5rem', fontSize: '0.775rem', color: '#4B5563' }}>
                <i className="fa fa-lock" style={{ color: '#0284C7' }}></i> We respect your privacy. No spam ever.
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              &copy; 2026 Anand Group Charitable Trust. All Rights Reserved.
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

      {/* 1. Initiative Deep Dive Modal */}
      {activeModal === 'initiative' && selectedInit && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog wide">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-seedling"></i></div>
            <h3 className="modal-title">{selectedInit.title}</h3>
            <p className="modal-subtitle">{selectedInit.heading}</p>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '320px', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <img src={selectedInit.image} alt={selectedInit.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#111827' }}>
              <p style={{ fontWeight: 600, color: 'var(--color-blue-heading)' }}>{selectedInit.lead}</p>
              <p>{selectedInit.desc}</p>

              <h4 style={{ color: 'var(--color-blue-heading)', fontSize: '1.15rem', marginTop: '1.25rem', marginBottom: '0.75rem' }}>
                Programs &amp; Action Areas:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem', margin: '1rem 0' }}>
                {selectedInit.programs.map((prog, idx) => (
                  <div key={idx} style={{ background: 'var(--color-blue-tint)', border: '1px solid var(--color-blue-border)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                    <h5 style={{ fontSize: '0.975rem', marginBottom: '0.5rem', color: 'var(--color-blue-heading)', fontWeight: 700 }}>
                      <i className="fa fa-check-circle" style={{ color: 'var(--color-blue-heading)', marginRight: '0.4rem' }}></i>
                      {prog.name}
                    </h5>
                    <ul style={{ margin: 0, paddingLeft: '1.15rem', fontSize: '0.85rem', color: '#1F2937', lineHeight: 1.6 }}>
                      {prog.items.map((it, itemIdx) => (
                        <li key={itemIdx}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="init-benefit-box">
                <strong style={{ color: 'var(--color-blue-heading)' }}>Expected Community Benefit:</strong> {selectedInit.expectedBenefit}
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="ash-btn ash-btn-primary"
                onClick={() => {
                  setDonationTarget(selectedInit.title);
                  setActiveModal('donation');
                }}
              >
                <i className="fa fa-heart"></i> Support This Initiative
              </button>
              <button
                type="button"
                className="ash-btn ash-btn-outline"
                onClick={() => setActiveModal('volunteer')}
              >
                <i className="fa fa-user-plus"></i> Volunteer for Cause
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Donation / Support Pledge Modal */}
      {activeModal === 'donation' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-hand-holding-heart"></i></div>
            <h3 className="modal-title">Support Anand Group Charitable Trust</h3>
            <p className="modal-subtitle">Empower lives and build hope in underserved communities.</p>

            <div className="modal-disclaimer-box">
              <i className="fa fa-info-circle"></i>
              <div>
                <strong>Informational Notice:</strong> Anand Group Charitable Trust does not process live card/gateway payments without confirmed organizational verification and 80G tax clearance. Submit your pledge below and our team will furnish official trust verification credentials.
              </div>
            </div>

            <form onSubmit={handleDonationSubmit}>
              <div className="form-group">
                <label className="form-label">Select Initiative Focus</label>
                <select
                  className="form-select"
                  value={donationTarget}
                  onChange={(e) => setDonationTarget(e.target.value)}
                >
                  <option value="All Initiatives">All Initiatives (Where Most Needed)</option>
                  <option value="Naadha Ashram Support">Naadha Ashram Support (Food &amp; Essentials)</option>
                  <option value="Education & Child Development">Education &amp; Underprivileged Children</option>
                  <option value="Social & Environmental Awareness">Social &amp; Environmental Cleanliness Drives</option>
                  <option value="Healthcare & Medical Support">Healthcare &amp; Free Medical Camps</option>
                  <option value="Temple Development & Annadanam">Temple Development &amp; Food Annadanam</option>
                  <option value="Elderly Care & Social Welfare">Elderly Care &amp; Old Age Home Support</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Select Support Tier</label>
                <div className="donation-tier-grid">
                  {[
                    { label: '₹500 (Kit)', val: '500' },
                    { label: '₹1,500 (Month Care)', val: '1500' },
                    { label: '₹3,000 (Ashram Aid)', val: '3000' },
                    { label: '₹5,000 (Medical Camp)', val: '5000' },
                  ].map((tier) => (
                    <button
                      key={tier.val}
                      type="button"
                      className={`ash-btn ${selectedTier === tier.val ? 'ash-btn-primary' : 'ash-btn-outline'}`}
                      style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
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
                  placeholder="Or enter custom pledge amount (₹)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier('');
                  }}
                  required
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
              </div>

              <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <i className="fa fa-hand-holding-usd"></i> Submit Support Pledge
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Volunteer Application Modal */}
      {activeModal === 'volunteer' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-user-plus"></i></div>
            <h3 className="modal-title">Join as a Volunteer</h3>
            <p className="modal-subtitle">Contribute your skills, time, and heart to our initiatives.</p>

            <form onSubmit={handleVolunteerSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="Email" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="Phone" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Focus Area</label>
                  <select className="form-select">
                    <option value="Cleanliness & Swachh Bharat">Cleanliness &amp; Swachh Bharat Drives</option>
                    <option value="Education Mentoring">Child Education &amp; Mentoring</option>
                    <option value="Naadha Ashram Seva">Naadha Ashram Food &amp; Companionship</option>
                    <option value="Medical Camps">Free Medical &amp; Blood Camps</option>
                    <option value="Temple Heritage">Temple Heritage &amp; Annadanam</option>
                    <option value="Elderly Welfare">Elderly Care &amp; Old Age Homes</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Availability</label>
                <select className="form-select">
                  <option value="Weekends Only">Weekends Only</option>
                  <option value="Weekdays (Part-time)">Weekdays (Part-time)</option>
                  <option value="Monthly Events">Monthly Community Events</option>
                  <option value="Virtual / Remote">Virtual / Remote Coordination</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Brief Background / Motivation</label>
                <textarea className="form-textarea" placeholder="Tell us how you would like to help..." rows="3"></textarea>
              </div>

              <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%' }}>
                <i className="fa fa-paper-plane"></i> Submit Volunteer Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. Sponsor an Initiative Modal */}
      {activeModal === 'sponsor' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-award"></i></div>
            <h3 className="modal-title">Sponsor a Specific Initiative</h3>
            <p className="modal-subtitle">Direct your personal or institutional sponsorship to an active community program.</p>

            <form onSubmit={handleSponsorSubmit}>
              <div className="form-group">
                <label className="form-label">Select Program to Sponsor *</label>
                <select className="form-select" required>
                  <option value="Naadha Ashram Nutrition">Naadha Ashram Month Nutrition &amp; Essentials</option>
                  <option value="Underprivileged School Kit">School Supplies &amp; Books for 50 Children</option>
                  <option value="Rural Free Medical Camp">Full-Day Free Village Medical Camp</option>
                  <option value="Swachh Bharat Cleanliness Drive">Swachh Bharat Community Drive &amp; Saplings</option>
                  <option value="Annadanam Food Service">Temple Annadanam Community Meal Service</option>
                  <option value="Elder Care Dignity Packs">Elderly Dignity &amp; Hygiene Supplies</option>
                </select>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Sponsor / Organization Name *</label>
                  <input type="text" className="form-input" placeholder="Your Name or Org" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="you@domain.com" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Proposed Sponsorship (₹)</label>
                  <input type="text" className="form-input" placeholder="e.g. ₹25,000 / ₹50,000" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Dedication / Note</label>
                <textarea className="form-textarea" placeholder="In honor/memory of, or specific execution guidance..." rows="3"></textarea>
              </div>

              <button type="submit" className="ash-btn ash-btn-primary" style={{ width: '100%' }}>
                <i className="fa fa-hand-holding-heart"></i> Submit Sponsorship Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 5. Trust Story Modal */}
      {activeModal === 'story' && (
        <div className="ash-modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setActiveModal(null); }}>
          <div className="ash-modal-dialog wide">
            <button type="button" className="modal-close-trigger" onClick={() => setActiveModal(null)}>&times;</button>
            <div className="modal-header-icon"><i className="fa fa-book-open"></i></div>
            <h3 className="modal-title">The Anand Group Charitable Trust Story</h3>
            <p className="modal-subtitle">Empowering Lives. Building Hope.</p>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#111827' }}>
              <p>
                <strong>Anand Group Charitable Trust</strong> was conceived from a simple yet resolute understanding: sustainable community development cannot happen from afar. It requires sitting alongside children in community learning circles, listening to elders who need warmth and companionship, ensuring public hygiene through Swachh Bharat campaigns, and extending loving care to sanctuary homes like Naadha Ashram.
              </p>
              <h4 style={{ color: 'var(--color-blue-heading)', fontSize: '1.2rem', marginTop: '1.5rem' }}>Our Holistic Model</h4>
              <p>
                Unlike fragmented single-cause interventions, our trust works across six interconnected social welfare pillars:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                <li><strong>Social &amp; Environmental Awareness:</strong> Swachh Bharat cleanliness, save water campaigns, traffic discipline, and plastic-free living.</li>
                <li><strong>Education &amp; Child Development:</strong> Remedial coaching, school kits, digital screen-time discipline, and core family values.</li>
                <li><strong>Temple Development &amp; Cultural Heritage:</strong> Temple renovation, spiritual celebrations, and community Annadanam meal seva.</li>
                <li><strong>Healthcare &amp; Medical Support:</strong> Doorstep general clinical checkups, blood donation camps, diabetes &amp; BP screening, and eye care.</li>
                <li><strong>Elderly Care &amp; Social Welfare:</strong> Dedicated support for old age homes, grocery kits, seasonal clothing, and volunteer visits.</li>
                <li><strong>Naadha Ashram Support:</strong> Sustained food assistance, daily essentials, hygiene supplies, and compassionate companionship.</li>
              </ul>
              <h4 style={{ color: 'var(--color-blue-heading)', fontSize: '1.2rem', marginTop: '1.5rem' }}>Governance &amp; Trust Ethics</h4>
              <p>
                We operate under uncompromising standards of financial accountability, zero tolerance for exaggerated marketing, and rigorous community consensus before any field center or program is initiated.
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
            <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#111827' }}>
              <p>Anand Group Charitable Trust values the confidentiality and trust of our supporters, donors, volunteers, and website visitors.</p>
              <p>We do not sell, rent, or trade your personal information. Any information provided through contact forms, newsletter sign-ups, CSR enquiries, or volunteer applications is utilized exclusively for organizational communication and program updates.</p>
              <p>For questions regarding your data or to unsubscribe from bulletins, please email <a href="mailto:contact@anandgroupcharitabletrust.org.in">contact@anandgroupcharitabletrust.org.in</a>.</p>
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
            <div style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#111827' }}>
              <p>All materials, including text, photographs, and brand assets displayed on this website, are the intellectual property of Anand Group Charitable Trust.</p>
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
              aria-label="Close Lightbox"
            >
              &times;
            </button>
            <div className="lightbox-img-wrap">
              <img src={lightboxData.src} alt={lightboxData.title} />
            </div>
            <div className="lightbox-caption-wrap">
              <div>
                <span className="gallery-item-tag" style={{ color: 'var(--color-blue-heading)' }}>{lightboxData.tag}</span>
                <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#111827' }}>{lightboxData.title}</h4>
              </div>
              <button
                type="button"
                className="ash-btn ash-btn-primary ash-btn-sm"
                onClick={() => {
                  setLightboxData(null);
                  setActiveModal('donation');
                }}
              >
                Support Cause
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Alert */}
      {toast && (
        <div className={`ash-toast ${toast.type}`}>
          <i className="fa fa-check-circle"></i>
          <span>{toast.message}</span>
        </div>
      )}
    </>
  );
}
