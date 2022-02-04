import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardFavorite from '../components/CardFavorite';

export default function FavoriteRecipes() {
  const [lsFavorites, setLsFavorites] = useState([]);
  const [update, setUpdate] = useState(false);
  const [filter, setFilter] = useState([]);
  const [validation, setValidation] = useState(true);
  useEffect(() => {
    setLsFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [update]);
  const handleUpDate = () => {
    setUpdate(!update);
  };
  const filterBtn = ({ target: { name } }) => {
    setFilter(lsFavorites.filter((recipe) => recipe.type === name));
    setValidation(!validation);
  };

  const mapFunction = (arr) => arr.map((recipe, index) => (
    <CardFavorite
      func={ handleUpDate }
      id={ recipe.id }
      index={ index }
      url={ recipe.image }
      name={ recipe.name }
      category={ recipe.category }
      type={ recipe.type }
      alcoholic={ recipe.alcoholicOrNot }
      nationality={ recipe.nationality }
      key={ recipe.id }
    />
  ));
  return (
    <div>
      <Header title="Favorite Recipes" />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setValidation(!validation) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          name="food"
          onClick={ (event) => filterBtn(event) }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          name="drink"
          onClick={ (event) => filterBtn(event) }
        >
          Drink
        </button>
      </section>
      {validation ? (
        mapFunction(lsFavorites)
      ) : (mapFunction(filter))}
    </div>

  );
}
