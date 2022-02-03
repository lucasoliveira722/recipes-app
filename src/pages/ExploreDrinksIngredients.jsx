import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import searchExploreIngredient from '../services/searchExploreIngredient';

export default function ExploreDrinksIngredients() {
  return (
    <>
      <Header title="Explore Ingredients" />
      <Footer />
    </>
  );
}
