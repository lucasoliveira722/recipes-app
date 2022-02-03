import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isFavorite from '../images/blackHeartIcon.svg';
import notFavorite from '../images/whiteHeartIcon.svg';

export default function FavoriteButton({ details, idPage, type }) {
  const [favorite, setFavorite] = useState(false);
  const favoriteRecipesLocalStorage = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favoriteRecipes || [];
  };
  const setFavoriteRecipes = (favoriteRecipes) => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };
  const favoriteInLS = favoriteRecipesLocalStorage();
  const addNewFavorite = () => {
    const newFavorite = details.map((recipe) => ({
      id: idPage,
      type: type === 'Meal' ? 'food' : 'drink',
      nationality: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe[`str${type}`],
      image: recipe[`str${type}Thumb`],
    }));
    return favoriteInLS.concat(newFavorite);
  };
  const removeFavorite = () => {
    const filter = favoriteInLS.filter(({ id }) => id !== idPage);
    return filter;
  };
  const checkFavoriteInLS = () => {
    const validate = favoriteInLS.map(({ id }) => id).some((id) => id === idPage);
    setFavorite(validate);
    return validate;
  };

  useEffect(() => {
    checkFavoriteInLS();
  }, []);

  const favoriteBtn = () => {
    if (checkFavoriteInLS()) {
      const remove = removeFavorite();
      setFavoriteRecipes(remove);
      setFavorite(false);
    } else {
      const add = addNewFavorite();
      setFavoriteRecipes(add);
      setFavorite(true);
    }
  };

  return (
    <button
      type="button"
      onClick={ () => favoriteBtn() }
      data-testid="favorite-btn"
      src={ favorite ? isFavorite : notFavorite }
    >
      <img
        src={ favorite ? isFavorite : notFavorite }
        alt="Favorite Button"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  details: PropTypes.arrayOf,
  idPage: PropTypes.number,
  type: PropTypes.string,
}.isRequired;
