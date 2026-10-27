/**
 * AASHRAYA FOUNDATION — Interactive Core Script
 * Empowering Lives. Building Hope.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Navbar Transition
  const navbar = document.getElementById('ashNavbar');
  const handleScrollNavbar = () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    if (mobileToggle) mobileToggle.classList.add('open');
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (mobileToggle) mobileToggle.classList.remove('open');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 3. Active Nav Highlighting on Scroll
  const navSections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-item-link');

  const highlightNavOnScroll = () => {
    const scrollPos = window.scrollY + 120;
    navSections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 4. Reveal Animations on Scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 5. Impact Counter Animation
  const counterElements = document.querySelectorAll('.stat-counter');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1800;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(ease * target);
        counter.textContent = currentVal.toLocaleString('en-IN') + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString('en-IN') + suffix;
        }
      };
      requestAnimationFrame(updateCount);
    });
  };

  const impactSection = document.getElementById('impact');
  if (impactSection && 'IntersectionObserver' in window) {
    const impactObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    impactObserver.observe(impactSection);
  }

  // 6. Gallery Filtering & Lightbox
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('ashLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxClose = document.getElementById('lightboxClose');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || 'Aashraya Foundation';
      const tag = item.querySelector('.gallery-item-tag')?.textContent || 'Initiative';

      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxTag) lightboxTag.textContent = tag;
      if (lightboxModal) {
        lightboxModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // 7. Generic Modal Controls
  window.ashOpenModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.ashCloseModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // Close modals on backdrop click or close buttons
  document.querySelectorAll('.ash-modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.ash-modal-backdrop');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key closes modals and lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      document.querySelectorAll('.ash-modal-backdrop.open').forEach(modal => {
        modal.classList.remove('open');
      });
      document.body.style.overflow = '';
    }
  });

  // 8. Dynamic Initiative Modal Populator
  const initiativeData = {
    'education': {
      title: 'Education for Every Child',
      tag: 'Grassroots Learning Program',
      image: 'includes/asset/image/init_education.jpg',
      lead: 'Breaking the cycle of generational poverty begins with continuous, quality learning opportunities for every girl and boy.',
      desc: 'Our educational programs focus on bridging critical learning gaps in government and village schools. We provide supplementary remedial classes, distribute essential curriculum books, notebooks, and learning kits, and facilitate interactive digital classrooms where rural children can discover the joy of discovery.',
      goals: [
        'Remedial evening tutoring in underserved village clusters',
        'Distribution of essential study materials and uniforms',
        'Digital literacy basics and library corners',
        'Parental sensitization to prevent early school dropout'
      ]
    },
    'healthcare': {
      title: 'Healthcare & Wellness Camps',
      tag: 'Preventive & Primary Care',
      image: 'includes/asset/image/init_healthcare.jpg',
      lead: 'Empowering communities through accessible medical consultations, diagnostic screenings, and preventive health guidance.',
      desc: 'Many underserved rural families lack easy access to primary medical centers. Our mobile medical camps bring certified doctors, pediatricians, and nurses directly to village doorsteps, providing general checkups, anemia screening, vision tests, and free basic medicines.',
      goals: [
        'Regular free general checkup and pediatric screening camps',
        'Maternal and adolescent health guidance and hygiene kits',
        'Nutritional monitoring and micronutrient guidance',
        'Referral pathways to district health institutions'
      ]
    },
    'women': {
      title: 'Women Empowerment & Skill Building',
      tag: 'Self-Reliance & Livelihood',
      image: 'includes/asset/image/init_women.jpg',
      lead: 'When a woman is empowered, she uplifts her entire household and sets a new precedent for her community.',
      desc: 'We facilitate practical vocational training centers where rural and semi-urban women learn tailoring, embroidery, textile crafts, and digital financial management. Through Self-Help Groups (SHGs), participants receive peer mentoring, basic accounting skills, and access to fair market linkages.',
      goals: [
        'Certificate courses in tailoring, sewing, and artisanal crafts',
        'Financial literacy and banking enablement for women',
        'Formation and mentorship of Self-Help Groups (SHGs)',
        'Market linkage workshops to sell hand-crafted goods'
      ]
    },
    'child-welfare': {
      title: 'Child Welfare & Protection',
      tag: 'Safe & Nurturing Environments',
      image: 'includes/asset/image/init_child_welfare.jpg',
      lead: 'Every child deserves a secure childhood filled with warmth, play, emotional nourishment, and zero fear.',
      desc: 'We support local community spaces where children can learn creatively after school hours, participate in arts and crafts, sports, and life-skills workshops. We actively advocate against child labor and foster child protection committees comprising village elders and educators.',
      goals: [
        'Safe community learning hubs with recreational spaces',
        'Child rights awareness campaigns and community protection',
        'Nutrition reinforcement and emotional well-being mentorship',
        'Extracurricular arts, music, and sports engagement'
      ]
    },
    'community': {
      title: 'Sustainable Community Development',
      tag: 'Grassroots Resilience',
      image: 'includes/asset/image/init_community.jpg',
      lead: 'Building self-sustaining, clean, and green communities through shared collective action.',
      desc: 'True empowerment occurs when local communities take active ownership of their environment and common assets. We facilitate community tree plantations, clean drinking water awareness, solar lighting for village study halls, and waste management practices.',
      goals: [
        'Native sapling plantation drives and green cover expansion',
        'Safe drinking water purification awareness',
        'Community clean-up and sanitation awareness sessions',
        'Solar lanterns and energy solutions for study centers'
      ]
    }
  };

  window.ashOpenInitiativeModal = function (key) {
    const data = initiativeData[key];
    if (!data) return;

    const modal = document.getElementById('initiativeModal');
    if (!modal) return;

    document.getElementById('initModalTitle').textContent = data.title;
    document.getElementById('initModalTag').textContent = data.tag;
    document.getElementById('initModalLead').textContent = data.lead;
    document.getElementById('initModalDesc').textContent = data.desc;
    document.getElementById('initModalImg').src = data.image;

    const listContainer = document.getElementById('initModalGoals');
    if (listContainer) {
      listContainer.innerHTML = '';
      data.goals.forEach(goal => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa fa-check-circle" style="color: #C69B55; margin-right: 8px;"></i> ${goal}`;
        listContainer.appendChild(li);
      });
    }

    ashOpenModal('initiativeModal');
  };

  // 9. Toast Notification System
  window.ashShowToast = function (message, type = 'success') {
    const container = document.getElementById('ashToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `ash-toast ${type}`;
    toast.innerHTML = `
      <i class="fa ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };

  // 10. Contact Form Submission & Validation
  const contactForm = document.getElementById('aashrayaContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const phone = document.getElementById('contactPhone');
      const subject = document.getElementById('contactSubject');
      const message = document.getElementById('contactMessage');

      let isValid = true;

      // Simple validation
      [name, email, message].forEach(input => {
        if (!input || !input.value.trim()) {
          input.style.borderColor = '#c93b2b';
          isValid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        ashShowToast('Please fill in all required fields.', 'error');
        return;
      }

      // Simulate successful submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactForm.reset();
        ashShowToast('Thank you! Your message has been received by Aashraya Foundation. We will connect with you shortly.');
      }, 900);
    });
  }

  // 11. Donation Modal Preset Buttons
  const presetButtons = document.querySelectorAll('.amount-preset-btn');
  const customAmountInput = document.getElementById('donationCustomAmount');

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => {
        b.style.backgroundColor = '';
        b.style.color = '';
      });
      btn.style.backgroundColor = 'var(--color-primary)';
      btn.style.color = '#fff';

      const amount = btn.getAttribute('data-amount');
      if (customAmountInput) customAmountInput.value = amount;
    });
  });

  const donationForm = document.getElementById('donationEnquiryForm');
  if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      ashCloseModal('donationModal');
      donationForm.reset();
      ashShowToast('Thank you for your generous pledge! Our outreach team will share official trust documentation and contribution details.');
    });
  }

  // 12. Volunteer Form Submission
  const volunteerForm = document.getElementById('volunteerForm');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      ashCloseModal('volunteerModal');
      volunteerForm.reset();
      ashShowToast('Thank you for applying to volunteer with Aashraya Foundation! We are excited to welcome you to the movement.');
    });
  }

  // 13. Partner Form Submission
  const partnerForm = document.getElementById('partnerForm');
  if (partnerForm) {
    partnerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      ashCloseModal('partnerModal');
      partnerForm.reset();
      ashShowToast('Partnership inquiry received! Our institutional collaboration team will reach out with the proposal docket.');
    });
  }

  // 14. Newsletter Inline Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        emailInput.value = '';
        ashShowToast('Subscribed! You will receive our quarterly Aashraya Foundation impact bulletin.');
      }
    });
  }

});
