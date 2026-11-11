import React from 'react';
import AwarenessSubpageLayout from '../../../components/AwarenessSubpageLayout';
import { EDUCATIONAL_SUBPROGRAMS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Mental Wellness & Emotional Well-Being | Anand Group Charitable Trust',
  description:
    'Supporting emotional well-being through mental wellness education, emotional awareness, stress management, supportive communication, and professional counselling awareness.',
};

export default function MentalWellnessPage() {
  const program = EDUCATIONAL_SUBPROGRAMS['mental-wellness'];
  return <AwarenessSubpageLayout program={program} />;
}

