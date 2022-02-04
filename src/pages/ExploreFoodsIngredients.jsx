import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ingredientsFood } from '../services/searchExploreIngredient';

export default function ExploreFoodsIngredients() {
  const [foods, setFoods] = useState([]);

  const result = async () => {
    const response = await ingredientsFood();
    setFoods(response);
  };

  useEffect(() => {
    result();
  }, []);

  return (
    <>
      <Header title="Explore Ingredients" />
      {
        foods.map((e, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              alt="imagem do ingrediente"
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png` }
            />
            <h1 data-testid={ `${index}-card-name` }>{ e.strIngredient }</h1>
          </button>
        ))
      }
      <Footer />
    </>
  );
}
