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
        />
        Ingrediet
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name"
          name="name"
          value="name"
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
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}
