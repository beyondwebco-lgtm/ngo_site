import React from 'react';
import Link from 'next/link';
import PageBanner from '../../components/PageBanner';

export const metadata = {
  title: 'Terms & Conditions | Anand Group Charitable Trust',
  description: 'Official terms and conditions, donation guidelines, and legal governance governing Anand Group Charitable Trust.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageBanner
        badge="Legal Framework"
        badgeIcon="fa-gavel"
        title="Terms &amp; Conditions of Seva"
        highlightWord="Conditions"
        lead="Please review the legal terms governing use of this website, financial donations, volunteer participation, and intellectual property of Anand Group Charitable Trust."
        breadcrumbs={[{ label: 'Terms & Conditions', href: '/terms-and-conditions' }]}
      />

      <section className="subpage-section">
        <div className="ash-container">
          <div style={{ maxWidth: '880px', margin: '0 auto', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '3rem', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-yellow-dark)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Effective Date: November 2026
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              1. Organizational Identity &amp; Legal Constitution
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              This website is owned, maintained, and operated by <strong>Anand Group Charitable Trust</strong> (&ldquo;Trust&rdquo;), a legally constituted and registered Indian public charitable trust formed under the Indian Trusts Act, 1882, having operations across Andhra Pradesh and Telangana, India.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              2. Voluntary Charitable Donations &amp; Tax Exemption
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              All financial contributions made to the Trust are voluntary donations made for humanitarian, educational, and social welfare objectives:
            </p>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li><strong>Section 80G Eligibility:</strong> Contributions are eligible for tax deduction under Section 80G of the Income Tax Act, 1961, subject to prevailing limits and government rules.</li>
              <li><strong>PAN Requirement:</strong> Donors seeking 80G tax benefit certificates must furnish their valid Permanent Account Number (PAN) and postal address as per Central Board of Direct Taxes (CBDT) regulations.</li>
              <li><strong>Non-Refundable Policy:</strong> Because charitable funds are promptly committed and deployed toward buying groceries for Naadha Ashram, school kits, or medical supplies, donations once cleared cannot be refunded or cancelled.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              3. Volunteer Participation &amp; Code of Conduct
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Volunteers participate in field drives, street cleanliness campaigns, and community visits in a purely voluntary, honorary capacity. All volunteers agree to adhere to strict ethical conduct, safety guidelines, and respect for the dignity and privacy of all beneficiaries, senior citizens, and children.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              4. Authentic Photography &amp; Intellectual Property
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              All original photographs, text descriptions, logo vectors, and multimedia documents displayed on this website represent authentic field action of Anand Group Charitable Trust. These assets are protected by copyright law and may not be reproduced, copied, or republished for unauthorized commercial purposes without prior written consent from the Managing Trustee.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              These terms and conditions are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes or claims arising out of the use of this website or trust transactions shall be subject to the exclusive jurisdiction of the competent civil courts of Hyderabad, Telangana / Andhra Pradesh.
            </p>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/privacy-policy" className="ash-btn ash-btn-outline" style={{ fontSize: '0.9rem' }}>
                <i className="fa fa-shield-halved"></i>
                <span>Read Privacy Policy</span>
              </Link>
              <Link href="/donate" className="ash-btn ash-btn-primary" style={{ fontSize: '0.9rem' }}>
                <i className="fa fa-heart"></i>
                <span>Support Our Seva</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

