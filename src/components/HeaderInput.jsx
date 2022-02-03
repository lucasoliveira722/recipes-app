import React, { useContext } from 'react';
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

  function toggleFetchValue(target) {
    setSearch(target.value);
  }

  async function toggleFetch() {
    if (search === 'ingredient') {
      const ingredientFetched = await searchIngredientAPI(searchField);
      console.log(ingredientFetched);
    } else if (search === 'name') {
      const ingredientFetched = await searchNameAPI(searchField);
      console.log(ingredientFetched);
    } else {
      if (searchField.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const ingredientFetched = await searchFirstLetterAPI(searchField);
      console.log(ingredientFetched);
    }
    // Armazenar no estado o valor do radio button que está selecionado, para que isso defina para qual endpoint será feito a fetch. Implementar também um alerta para a busca de uma letra caso tenha mais de uma (DICA: utilizar o global.alert para evitar erro de lint)
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
          name="ingredient"
          value="ingredient"
          onChange={ toggleFetchValue }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name"
          name="name"
          value="name"
          onChange={ toggleFetchValue }
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          name="first-letter"
          value="first-letter"
          onChange={ toggleFetchValue }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ toggleFetch }
      >
        Search
      </button>
    </div>
  );
}
