import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';
import {
  SHOW_PUBLIC_UNVERIFIED_CONTACTS,
  PENDING_VERIFICATION_CONTACTS,
} from '../../data/siteConfig';

export const metadata = {
  title: 'Privacy Policy | Anand Group Charitable Trust',
  description: 'Official privacy policy, data protection standards, and donor confidentiality terms of Anand Group Charitable Trust.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        badge="Legal & Governance"
        badgeIcon="fa-shield-halved"
        title="Privacy Policy &amp; Data Protection"
        highlightWord="Privacy"
        lead="Anand Group Charitable Trust is committed to protecting your privacy, personal information, and donor confidentiality. Learn how we collect, store, and safeguard your data."
        breadcrumbs={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div style={{ maxWidth: '880px', margin: '0 auto', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '3rem', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-yellow-dark)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Last Updated &amp; Reviewed: November 2026
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              1. Commitment to Donor &amp; Visitor Confidentiality
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Anand Group Charitable Trust (&ldquo;Trust&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates with utmost respect for the privacy of our donors, volunteers, beneficiaries, and website visitors. We adhere to the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              2. Information We Collect
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              When you interact with our website, pledge a donation, register as a volunteer, or contact our trust office, we may collect the following details:
            </p>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li><strong>Contact Information:</strong> Full name, postal address, email address, and phone number.</li>
              <li><strong>Statutory Tax Particulars:</strong> Permanent Account Number (PAN), mandatory for issuing 80G tax exemption certificates under Indian Income Tax regulations.</li>
              <li><strong>Volunteering Details:</strong> Professional qualifications, skills, and availability preferences.</li>
              <li><strong>Technical Metadata:</strong> Browser type, operating system, IP address, and anonymized aggregate analytics.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              3. Purpose &amp; Use of Information
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              We use personal information strictly for legitimate charitable governance purposes:
            </p>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>To issue official 80G tax deduction receipts and maintain statutory books of accounts.</li>
              <li>To report donor data to the Income Tax Department via Form 10BD as required by law.</li>
              <li>To coordinate field drives, volunteer participation, and disaster relief mobilizations.</li>
              <li>To provide transparent progress reports on sponsored initiatives (such as rural medical camps or school kits).</li>
              <li>To respond to queries and CSR collaboration requests.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              4. Absolute Prohibition on Data Sale or Commercial Sharing
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              We <strong>NEVER</strong> rent, sell, trade, or commercially monetize donor lists, telephone numbers, or email addresses to any third-party marketing agency, telemarketer, or private commercial enterprise. Personal data is shared strictly with regulatory authorities when required by Indian law.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              5. Financial Information Security
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              To ensure zero risk of online fraud, our website does not store bank account passwords, debit/credit card CVVs, or payment credentials. Contributions are processed through verified direct bank pledges or official bank account transfers directly to the trust’s designated institutional bank accounts.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              6. Grievance Redressal &amp; Data Rights
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              You may request review, correction, or deletion of your contact records from our communication registry at any time by contacting our Trust Grievance Officer:
            </p>
            <div style={{ background: 'var(--color-bg-cream)', border: '1px solid var(--color-border-amber)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.35rem 0', fontWeight: 600, color: 'var(--color-text)' }}>Grievance Officer &amp; Compliance Secretary</p>
              <p style={{ margin: '0 0 0.25rem 0', color: 'var(--color-text-muted)' }}>Anand Group Charitable Trust</p>
              {SHOW_PUBLIC_UNVERIFIED_CONTACTS ? (
                <>
                  <p style={{ margin: '0 0 0.25rem 0', color: 'var(--color-text-muted)' }}>Email: {PENDING_VERIFICATION_CONTACTS.generalEmail}</p>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Phone: {PENDING_VERIFICATION_CONTACTS.phone} ({PENDING_VERIFICATION_CONTACTS.officeHours})</p>
                </>
              ) : (
                <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                  Submit privacy or data correction requests via our <Link href="/contact" style={{ color: 'var(--color-yellow-dark)', fontWeight: 600, textDecoration: 'underline' }}>official Contact page</Link>.
                </p>
              )}
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/terms-and-conditions" className="ash-btn ash-btn-outline" style={{ fontSize: '0.9rem' }}>
                <span>View Terms &amp; Conditions</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="ash-btn ash-btn-primary" style={{ fontSize: '0.9rem' }}>
                <i className="fa fa-envelope"></i>
                <span>Contact Trust Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

