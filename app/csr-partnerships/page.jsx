'use client';

import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';

export default function CsrPartnershipsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phone: '',
    thematicArea: 'Environmental Sustainability (Swachh Bharat & Haritha Haram)',
    budgetRange: '₹5 Lakhs - ₹15 Lakhs',
    projectScope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const scheduleViiPillars = [
    {
      clause: 'Clause (iv) — Environmental Sustainability',
      title: 'Swachh Bharat & Haritha Haram Corridors',
      desc: 'Planting urban green belts, developing village sanitation infrastructure, conducting community anti-plastic and water conservation drives.',
      icon: 'fa-tree',
    },
    {
      clause: 'Clause (ii) — Promoting Education',
      title: 'Government School Infrastructure & STEM Labs',
      desc: 'Upgrading classroom furniture, setting up computer laboratories, distributing learning materials and science models to underprivileged schools.',
      icon: 'fa-school',
    },
    {
      clause: 'Clause (i) — Eradicating Hunger & Healthcare',
      title: 'Naadha Ashram Nutrition & Rural Health Camps',
      desc: '365-day nutrition, pure drinking water systems, and periodic specialized diagnostic medical check-ups in rural Telangana and Andhra Pradesh.',
      icon: 'fa-heart-pulse',
    },
    {
      clause: 'Clause (iii) — Senior Citizen Care & Welfare',
      title: 'Elderly Care Facilities & Mobility Aids',
      desc: 'Supplying monthly rations, bedding, healthcare monitoring, and wheelchairs to old age homes and abandoned senior sanctuaries.',
      icon: 'fa-hands-holding-child',
    },
    {
      clause: 'Clause (v) — Cultural Heritage Preservation',
      title: 'Historic Temple Restoration & Annadanam',
      desc: 'Restoring heritage architectural sites, paving temple courtyards, creating pilgrim hygiene amenities, and traditional sacred food distribution.',
      icon: 'fa-gopuram',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.workEmail.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields including Company Name, Contact Person, Work Email, and Phone Number.');
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
        badge="Corporate Social Responsibility"
        badgeIcon="fa-handshake"
        title="Schedule VII Compliant CSR Partnerships"
        highlightWord="Partnerships"
        lead="Partner with Anand Group Charitable Trust to deliver verified, high-impact social initiatives aligned with Section 135 of the Indian Companies Act, 2013, supported by comprehensive audit documentation."
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'CSR Partnerships', href: '/csr-partnerships' },
        ]}
      />

      {/* Overview & Schedule VII Mapping */}
      <section className="subpage-section">
        <div className="ash-container">
          <div className="section-header text-center">
            <div className="section-eyebrow">
              <i className="fa fa-scale-balanced"></i> Statutory Compliance
            </div>
            <h2 className="section-title">Schedule VII Thematic Alignment</h2>
            <p className="section-subtitle">
              Every initiative is structured to meet statutory Indian CSR mandates with full transparency and verified on-the-ground impact.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.75rem',
              marginTop: '3rem',
            }}
          >
            {scheduleViiPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-yellow-deep)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'var(--color-yellow-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-yellow-deep)',
                      fontSize: '1.25rem',
                    }}
                  >
                    <i className={`fa ${pillar.icon}`}></i>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-yellow-dark)', background: 'var(--color-bg-cream)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-border-amber)' }}>
                    {pillar.clause}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.65rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Reporting Framework */}
      <section className="ash-section-ivory" style={{ padding: '5rem 0' }}>
        <div className="ash-container">
          <div className="impact-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">
                <i className="fa fa-file-shield"></i> Corporate Assurance
              </span>
              <h2 className="section-title">Institutional Governance &amp; Reporting</h2>
              <p className="impact-text-lead" style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                We understand that corporate partners require strict compliance, board-level reporting, and meticulous financial accountability.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-yellow-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', fontWeight: 700, flexShrink: 0 }}>1</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 0.25rem 0' }}>Tailored Project Charters</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>Customized MoUs outlining specific milestones, geographic areas, and target beneficiary cohorts.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-yellow-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', fontWeight: 700, flexShrink: 0 }}>2</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 0.25rem 0' }}>Quarterly Milestone &amp; Impact Audits</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>High-resolution photo logs, attendance records, GPS-tagged distribution data, and qualitative case studies.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-yellow-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', fontWeight: 700, flexShrink: 0 }}>3</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 0.25rem 0' }}>Chartered Accountant Fund Utilization Certificates</h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>Independent CA certified fund utilization documentation for seamless statutory board disclosures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CSR Enquiry Form (STRICTLY NO POP-UPS) */}
            <div style={{ background: 'var(--color-white)', border: '2px solid var(--color-border-amber)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <span className="section-eyebrow" style={{ marginBottom: '0.4rem' }}>
                <i className="fa fa-envelope-open-text"></i> Corporate Desk
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text)', margin: '0.35rem 0 1rem 0' }}>
                Initiate a CSR Partnership
              </h3>

              {submitted ? (
                <div className="inline-form-alert success">
                  <i className="fa fa-circle-check"></i>
                  <div>
                    <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem', color: '#166534' }}>
                      Enquiry Received!
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: '#14532D', lineHeight: '1.5' }}>
                      Thank you, <strong>{formData.contactPerson}</strong>. Our CSR director will review the requirements for <strong>{formData.companyName}</strong> and connect with you via <strong>{formData.workEmail}</strong> within 1 business day.
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
                      Submit another enquiry
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

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label" htmlFor="csr-company">Company / Corporate Entity *</label>
                    <input
                      id="csr-company"
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Acme Industries Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="csr-person">Contact Person *</label>
                      <input
                        id="csr-person"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Priya Sharma"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="csr-phone">Direct Phone *</label>
                      <input
                        id="csr-phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label" htmlFor="csr-email">Corporate Email *</label>
                    <input
                      id="csr-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="corporate.csr@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label" htmlFor="csr-area">Preferred Thematic Area</label>
                    <select
                      id="csr-area"
                      className="form-input"
                      value={formData.thematicArea}
                      onChange={(e) => setFormData({ ...formData, thematicArea: e.target.value })}
                    >
                      <option value="Environmental Sustainability (Swachh Bharat & Haritha Haram)">Environmental Sustainability (Swachh Bharat &amp; Haritha Haram)</option>
                      <option value="Government School Infrastructure & STEM Labs">Government School Infrastructure &amp; STEM Labs</option>
                      <option value="Naadha Ashram Nutrition & Resident Care">Naadha Ashram Nutrition &amp; Resident Care</option>
                      <option value="Rural Healthcare & Diagnostic Screening Camps">Rural Healthcare &amp; Diagnostic Screening Camps</option>
                      <option value="Senior Citizen Welfare & Mobility Aids">Senior Citizen Welfare &amp; Mobility Aids</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="csr-budget">Target Annual Budget</label>
                    <select
                      id="csr-budget"
                      className="form-input"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    >
                      <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs &ndash; ₹5 Lakhs</option>
                      <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs &ndash; ₹15 Lakhs</option>
                      <option value="₹15 Lakhs - ₹50 Lakhs">₹15 Lakhs &ndash; ₹50 Lakhs</option>
                      <option value="₹50 Lakhs+">₹50 Lakhs and Above</option>
                    </select>
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
                        <span>Transmitting CSR Request...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa fa-handshake"></i>
                        <span>Submit Corporate Partnership Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
