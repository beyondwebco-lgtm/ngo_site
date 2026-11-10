import React from 'react';
import Link from 'next/link';

export default function InitiativeCard({ initiative, index }) {
  const { slug, title, tag, image, lead } = initiative;

  return (
    <article className="initiative-card">
      <div className="initiative-img-container">
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span className="initiative-badge">{tag}</span>
      </div>
      <div className="initiative-body">
        <h3 className="initiative-title">
          {index !== undefined ? `${index}. ` : ''}{title}
        </h3>
        <p className="initiative-desc">{lead}</p>
        <div className="initiative-footer">
          <Link
            href={`/initiatives/${slug}`}
            className="learn-more-btn"
            aria-label={`Explore ${title}`}
          >
            <span>Explore Initiative</span>
            <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}

