import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchByIdRecipe from '../services/searchByIdRecipe';
import shareIcon from '../images/shareIcon.svg';
import RecommendationCaroussel from '../components/RecommendationCaroussel';
import FavoriteButton from '../components/FavoriteButton';
import AppContext from '../context/AppContext';

export default function FoodDetails({ match: { params: { id } } }) {
  const urlRecommendation = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const { clickedFood } = useContext(AppContext);
  const [detailsId, setDetailsId] = useState((JSON.stringify(clickedFood) !== '{}')
    ? clickedFood : {});
  const [idLocalS, setIdLocalS] = useState([]);
  const [idFinish, setIdFinish] = useState([]);
  const [show, setShow] = useState(false);
  // const [obj, setObj] = useState((clickedFood !== {}) ? clickedFood : {});
  const history = useHistory();
  const detailsFavotire = [detailsId];
  useEffect(() => {
    if (JSON.stringify(clickedFood) === '{}') {
      (async () => {
        const resultId = await searchByIdRecipe(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const details = resultId.meals;
        setDetailsId(details[0]);
      })();
    }
    if (localStorage.getItem('inProgressRecipes')) {
      console.log('entrou');
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const { meals } = inProgressRecipes;
      setIdLocalS(Object.keys(meals));
      console.log('1', Object.keys(meals));
    }
    if (localStorage.getItem('doneRecipes')) {
      const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
      const ids = doneRecipes.map((recipe) => (
        recipe.id
      ));
      setIdFinish(ids);
    }
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
  const startButton = () => {
    if (localStorage.getItem('inProgressRecipes')) {
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const { meals } = inProgressRecipes;
      meals[id] = [];
      localStorage
        .setItem('inProgressRecipes', JSON.stringify({ ...inProgressRecipes, meals }));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        meals: { [id]: [] },
        cocktails: {},
      }));
    }
    history.push(`/foods/${id}/in-progress`);
  };
  const popUp = () => {
    setShow(!show);
  };
  console.log('1', detailsId);
  return (
    <div>
      {detailsId.idMeal
        && (
          <>

            <h1 data-testid="recipe-category">{detailsId.strCategory}</h1>
            <h1 data-testid="recipe-title">{detailsId.strMeal}</h1>
            <img
              style={ { width: 200 } }
              src={ detailsId.strMealThumb }
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
                navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
                popUp();
              } }
            >
              <img src={ shareIcon } alt="Share Icon" />
            </button>
            {show && (<span>Link copied!</span>)}
            <FavoriteButton details={ detailsFavotire } idPage={ id } type="Meal" />
            <ul>
              {mapFilter(filter2Ingredient)}
            </ul>
            <ul>
              {mapFilter(filter2Measure)}
            </ul>
            <p data-testid="instructions">{detailsId.strInstructions}</p>
            {/* Referencia para o uso do iframe */}
            {/* https://www.w3schools.com/html/html_iframe.asp */}
            <iframe
              src={ detailsId.strYoutube.replace('watch?v=', 'embed/') }
              frameBorder="0"
              allowFullScreen
              title="video"
              data-testid="video"
            />
            <RecommendationCaroussel url={ urlRecommendation } type="drinks" />
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
          </>
        )}
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.objectOf,
}.isRequired;
