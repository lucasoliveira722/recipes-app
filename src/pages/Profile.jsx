import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormsProfile from '../components/FormsProfile';

export default function Profile() {
  return (
    <>
      <Header title="Profile" />
      <FormsProfile />
      <Footer />
    </>
  );
}
