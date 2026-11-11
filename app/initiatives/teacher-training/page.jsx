import React from 'react';
import AwarenessSubpageLayout from '../../../components/AwarenessSubpageLayout';
import { EDUCATIONAL_SUBPROGRAMS } from '../../../data/awarenessPrograms';

export const metadata = {
  title: 'Teacher Training & Values Education | Anand Group Charitable Trust',
  description:
    'Empowering teachers to shape better futures through moral values, child psychology, positive classroom communication, empathy, and individual student attention.',
};

export default function TeacherTrainingPage() {
  const program = EDUCATIONAL_SUBPROGRAMS['teacher-training'];
  return <AwarenessSubpageLayout program={program} />;
}

