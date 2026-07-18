import React from 'react';
import { bcaSemesters } from '@/data/bcaCoursesData';
import SubjectSyllabusDashboard from './SubjectClient';

export function generateStaticParams() {
  const params: { semester: string; subject: string }[] = [];
  bcaSemesters.forEach(sem => {
    sem.subjects.forEach(sub => {
      params.push({
        semester: sem.id.toString(),
        subject: sub.code
      });
    });
  });
  return params;
}

interface PageProps {
  params: Promise<{ semester: string; subject: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <SubjectSyllabusDashboard 
      semester={resolvedParams.semester} 
      subject={resolvedParams.subject} 
    />
  );
}
