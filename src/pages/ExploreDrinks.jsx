import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import randomDrinks from '../services/searchExploreDrinksApi';

export default function ExploreDrinks() {
  const [randomDrink, setRandomDrink] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const Api = async () => {
      const result = await randomDrinks();
      setRandomDrink(result[0].idDrink);
    };
    Api();
  }, []);
  return (
    <>
      <Header title="Explore Drinks" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/drinks/${randomDrink}`) }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
