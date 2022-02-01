import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function CardRecipe({ index, url, name, id, type }) {
  const history = useHistory();
  return (
    <button
      style={ {
        width: 300,
      } }
      data-testid={ `${index}-recipe-card` }
      type="button"
      onClick={ () => history.push(`/${type}/${id}`) }
    >
      <img src={ url } alt="" data-testid={ `${index}-card-img` } />
      <span data-testid={ `${index}-card-name` }>{name}</span>
    </button>
  );
}

CardRecipe.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
