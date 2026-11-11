import React from 'react';
import AwarenessSubpageLayout from '../../../components/AwarenessSubpageLayout';
import { EDUCATIONAL_SUBPROGRAMS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Child Psychology & Individual Attention | Anand Group Charitable Trust',
  description:
    'Every child deserves to be understood. Individual attention, child psychology awareness sessions conducted by qualified psychologists and counsellors, emotional development, and positive school environments.',
};

export default function ChildDevelopmentPage() {
  const program = EDUCATIONAL_SUBPROGRAMS['child-development'];
  return <AwarenessSubpageLayout program={program} />;
}

