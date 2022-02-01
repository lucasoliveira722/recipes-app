import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import AppContext from '../context/AppContext';

export default function Footer() {
  const history = useHistory();
  const { setValidation } = useContext(AppContext);

  return (
    <footer
      data-testid="footer"
    >
      <button
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        onClick={ () => { history.push('/foods'); setValidation(true); } }
      >
        <img alt="Ícone de Comidas" src={ mealIcon } />
      </button>

      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ () => { history.push('/drinks'); setValidation(true); } }
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
