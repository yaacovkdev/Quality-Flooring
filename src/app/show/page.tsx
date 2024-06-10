import MainLayout from '@/components/MainLayout/MainLayout';
import ShowcaseDisplay from '@/components/ShowcaseDisplay/ShowcaseDisplay';
import React from 'react'


export default function page() {
  return (
    <MainLayout children={<><ShowcaseDisplay /></>} />
  );
}