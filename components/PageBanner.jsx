import React from 'react';
import Link from 'next/link';

export default function PageBanner({
  badge,
  badgeIcon = 'fa-seedling',
  title,
  highlightWord = '',
  lead,
  breadcrumbs = [],
}) {
  // If highlightWord is passed, highlight that word in gold
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} style={{ color: 'var(--color-yellow-deep)' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="page-banner-section">
      <div className="ash-container">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link href="/" className="breadcrumb-link">
                  <i className="fa fa-home" style={{ marginRight: '0.35rem' }}></i>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <li className="breadcrumb-separator">
                      <i className="fa fa-angle-right"></i>
                    </li>
                    <li className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                      {isLast || !crumb.href ? (
                        <span aria-current="page">{crumb.label}</span>
                      ) : (
                        <Link href={crumb.href} className="breadcrumb-link">
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Banner Content */}
        <div className="page-banner-content">
          {badge && (
            <div className="section-eyebrow" style={{ marginBottom: '0.85rem' }}>
              <i className={`fa ${badgeIcon}`}></i> {badge}
            </div>
          )}
          <h1 className="page-banner-title">{renderTitle()}</h1>
          {lead && <p className="page-banner-lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}

