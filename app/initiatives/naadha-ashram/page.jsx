import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Naadha Ashram Support | Anand Group Charitable Trust',
  description: 'Providing daily nutrition, shelter improvements, clothing, medical assistance, and child schooling for residents of Naadha Ashram sanctuary.',
};

export default function NaadhaAshramPage() {
  const initiative = INITIATIVES_DATA['naadha-ashram'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}
