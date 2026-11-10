import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Elderly Care & Social Welfare | Anand Group Charitable Trust',
  description: 'Supporting senior citizen homes, providing geriatric healthcare, mobility aids, daily groceries, and companionship to cherished elders by Anand Group Charitable Trust.',
};

export default function ElderlyCarePage() {
  const initiative = INITIATIVES_DATA['elderly-care'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}

