import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchByIdRecipe from '../services/searchByIdRecipe';
import shareIcon from '../images/shareIcon.svg';
import RecommendationCaroussel from '../components/RecommendationCaroussel';
import FavoriteButton from '../components/FavoriteButton';

export default function DrinkDetails({ match: { params: { id } } }) {
  const urlRecommendation = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const [detailsId, setDetailsId] = useState({});
  const [idLocalS, setIdLocalS] = useState([]);
  const [idFinish, setIdFinish] = useState([]);
  const [show, setShow] = useState(false);
  const detailsFavorite = [detailsId];
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const result = await searchByIdRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const details = result.drinks;
      setDetailsId(details[0]);
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
      <FavoriteButton details={ detailsFavorite } idPage={ id } type="Drink" />
      <ul>
        {mapFilter(filter2Ingredient)}
      </ul>
      <ul>
        {mapFilter(filter2Measure)}
      </ul>
      <p data-testid="instructions">{detailsId.strInstructions}</p>
      <RecommendationCaroussel url={ urlRecommendation } type="meals" />
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
