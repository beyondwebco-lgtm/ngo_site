import React from 'react';
import InitiativeSubpageLayout from '../../../components/InitiativeSubpageLayout';
import { INITIATIVES_DATA } from '../../../data/initiatives';

export const metadata = {
  title: 'Social & Environmental Awareness | Anand Group Charitable Trust',
  description: 'Swachh Bharat cleanliness drives, Haritha Haram tree plantation, save water campaigns, and plastic-free living initiatives by Anand Group Charitable Trust.',
};

export default function SocialEnvironmentalPage() {
  const initiative = INITIATIVES_DATA['social-environmental'];
  return <InitiativeSubpageLayout initiative={initiative} />;
}

