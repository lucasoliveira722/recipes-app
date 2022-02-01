import React from 'react';

export default function CardRecipe({ index, url, name }) {
  <div data-testid={ `${index}-recipe-card` }>
    <img src={ url } alt="" data-testid={ `${index}-card-img` } />
    <span data-testid={ `${index}-card-name` }>{name}</span>
  </div>;
}
