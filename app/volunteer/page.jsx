'use client';

import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    skills: '',
    availability: 'weekends',
    initiatives: ['Social & Environmental Awareness'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const initiativeOptions = [
    'Social & Environmental Awareness (Swachh Bharat)',
    'Education & Child Development (School Mentorship)',
    'Temple Development & Annadanam Seva',
    'Healthcare & Medical Screening Camps',
    'Elderly Care & Senior Home Assistance',
    'Naadha Ashram Sanctuary Support',
  ];

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const exists = prev.initiatives.includes(option);
      if (exists) {
        return { ...prev, initiatives: prev.initiatives.filter((item) => item !== option) };
      } else {
        return { ...prev, initiatives: [...prev.initiatives, option] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name, email address, and phone number.');
      return;
    }

    setSubmitting(true);
    // Simulate real local form processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }, 700);
  };

  return (
    <>
      <PageBanner
        badge="Join the Movement"
        badgeIcon="fa-hands-helping"
        title="Volunteer With Anand Group Charitable Trust"
        highlightWord="Volunteer"
        lead="Dedicate your time, skills, and energy to grassroots seva. Join hundreds of students, professionals, and community volunteers making a tangible difference in our villages and neighborhoods."
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'Volunteer', href: '/volunteer' },
        ]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
            {/* Form Column */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <span className="section-eyebrow" style={{ marginBottom: '0.4rem' }}>
                  <i className="fa fa-user-plus"></i> Volunteer Application
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', margin: '0.35rem 0' }}>
                  Register as a Volunteer
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Fill out the form below. Our volunteer coordination team will connect with you for upcoming weekend field drives and community events.
                </p>
              </div>

              {/* Inline Submission Status (STRICTLY NO POP-UPS) */}
              {submitted ? (
                <div className="inline-form-alert success">
                  <i className="fa fa-circle-check"></i>
                  <div>
                    <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem', color: '#166534' }}>
                      Thank You for Stepping Forward!
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: '#14532D' }}>
                      We have received your volunteer application, <strong>{formData.name}</strong>. Our state coordinator will reach out to you via phone (<strong>{formData.phone}</strong>) and email to introduce upcoming drives in your area.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      style={{
                        marginTop: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: '#166534',
                        textDecoration: 'underline',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      Submit another application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="inline-form-alert error">
                      <i className="fa fa-circle-exclamation"></i>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vol-name">Full Name *</label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="vol-phone">Phone Number *</label>
                      <input
                        id="vol-phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vol-email">Email Address *</label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="vol-city">City / District</label>
                      <input
                        id="vol-city"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Visakhapatnam / Hyderabad"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="vol-skills">Profession, Skills or Field of Study</label>
                    <input
                      id="vol-skills"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Teaching, Doctor, IT Professional, Student, Social Worker"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Initiatives You Are Interested In Supporting:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem', marginTop: '0.5rem' }}>
                      {initiativeOptions.map((opt, idx) => {
                        const checked = formData.initiatives.includes(opt);
                        return (
                          <label
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              fontSize: '0.92rem',
                              color: 'var(--color-text)',
                              cursor: 'pointer',
                              padding: '0.5rem 0.75rem',
                              background: checked ? 'var(--color-yellow-tint)' : 'var(--color-bg-cream)',
                              border: checked ? '1px solid var(--color-border-amber)' : '1px solid var(--color-border)',
                              borderRadius: 'var(--radius-sm)',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleCheckboxChange(opt)}
                              style={{ accentColor: 'var(--color-yellow-deep)', width: '16px', height: '16px' }}
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="vol-avail">Time Availability</label>
                    <select
                      id="vol-avail"
                      className="form-input"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    >
                      <option value="weekends">Weekends Only (Saturdays &amp; Sundays)</option>
                      <option value="weekdays">Weekdays (Evenings / Afternoons)</option>
                      <option value="flexible">Flexible / Project-Based</option>
                      <option value="monthly">Monthly Community Drives</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                    <label className="form-label" htmlFor="vol-msg">Short Note / Why You Want to Join Us</label>
                    <textarea
                      id="vol-msg"
                      rows={4}
                      className="form-input"
                      placeholder="Share a little bit about yourself and any prior community seva experience..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="ash-btn ash-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {submitting ? (
                      <>
                        <i className="fa fa-spinner fa-spin"></i>
                        <span>Registering Your Application...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa fa-check"></i>
                        <span>Submit Volunteer Registration</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Guidelines */}
            <aside className="initiative-sidebar">
              <div className="sidebar-box highlight">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-heart" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Volunteer Experience
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Volunteering with Anand Group Charitable Trust is a practical, ground-level journey:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                    <span>Certificate of Volunteer Appreciation issued for completed projects.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                    <span>Student community credits and college service certificates supported.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                    <span>All necessary safety gear, gloves, and brooms provided during cleanliness drives.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                    <span>Direct mentorship under experienced trust leadership.</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Volunteer Desk
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                  Prefer to call directly? Speak with our volunteer coordinators:
                </p>
                <p style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.35rem 0' }}>
                  +91 98481 23456
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: 0 }}>
                  volunteer@anandgroupcharitabletrust.org.in
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
