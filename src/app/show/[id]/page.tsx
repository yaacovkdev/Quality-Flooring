"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout/MainLayout';
import DetailedItem from '@/components/DetailedItem/DetailedItem';

export default function ShowTitlePage() {
  const {id} = useParams();
  let projectId: number;
  if (Array.isArray(id)) {
    projectId = Number(id[0]);
  } else {
    projectId = Number(id);
  }

  return (
    <MainLayout children={<DetailedItem projectId={projectId} />} />
  );
};
