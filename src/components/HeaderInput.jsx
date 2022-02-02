import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import searchIngredientAPI from '../services/searchIngredientApi';
import searchNameAPI from '../services/searchNameAPI';
import searchFirstLetterAPI from '../services/searchFirstLetterAPI';

export default function HeaderInput() {
  const {
    search,
    searchField,
    setSearch,
    setSearchField,
  } = useContext(AppContext);

  const history = useHistory();
  const finalLocation = history.location.pathname;

  function toggleFetchValue(target) {
    setSearch(target);
  }

  function pathPush(path, id) {
    if (path === '/foods') {
      history.push(`${path}/${id}`);
    }
    history.push(`${path}/${id}`);
  }

  async function handleClick() {
    if (search === 'ingredient') {
      const ingredientFetched = await searchIngredientAPI(searchField, finalLocation);
      console.log(ingredientFetched);
      if (ingredientFetched.length === 1) {
        pathPush(finalLocation, ingredientFetched.meals[0].idMeal);
      }
    } else if (search === 'name') {
      const ingredientFetched = await searchNameAPI(searchField, finalLocation);
      // console.log(ingredientFetched.meals[0].idMeal);
      // console.log(ingredientFetched.meals.length);
      if (finalLocation === '/foods' && ingredientFetched.meals.length === 1) {
        pathPush(finalLocation, ingredientFetched.meals[0].idMeal);
        // console.log('ACHEI UM');
      }
      if (finalLocation === '/drinks' && ingredientFetched.drinks.length === 1) {
        pathPush(finalLocation, ingredientFetched.drinks[0].idDrink);
      }
    } else if (search === 'first-letter') {
      if (searchField.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const ingredientFetched = await searchFirstLetterAPI(searchField, finalLocation);
      console.log(ingredientFetched);
      pathPush(finalLocation, ingredientFetched.meals[0].idMeal);
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
        name="search"
        onChange={ (event) => setSearchField(event.target.value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient"
          name="searchFood"
          value="ingredient"
          onChange={ (e) => toggleFetchValue(e.target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name"
          name="searchFood"
          value="name"
          onChange={ (e) => toggleFetchValue(e.target.value) }
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          name="searchFood"
          value="first-letter"
          onChange={ (e) => toggleFetchValue(e.target.value) }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}
