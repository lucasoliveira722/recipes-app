import React from 'react';
import PropTypes from 'prop-types';

export default function CardRecipe({ index, url, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ url } alt="" data-testid={ `${index}-card-img` } />
      <span data-testid={ `${index}-card-name` }>{name}</span>
    </div>
  );
}

CardRecipe.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
