import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import randomFoods from '../services/searchExploreFoodsApi';

export default function ExploreFoods() {
  const [randomRecipe, setRandomRecipe] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const Api = async () => {
      const result = await randomFoods();
      console.log(result);
      setRandomRecipe(result[0].idMeal);
    };
    Api();
  }, []);

  return (
    <>
      <Header title="Explore Foods" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/foods/${randomRecipe}`) }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
