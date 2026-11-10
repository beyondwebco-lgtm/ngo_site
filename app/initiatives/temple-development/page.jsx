import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Temple Development & Cultural Seva | Anand Group Charitable Trust',
  description: 'Heritage temple renovation, sacred Annadanam meal distribution, and traditional cultural preservation by Anand Group Charitable Trust.',
};

export default function TempleDevelopmentPage() {
  const initiative = INITIATIVES_DATA['temple-development'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}
