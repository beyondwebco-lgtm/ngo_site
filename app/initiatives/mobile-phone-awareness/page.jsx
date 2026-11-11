import React from 'react';
import AwarenessSubpageLayout from '../../../components/AwarenessSubpageLayout';
import { EDUCATIONAL_SUBPROGRAMS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Mobile Phone Awareness & Digital Wellness | Anand Group Charitable Trust',
  description:
    'Helping children build healthier digital habits through mobile phone awareness programmes, screen balance education, online safety, and our published digital wellness activity book.',
};

export default function MobilePhoneAwarenessPage() {
  const program = EDUCATIONAL_SUBPROGRAMS['mobile-phone-awareness'];
  return <AwarenessSubpageLayout program={program} />;
}

