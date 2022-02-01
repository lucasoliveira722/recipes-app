import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import searchByIdRecipe from '../services/searchByIdRecipe';

export default function DrinkDetails({ match: { params: { id } } }) {
  const [detailsId, setDetailsId] = useState({});
  useEffect(() => {
    (async () => {
      const result = await searchByIdRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const details = result.drinks;
      setDetailsId(details[0]);
    })();
  }, []);
  console.log(detailsId);
  const filter1 = Object.entries(detailsId);
  const ingredientKey = 'strIngredient';
  const filter2 = filter1.filter((array) => (
    array[0].toUpperCase().includes(ingredientKey.toUpperCase())));
  return (
    <div>
      <h1 data-testid="recipe-category">{detailsId.strCategory}</h1>
      <h1 data-testid="recipe-title">{detailsId.strDrink}</h1>
      <img src={ detailsId.strDrinkThumb } alt="recipephoto" data-testid="recipe-photo" />
      <button
        data-testid="share-btn"
        type="button"
      >
        ShareBtn
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
      >
        FavoriteBtn
      </button>
      <ul>
        {filter2.map((arr, index) => (
          arr[1] !== null && (
            <li
              key={ arr[1] }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {arr[1]}
            </li>
          )
        ))}
      </ul>
      <p data-testid="instructions">{detailsId.strInstructions}</p>
      <ul>
        <li data-testid="0-recomedation-card">Receitas recomendadas</li>
      </ul>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Start
      </button>
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.objectOf,
}.isRequired;
