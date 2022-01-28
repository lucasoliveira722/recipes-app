import React from 'react';
import { useHistory } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function MenuInferior() {
  const history = useHistory();

  return (
    <footer
      data-testid="footer"
    >
      <button
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        onClick={ () => history.push('/foods') }
      >
        <img alt="Ícone de Comidas" src={ mealIcon } />
      </button>

      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ () => history.push('/drinks') }
      >
        <img alt="Ícone de Bebidas" src={ drinkIcon } />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        onClick={ () => history.push('/explore') }
      >
        <img alt="Ícone de Exploração" src={ exploreIcon } />
      </button>
    </footer>
  );
}
