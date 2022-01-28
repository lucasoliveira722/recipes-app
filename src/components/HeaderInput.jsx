import React from 'react';

export default function HeaderInput() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
        name="search"
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient"
          name="ingredient"
          value="ingredient"
          onChange={toggleFetchValue}
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
          onChange={toggleFetchValue}
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
          onChange={toggleFetchValue}
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={toggleFetch}
      >
        Search
      </button>
    </div>
  );
}

function toggleFetchValue(target) {
  return target;
};

function async toggleFetch() {
  // Armazenar no estado o valor do radio button que está selecionado, para que isso defina para qual endpoint será feito a fetch. Implementar também um alerta para a busca de uma letra caso tenha mais de uma (DICA: utilizar o global.alert para evitar erro de lint)

  // if( endpoint 1) {
//    const ingredientFetched = await searchIngredientAPI();
//    setIngredient(ingredient)
  // }
    // else if (endpoint 2)

  // else (endpoint 3)

}