import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchByIdRecipe from '../services/searchByIdRecipe';
import searchRecipes from '../services/searchRecipesApi';
import shareIcon from '../images/shareIcon.svg';

export default function DrinkDetails({ match: { params: { id } } }) {
  const [detailsId, setDetailsId] = useState({});
  const [recommended, setRecommended] = useState([]);
  const [idLocalS, setIdLocalS] = useState([]);
  const [idFinish, setIdFinish] = useState([]);
  const [show, setShow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const result = await searchByIdRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const details = result.drinks;
      setDetailsId(details[0]);
      const resultRe = await searchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const recommends = resultRe.meals;
      setRecommended(recommends);
      if (localStorage.getItem('inProgressRecipes')) {
        const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const { cocktails } = inProgressRecipes;
        setIdLocalS(Object.keys(cocktails));
        console.log('1', Object.keys(cocktails));
      }
      if (localStorage.getItem('doneRecipes')) {
        const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
        const ids = doneRecipes.map((recipe) => (
          recipe.id
        ));
        setIdFinish(ids);
      }
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
  const startButton = () => {
    if (localStorage.getItem('inProgressRecipes')) {
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const { cocktails } = inProgressRecipes;
      cocktails[id] = [];
      localStorage
        .setItem('inProgressRecipes',
          JSON.stringify({ ...inProgressRecipes, cocktails }));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        meals: {},
        cocktails: { [id]: [] },
      }));
    }
    history.push(`/drinks/${id}/in-progress`);
  };
  const popUp = () => {
    setShow(!show);
  };
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
        src={ shareIcon }
        // Referencia para o clipboard
        // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
        onClick={ () => {
          navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
          popUp();
        } }
      >
        <img src={ shareIcon } alt="Share Icon" />
      </button>
      {show && (<span>Link copied!</span>)}
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
      {
        idFinish.includes(id) !== true && (
          <button
            style={ { position: 'fixed', bottom: 0 } }
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => startButton() }
          >
            {idLocalS.includes(id) ? 'Continue Recipe' : 'Start' }
          </button>

        )
      }
    </div>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.objectOf,
}.isRequired;
