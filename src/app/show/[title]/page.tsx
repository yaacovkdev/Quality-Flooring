"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout/MainLayout';
import DetailedItem from '@/components/DetailedItem/DetailedItem';

export default function ShowTitlePage() {
  const {title} = useParams();
  let projectName: string = "";
  if (Array.isArray(title)) {
    projectName = title[0];
  } else {
    projectName = title;
  }

  return (
    <MainLayout children={<DetailedItem projectName={projectName} />} />
  );
};
