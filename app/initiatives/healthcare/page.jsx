import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Healthcare & Medical Support | Anand Group Charitable Trust',
  description: 'Free rural medical camps, diagnostic screenings, voluntary blood donation drives, and medical aid for underprivileged patients by Anand Group Charitable Trust.',
};

export default function HealthcarePage() {
  const initiative = INITIATIVES_DATA['healthcare'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}
