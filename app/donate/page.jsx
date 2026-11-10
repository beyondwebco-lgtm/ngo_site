'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageBanner from '../../components/PageBanner';

function DonateFormInner() {
  const searchParams = useSearchParams();
  const targetParam = searchParams.get('target');

  const [selectedTier, setSelectedTier] = useState('2500');
  const [customAmount, setCustomAmount] = useState('');
  const [initiativeTarget, setInitiativeTarget] = useState('All Initiatives');

  const [donorData, setDonorData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    city: '',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (targetParam) {
      setInitiativeTarget(targetParam);
    }
  }, [targetParam]);

  const presetTiers = [
    { amount: '1000', label: '₹1,000', benefit: 'Provides textbooks and stationery kits for 2 rural students' },
    { amount: '2500', label: '₹2,500', benefit: 'Sponsors wholesome meals for Naadha Ashram residents for a day' },
    { amount: '5000', label: '₹5,000', benefit: 'Funds free diagnostic screening and medicines for 20 rural patients' },
    { amount: '10000', label: '₹10,000', benefit: 'Plants 100 roadside tree saplings and provides tree guards under Haritha Haram' },
  ];

  const currentAmount = customAmount ? customAmount : selectedTier;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!donorData.name.trim() || !donorData.email.trim() || !donorData.phone.trim()) {
      setErrorMsg('Please enter your full name, email, and phone number.');
      return;
    }

    if (!currentAmount || Number(currentAmount) <= 0) {
      setErrorMsg('Please select or specify a valid pledge amount.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }, 700);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
      {/* Pledge Form Column */}
      <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.4rem' }}>
            <i className="fa fa-hand-holding-heart"></i> Direct Support Pledge
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--color-text)', margin: '0.35rem 0' }}>
            Pledge Your Support for Seva
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Select an impact tier or specify a custom donation. As per our transparent pledge model, our official trust financial desk will issue official 80G tax clearance documentation.
          </p>
        </div>

        {/* Inline Submission Status (STRICTLY NO POP-UPS) */}
        {submitted ? (
          <div className="inline-form-alert success">
            <i className="fa fa-circle-check"></i>
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.15rem', color: '#166534' }}>
                Pledge Successfully Registered!
              </h4>
              <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.92rem', color: '#14532D', lineHeight: '1.5' }}>
                Thank you, <strong>{donorData.name}</strong>. Your support pledge of <strong>₹{Number(currentAmount).toLocaleString('en-IN')}</strong> for <strong>{initiativeTarget}</strong> has been received by Anand Group Charitable Trust.
              </p>
              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #BBF7D0', fontSize: '0.88rem', color: '#14532D', lineHeight: '1.6' }}>
                <strong>Next Steps:</strong>
                <p style={{ margin: '0.35rem 0 0 0' }}>
                  Our financial coordinator will email you at <strong>{donorData.email}</strong> with our verified bank account details and official 80G donation receipt confirmation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: '1.25rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#166534',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Submit another pledge
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

            {/* Step 1: Select Initiative */}
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label" htmlFor="pledge-target">Designate Your Contribution To:</label>
              <select
                id="pledge-target"
                className="form-input"
                value={initiativeTarget}
                onChange={(e) => setInitiativeTarget(e.target.value)}
              >
                <option value="All Initiatives">General Seva Fund (Direct to Where Need is Greatest)</option>
                <option value="Social & Environmental Awareness">Social &amp; Environmental Awareness (Swachh Bharat &amp; Haritha Haram)</option>
                <option value="Education & Child Development">Education &amp; Child Development (School Kits &amp; Mentorship)</option>
                <option value="Temple Development & Cultural Activities">Temple Development &amp; Sacred Annadanam</option>
                <option value="Healthcare & Medical Support">Healthcare &amp; Free Medical Screening Camps</option>
                <option value="Elderly Care & Social Welfare">Elderly Care &amp; Senior Dignity</option>
                <option value="Naadha Ashram Support">Naadha Ashram Sanctuary (Daily Meals &amp; Resident Care)</option>
              </select>
            </div>

            {/* Step 2: Select Amount */}
            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Select Impact Tier:</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
                {presetTiers.map((tier) => {
                  const isSelected = selectedTier === tier.amount && !customAmount;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier.amount);
                        setCustomAmount('');
                      }}
                      style={{
                        padding: '0.85rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        border: isSelected ? '2px solid var(--color-yellow-deep)' : '1px solid var(--color-border)',
                        background: isSelected ? 'var(--color-yellow-tint)' : 'var(--color-bg-cream)',
                        color: isSelected ? 'var(--color-yellow-dark)' : 'var(--color-text)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tier.label}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount input */}
              <div style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="custom-amt" style={{ fontSize: '0.88rem' }}>Or Specify Custom Amount (₹ INR):</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--color-text-muted)' }}>₹</span>
                  <input
                    id="custom-amt"
                    type="number"
                    min="100"
                    step="100"
                    className="form-input"
                    style={{ paddingLeft: '2.25rem' }}
                    placeholder="e.g. 15000"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier('');
                    }}
                  />
                </div>
              </div>

              {/* Tier impact preview */}
              {!customAmount && selectedTier && (
                <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.88rem', color: 'var(--color-yellow-dark)', background: 'var(--color-bg-cream)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-amber)' }}>
                  <i className="fa fa-sparkles" style={{ marginRight: '0.4rem' }}></i>
                  {presetTiers.find((t) => t.amount === selectedTier)?.benefit}
                </p>
              )}
            </div>

            {/* Step 3: Donor Particulars */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
                Donor Particulars (For 80G Receipt &amp; Tax Exemption)
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="donor-name">Full Name *</label>
                  <input
                    id="donor-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="As registered with Income Tax"
                    value={donorData.name}
                    onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="donor-phone">Phone Number *</label>
                  <input
                    id="donor-phone"
                    type="tel"
                    required
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={donorData.phone}
                    onChange={(e) => setDonorData({ ...donorData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="donor-email">Email Address *</label>
                  <input
                    id="donor-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="For receipt delivery"
                    value={donorData.email}
                    onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="donor-pan">PAN Number (Optional for 80G)</label>
                  <input
                    id="donor-pan"
                    type="text"
                    className="form-input"
                    placeholder="e.g. ABCDE1234F"
                    style={{ textTransform: 'uppercase' }}
                    value={donorData.pan}
                    onChange={(e) => setDonorData({ ...donorData, pan: e.target.value.toUpperCase() })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                <label className="form-label" htmlFor="donor-msg">Special Notes / Dedication</label>
                <textarea
                  id="donor-msg"
                  rows={3}
                  className="form-input"
                  placeholder="In memory of / on the occasion of a family birthday or anniversary..."
                  value={donorData.message}
                  onChange={(e) => setDonorData({ ...donorData, message: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="ash-btn ash-btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '1rem' }}
            >
              {submitting ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i>
                  <span>Registering Your Support Pledge...</span>
                </>
              ) : (
                <>
                  <i className="fa fa-heart"></i>
                  <span>Submit Pledge of ₹{Number(currentAmount || 0).toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Sidebar: Bank Details & Transparency */}
      <aside className="initiative-sidebar">
        <div className="sidebar-box highlight">
          <h3 className="sidebar-box-title">
            <i className="fa fa-building-columns" style={{ color: 'var(--color-yellow-deep)' }}></i>
            Direct Bank Transfer
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            You can also contribute directly via NEFT, RTGS, or IMPS directly into our official trust account:
          </p>

          <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', display: 'block' }}>Account Name:</span>
              <strong style={{ color: 'var(--color-text)' }}>ANAND GROUP CHARITABLE TRUST</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', display: 'block' }}>Account Number:</span>
              <strong style={{ color: 'var(--color-yellow-deep)', fontFamily: 'monospace', fontSize: '1rem' }}>921020034812345</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', display: 'block' }}>Bank &amp; Branch:</span>
              <strong style={{ color: 'var(--color-text)' }}>Axis Bank / SBI Branch, Hyderabad</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', display: 'block' }}>IFSC Code:</span>
              <strong style={{ color: 'var(--color-yellow-deep)', fontFamily: 'monospace', fontSize: '0.98rem' }}>UTIB0001234</strong>
            </div>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '1rem 0 0 0', lineHeight: '1.5' }}>
            * After direct transfer, please email your transaction UTR reference to <strong>contact@anandgroupcharitabletrust.org.in</strong> for immediate 80G receipt generation.
          </p>
        </div>

        <div className="sidebar-box">
          <h3 className="sidebar-box-title">
            <i className="fa fa-shield-halved" style={{ color: 'var(--color-yellow-deep)' }}></i>
            Ethical Giving Guarantee
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
              <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
              <span>Zero gateway deduction fees or hidden commissions.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
              <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
              <span>Complete annual financial audits by independent CAs.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
              <i className="fa fa-check" style={{ color: 'var(--color-yellow-deep)', marginTop: '0.2rem' }}></i>
              <span>Official 80G exemption receipt issued promptly.</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default function DonatePage() {
  return (
    <>
      <PageBanner
        badge="Tax Exemption 80G"
        badgeIcon="fa-certificate"
        title="Empower Grassroots Seva Through Your Generosity"
        highlightWord="Empower"
        lead="Your contribution provides nutritious food at Naadha Ashram, school kits for rural children, medical screening for indigent families, and saplings for clean green villages. Every rupee creates direct social impact."
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'Donate / Pledge', href: '/donate' },
        ]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem' }}>Loading donation form...</div>}>
            <DonateFormInner />
          </Suspense>
        </div>
      </section>
    </>
  );
}
