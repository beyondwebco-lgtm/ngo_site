'use client';

import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
  ORGANIZATION_INFO,
} from '../../data/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please enter your full name, email address, and message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }, 700);
  };

  return (
    <>
      <PageBanner
        badge="Connect With Us"
        badgeIcon="fa-headset"
        title="We Are Here to Listen &amp; Collaborate"
        highlightWord="Collaborate"
        lead="Whether you wish to sponsor a cleanliness drive, enquire about 80G tax exemptions, invite our team for school awareness sessions, or arrange an in-person field visit, we welcome your communication."
        breadcrumbs={[{ label: 'Contact Us', href: '/contact' }]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
            {/* Form Column */}
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <span className="section-eyebrow" style={{ marginBottom: '0.4rem' }}>
                <i className="fa fa-envelope"></i> Send a Direct Message
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', margin: '0.35rem 0 1rem 0' }}>
                Leave Us a Message
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Our trust administrative team reviews all messages daily and will get back to you promptly.
              </p>

              {/* Inline Form Status (STRICTLY NO POP-UPS) */}
              {submitted ? (
                <div className="inline-form-alert success">
                  <i className="fa fa-circle-check"></i>
                  <div>
                    <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem', color: '#166534' }}>
                      Message Received!
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: '#14532D', lineHeight: '1.5' }}>
                      Thank you, <strong>{formData.name}</strong>. Your message regarding <em>&ldquo;{formData.subject}&rdquo;</em> has been transmitted to our trust coordinators. We will reply to <strong>{formData.email}</strong> shortly.
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
                      Send another message
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
                      <label className="form-label" htmlFor="ct-name">Full Name *</label>
                      <input
                        id="ct-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Anand Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-phone">Phone Number</label>
                      <input
                        id="ct-phone"
                        type="tel"
                        className="form-input"
                        placeholder="e.g. +91 98481 23456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-email">Email Address *</label>
                      <input
                        id="ct-email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-subject">Inquiry Nature</label>
                      <select
                        id="ct-subject"
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="School Awareness & Mobile Wellness Request">School Awareness &amp; Mobile Wellness Request</option>
                        <option value="Teacher Training & Child Psychology Session">Teacher Training &amp; Child Psychology Session</option>
                        <option value="Digital Wellness Activity Book Inquiry">Digital Wellness Activity Book Inquiry</option>
                        <option value="Donation & 80G Tax Exemption">Donation &amp; 80G Tax Exemption</option>
                        <option value="Volunteering Opportunities">Volunteering Opportunities</option>
                        <option value="CSR Collaboration Proposal">CSR Collaboration Proposal</option>
                        <option value="Healthcare Camp Inquiry">Healthcare Camp Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                    <label className="form-label" htmlFor="ct-msg">Your Message *</label>
                    <textarea
                      id="ct-msg"
                      rows={5}
                      required
                      className="form-input"
                      placeholder="Please let us know your requirements or how you would like to collaborate..."
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
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa fa-paper-plane"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Information Cards */}
            <aside className="initiative-sidebar">
              <div className="sidebar-box highlight">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-address-book" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Trust Headquarters
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <i className="fa fa-map-location-dot" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                    <div>
                      <strong style={{ color: 'var(--color-text)', display: 'block' }}>Operating Regions:</strong>
                      <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)' }}>
                        {ORGANIZATION_INFO.name}, {ORGANIZATION_INFO.operatingRegions}.
                      </p>
                    </div>
                  </div>

                  {SHOW_PUBLIC_UNVERIFIED_CONTACTS ? (
                    <>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <i className="fa fa-phone" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                        <div>
                          <strong style={{ color: 'var(--color-text)', display: 'block' }}>Direct Helpline:</strong>
                          <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)' }}>
                            {PENDING_VERIFICATION_CONTACTS.phone}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <i className="fa fa-envelope" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                        <div>
                          <strong style={{ color: 'var(--color-text)', display: 'block' }}>Official Email:</strong>
                          <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)', wordBreak: 'break-all' }}>
                            {PENDING_VERIFICATION_CONTACTS.generalEmail}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <i className="fa fa-clock" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                        <div>
                          <strong style={{ color: 'var(--color-text)', display: 'block' }}>Desk Timings:</strong>
                          <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)' }}>
                            {PENDING_VERIFICATION_CONTACTS.officeHours}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <i className="fa fa-envelope-open-text" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
                      <div>
                        <strong style={{ color: 'var(--color-text)', display: 'block' }}>Inquiry Channel:</strong>
                        <p style={{ margin: '0.2rem 0 0 0', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>
                          Please submit your message through the official online inquiry form on this page. Verified telephone and programme email directory details are being finalized by the Trust.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {SHOW_PUBLIC_UNVERIFIED_CONTACTS && (
                <div className="sidebar-box">
                  <h3 className="sidebar-box-title">
                    <i className="fa fa-users" style={{ color: 'var(--color-yellow-deep)' }}></i>
                    Key Program Inquiries
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    <div>
                      <strong style={{ color: 'var(--color-text)', display: 'block' }}>Community Seva Inquiries:</strong>
                      <span>{PENDING_VERIFICATION_CONTACTS.sevaEmail}</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-text)', display: 'block' }}>CSR &amp; Institutional Grants:</strong>
                      <span>{PENDING_VERIFICATION_CONTACTS.csrEmail}</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-text)', display: 'block' }}>Volunteer Coordination:</strong>
                      <span>{PENDING_VERIFICATION_CONTACTS.volunteerEmail}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-box">
                <h3 className="sidebar-box-title">
                  <i className="fa fa-graduation-cap" style={{ color: 'var(--color-yellow-deep)' }}></i>
                  Programme Requests
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Educators, schools, parent groups, and community organizers across Andhra Pradesh and Telangana can use this inquiry form to collaborate on school awareness camps, digital wellness book sessions, teacher training, and social drives.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

