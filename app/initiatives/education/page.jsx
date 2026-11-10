import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Education & Child Development | Anand Group Charitable Trust',
  description: 'Underprivileged child education, school facilities upgrades, digital awareness, student mentorship, and family values programs by Anand Group Charitable Trust.',
};

export default function EducationPage() {
  const initiative = INITIATIVES_DATA['education'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}
