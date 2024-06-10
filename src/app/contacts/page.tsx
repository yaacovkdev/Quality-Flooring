import Contacts from '@/components/Contacts/Contacts';
import MainLayout from '@/components/MainLayout/MainLayout';
import React from 'react'


export default function page() {
  return (
    <MainLayout children={<><Contacts /></>} />
  );
}