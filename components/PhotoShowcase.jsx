'use client';

import React, { useState } from 'react';

export default function PhotoShowcase({
  title = 'Field Action Photographs',
  description = 'Authentic photography documenting our ground-level initiatives and volunteer drives:',
  photos = [],
  icon = 'fa-camera-retro',
}) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="swachh-photo-showcase" style={{ marginTop: '2.5rem' }}>
      <div className="swachh-showcase-title">
        <i className={`fa ${icon}`} style={{ color: 'var(--color-yellow-deep)' }}></i>
        {title}
      </div>
      {description && <p className="swachh-showcase-desc">{description}</p>}

      {/* Inline Expanded Preview Display if user selects an image */}
      {selectedPhoto && (
        <div
          className="inline-photo-viewer"
          style={{
            background: 'var(--color-bg-cream)',
            border: '2px solid var(--color-border-amber)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'var(--color-yellow-tint)',
                color: 'var(--color-yellow-dark)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.25rem 0.65rem',
                borderRadius: '999px',
              }}
            >
              {selectedPhoto.tag}
            </span>
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
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
              maxHeight: '520px',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              style={{ maxWidth: '100%', maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
          <div style={{ marginTop: '0.85rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '0.35rem' }}>
              {selectedPhoto.title}
            </h4>
            {selectedPhoto.caption && (
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Grid of Photo Cards */}
      <div className="swachh-photo-grid">
        {photos.map((photo, pIdx) => {
          const isSelected = selectedPhoto?.src === photo.src;
          return (
            <div
              key={pIdx}
              className={`swachh-photo-item ${isSelected ? 'active-photo' : ''}`}
              onClick={() => setSelectedPhoto(photo)}
              title={`Click to view ${photo.title} inline`}
              style={{
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--color-yellow-deep)' : '1px solid var(--color-border)',
              }}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="swachh-photo-caption">
                <span style={{ fontSize: '0.72rem', color: 'var(--color-yellow-deep)', fontWeight: 600, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {photo.tag}
                </span>
                {photo.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

