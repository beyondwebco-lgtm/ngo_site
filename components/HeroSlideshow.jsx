'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
    alt: 'Youth Inspiration School Courtyard Assembly — Educational Awareness',
    title: 'School Educational Awareness',
  },
  {
    src: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
    alt: 'Rural Government High School Outreach and Mentorship Program',
    title: 'Student Development & Outreach',
  },
  {
    src: '/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp',
    alt: 'Swachh Bharat Cleanliness Drive on School Campus with Volunteers',
    title: 'Swachh Bharat & Social Action',
  },
  {
    src: '/images/education/anand-vidyalaya-school-anniversary-celebration.webp',
    alt: 'Anand Vidyalaya School 1st Anniversary Celebrations & Cultural Heritage',
    title: 'Teacher Training & Values',
  },
  {
    src: '/images/haritha-haram/haritha-haram-community-tree-plantation-drive.webp',
    alt: 'Haritha Haram Greenery and Community Tree Plantation Drive',
    title: 'Environmental & Community Seva',
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Next / Prev slide handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Pause when tab is hidden to save battery & prevent erratic jumps
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // 5-second automatic rotation
  useEffect(() => {
    if (!isTabVisible) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isTabVisible, currentIndex]);

  return (
    <section className="hero-slideshow-container" id="hero" aria-label="Hero Introduction">
      {/* Background Slideshow Track */}
      <div className="hero-slideshow-track" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`hero-slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="hero-slide-img"
            />
          </div>
        ))}
      </div>

      {/* Cinematic Dark Gradient Overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Hero Content Overlay */}
      <div className="ash-container hero-content-container">
        <div className="hero-cinematic-content">
          {/* Eyebrow Pill */}
          <div className="hero-cinematic-eyebrow">
            <span className="hero-eyebrow-accent-dot" aria-hidden="true"></span>
            <span>REGISTERED CHARITABLE TRUST &bull; 80G APPROVED &bull; AP &amp; TELANGANA</span>
          </div>

          {/* Main Cinematic Heading */}
          <h1 className="hero-cinematic-title">
            Empowering Education.<br />
            <span className="hero-title-highlight">Creating Awareness.</span><br />
            Transforming Communities.
          </h1>

          {/* Hero Description */}
          <p className="hero-cinematic-desc">
            Anand Group Charitable Trust works to build a brighter future through educational awareness, teacher training, child psychology sessions, responsible mobile usage programmes, mental wellness initiatives, and meaningful social projects.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-cinematic-buttons">
            <Link
              href="/initiatives"
              className="hero-btn-primary"
              aria-label="Explore Our Initiatives"
            >
              <span>Explore Our Initiatives</span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>

            <Link
              href="/impact"
              className="hero-btn-secondary"
              aria-label="Our Social Impact"
            >
              <i className="fa fa-chart-line" aria-hidden="true"></i>
              <span>Our Social Impact</span>
            </Link>
          </div>

          {/* Compact Impact Statistics */}
          <div className="hero-stats-ribbon" aria-label="Key Impact Highlights">
            <div className="hero-stat-block">
              <div className="hero-stat-num">5,000+</div>
              <div className="hero-stat-label">Students Mentored</div>
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat-block">
              <div className="hero-stat-num">100+</div>
              <div className="hero-stat-label">Cleanliness Drives</div>
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat-block">
              <div className="hero-stat-num">25,000+</div>
              <div className="hero-stat-label">Meals Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="hero-nav-arrow hero-nav-prev"
        aria-label="Previous Slide"
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hero-nav-arrow hero-nav-next"
        aria-label="Next Slide"
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>

      {/* Bottom Pagination Dots */}
      <div
        className="hero-pagination-dots"
        role="tablist"
        aria-label="Slideshow pagination controls"
      >
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Slide ${idx + 1}: ${slide.title}`}
            className={`hero-dot-indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
