import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ingredientsDrink } from '../services/searchExploreIngredient';

export default function ExploreDrinksIngredients() {
  const [drinks, setDrinks] = useState([]);

  const result = async () => {
    const response = await ingredientsDrink();
    setDrinks(response);
  };

  useEffect(() => {
    result();
  }, []);

  return (
    <>
      <Header title="Explore Ingredients" />
      {
        drinks.map((e, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              alt="imagem do ingrediente"
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${e.strIngredient1}-Small.png` }
            />
            <h1 data-testid={ `${index}-card-name` }>{ e.strIngredient1 }</h1>
          </button>
        ))
      }
      <Footer />
    </>
  );
}
