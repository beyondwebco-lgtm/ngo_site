import React from 'react';
import AwarenessSubpageLayout from '../../../components/AwarenessSubpageLayout';
import { EDUCATIONAL_SUBPROGRAMS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'School Awareness Camps & Student Guidance | Anand Group Charitable Trust',
  description:
    'School awareness camps focusing on educational guidance, student behaviour, emotional awareness, digital wellness, positive habits, and child development.',
};

export default function SchoolAwarenessProgramsPage() {
  const program = EDUCATIONAL_SUBPROGRAMS['school-awareness-programs'];
  return <AwarenessSubpageLayout program={program} />;
}

