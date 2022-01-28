import React from 'react';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function MenuInferior() {
  return (
    <footer
      data-testid="footer"
    >
      <button
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >
        <img alt="Ícone de Comidas" src={ mealIcon } />
      </button>

      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
      >
        <img alt="Ícone de Bebidas" src={ drinkIcon } />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        // onClick={}
      >
        <img alt="Ícone de Exploração" src={ exploreIcon } />
      </button>
    </footer>
  );
}
