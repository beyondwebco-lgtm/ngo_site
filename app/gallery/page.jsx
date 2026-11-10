'use client';

import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageBanner
        badge="Moments in Seva"
        badgeIcon="fa-camera-retro"
        title="Visual Chronicles of Hope &amp; Transformation"
        highlightWord="Chronicles"
        lead="Explore authentic field photography documenting our Swachh Bharat street drives, student mentorship assemblies, Haritha Haram tree plantations, Naadha Ashram sanctuary care, and rural medical seva."
        breadcrumbs={[{ label: 'Photo Gallery', href: '/gallery' }]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          {/* Category Filter Tabs */}
          <div className="gallery-filter-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPhoto(null);
                  }}
                  className={`gallery-filter-btn ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '999px',
                    border: isActive ? '1px solid var(--color-yellow-deep)' : '1px solid var(--color-border)',
                    background: isActive ? 'var(--color-yellow-primary)' : 'var(--color-white)',
                    color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <i className={`fa ${cat.icon}`}></i>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Inline Active Photo Showcase (Directly in page layout — STRICTLY NO POP-UPS) */}
          {selectedPhoto && (
            <div
              className="inline-gallery-focus-panel"
              style={{
                background: 'var(--color-bg-cream)',
                border: '2px solid var(--color-border-amber)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '3rem',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      background: 'var(--color-yellow-primary)',
                      color: 'var(--color-text)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.85rem',
                      borderRadius: '999px',
                    }}
                  >
                    {selectedPhoto.tag}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Selected Photograph
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-text)',
                    fontSize: '1rem',
                  }}
                  title="Close preview"
                  aria-label="Close preview"
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>

              <div
                style={{
                  width: '100%',
                  maxHeight: '620px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  style={{ maxWidth: '100%', maxHeight: '620px', objectFit: 'contain' }}
                />
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {selectedPhoto.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          )}

          {/* Photo Count Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
            <span>Showing <strong>{filteredItems.length}</strong> authentic photographs</span>
            <span style={{ fontSize: '0.85rem' }}>
              <i className="fa fa-info-circle" style={{ marginRight: '0.35rem', color: 'var(--color-yellow-deep)' }}></i>
              Click any photograph to view high-resolution details inline
            </span>
          </div>

          {/* Gallery Responsive Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredItems.map((item) => {
              const isSelected = selectedPhoto?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedPhoto(item);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'var(--color-white)',
                    border: isSelected ? '2px solid var(--color-yellow-deep)' : '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  title={`Click to view ${item.title} inline`}
                >
                  <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', position: 'relative', background: 'var(--color-bg-warm)' }}>
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.94)',
                        color: 'var(--color-yellow-dark)',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
