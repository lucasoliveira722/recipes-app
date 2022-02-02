import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import searchByIdRecipe from '../services/searchByIdRecipe';
import searchRecipes from '../services/searchRecipesApi';

export default function DrinkDetails({ match: { params: { id } } }) {
  const [detailsId, setDetailsId] = useState({});
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await searchByIdRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const details = result.drinks;
      setDetailsId(details[0]);
      const resultRe = await searchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const recommends = resultRe.meals;
      setRecommended(recommends);
    })();
  }, []);
  console.log(detailsId);
  const filter1 = Object.entries(detailsId);
  const ingredientKey = 'strIngredient';
  const filter2Ingredient = filter1.filter((array) => (
    array[0].toUpperCase().includes(ingredientKey.toUpperCase())));
  const measureKey = 'strMeasure';
  const filter2Measure = filter1.filter((array) => (
    array[0].toUpperCase().includes(measureKey.toUpperCase())));
  const mapFilter = (array) => array.map((arr, index) => (
    (arr[1] !== '' && arr[1] !== null && arr[1] !== ' ') && (
      <li
        key={ `${arr[1]}${arr[0]}` }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {arr[1]}
      </li>
    )
  ));
  const maxRecommends = 6;
  return (
    <div>
      <h1 data-testid="recipe-category">{detailsId.strAlcoholic}</h1>
      <h1 data-testid="recipe-title">{detailsId.strDrink}</h1>
      <img
        style={ { width: 200 } }
        src={ detailsId.strDrinkThumb }
        alt="recipephoto"
        data-testid="recipe-photo"
      />
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
        {mapFilter(filter2Ingredient)}
      </ul>
      <ul>
        {mapFilter(filter2Measure)}
      </ul>
      <p data-testid="instructions">{detailsId.strInstructions}</p>
      <div
        style={ {
          width: 450,
          height: 200,
          whiteSpace: 'nowrap',
          overflow: 'scroll',
        } }
      >
        {recommended.slice(0, maxRecommends)
          .map((recipe, index) => (
            <button
              data-testid={ `${index}-recomendation-card` }
              style={ { display: 'inline-block', width: 250 } }
              type="button"
              key={ index }
            >
              <div>
                <img
                  style={ { width: 180, height: 150 } }
                  src={ recipe.strMealThumb }
                  alt="recipe"
                />
                <span
                  style={ { display: 'block' } }
                  data-testid={ `${index}-recomendation-title` }
                >
                  {recipe.strMeal}
                </span>

              </div>
            </button>
          ))}
      </div>
      <button
        style={ { position: 'fixed', bottom: 0 } }
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
