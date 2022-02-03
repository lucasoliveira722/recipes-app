import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function CardRecipe({ index, url, name, id, type, recipe }) {
  const history = useHistory();
  const { setClickedFood } = useContext(AppContext);
  const cardBtn = () => {
    history.push(`/${type}/${id}`);
    setClickedFood(recipe);
  };

  return (
    <button
      style={ {
        width: 300,
      } }
      data-testid={ `${index}-recipe-card` }
      type="button"
      onClick={ () => cardBtn() }
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
  recipe: PropTypes.object,
}.isRequired;
