import React from 'react';
import Link from 'next/link';
import { ACTIVITY_BOOK_DETAILS } from '../data/awarenessPrograms';

export default function ActivityBookShowcase({ compact = false }) {
  return (
    <div
      style={{
        background: 'var(--color-white)',
        border: '2px solid var(--color-border-amber)',
        borderRadius: 'var(--radius-lg)',
        padding: compact ? '2rem' : '2.75rem',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2.25rem',
          alignItems: 'center',
        }}
      >
        {/* Visual Editorial Activity Book Cover Card */}
        <div
          style={{
            background: 'linear-gradient(145deg, #FFFEF0 0%, #FEF9C3 55%, #FDE047 100%)',
            border: '2px solid var(--color-yellow-secondary)',
            borderRadius: 'var(--radius-md)',
            padding: '2.25rem 1.75rem',
            textAlign: 'center',
            boxShadow: '0 14px 32px rgba(202, 138, 4, 0.16)',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#111827',
              color: '#FACC15',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.8rem',
              borderRadius: '999px',
              marginBottom: '1.25rem',
            }}
          >
            <i className="fa fa-book-open"></i>
            <span>{ACTIVITY_BOOK_DETAILS.badge}</span>
          </div>

          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '2px solid var(--color-yellow-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              color: 'var(--color-yellow-deep)',
              fontSize: '1.85rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <i className="fa fa-child-reaching"></i>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              color: '#111827',
              marginBottom: '0.65rem',
              lineHeight: '1.3',
            }}
          >
            Digital Wellness &amp; Offline Learning Activity Book
          </h3>

          <p
            style={{
              fontSize: '0.88rem',
              color: '#4B5563',
              margin: '0 0 1.25rem 0',
              lineHeight: '1.55',
            }}
          >
            Published &amp; Distributed by Anand Group Charitable Trust
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1rem',
              border: '1px solid var(--color-border-amber)',
              fontSize: '0.82rem',
              color: '#111827',
              fontWeight: 600,
            }}
          >
            <i className="fa fa-check-circle" style={{ color: 'var(--color-yellow-deep)', marginRight: '0.45rem' }}></i>
            Designed for Screen Balance &amp; Constructive Habits
          </div>
        </div>

        {/* Book Details & Purpose */}
        <div>
          <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>
            <i className="fa fa-book"></i> Digital Wellness Resource
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.65rem' : '2rem',
              color: 'var(--color-text)',
              marginBottom: '0.85rem',
              lineHeight: '1.25',
            }}
          >
            {ACTIVITY_BOOK_DETAILS.sectionTitle}
          </h2>

          <p style={{ color: 'var(--color-text)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem', fontWeight: 500 }}>
            {ACTIVITY_BOOK_DETAILS.shortIntro}
          </p>

          <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--color-bg-cream)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <strong style={{ color: 'var(--color-yellow-dark)', display: 'block', fontSize: '0.84rem', marginBottom: '0.2rem' }}>
                Educational Purpose
              </strong>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.55' }}>
                {ACTIVITY_BOOK_DETAILS.purpose}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.85rem' }}>
              <div style={{ background: 'var(--color-bg-cream)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-yellow-dark)', display: 'block', fontSize: '0.84rem', marginBottom: '0.2rem' }}>
                  Intended Audience
                </strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  {ACTIVITY_BOOK_DETAILS.audience}
                </span>
              </div>
              <div style={{ background: 'var(--color-bg-cream)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-yellow-dark)', display: 'block', fontSize: '0.84rem', marginBottom: '0.2rem' }}>
                  Distribution Status
                </strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  {ACTIVITY_BOOK_DETAILS.distributionStatus}
                </span>
              </div>
            </div>
          </div>

          {!compact && (
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {ACTIVITY_BOOK_DETAILS.keyFocusAreas.map((point, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.25rem' }}></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/initiatives/mobile-phone-awareness" className="ash-btn ash-btn-primary">
              <i className="fa fa-mobile-screen-button"></i>
              <span>Explore Mobile Phone Awareness</span>
            </Link>
            <Link href="/contact" className="ash-btn ash-btn-outline">
              <span>Request for School Outreach</span>
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

