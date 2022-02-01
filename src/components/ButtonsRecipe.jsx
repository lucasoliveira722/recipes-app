import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function ButtonsRecipe({ categoriesNames, type }) {
  const [actualCategory, setActualCategory] = useState('');
  const [urlCategory, setUrlCategory] = useState('');
  useEffect(() => {
    if (type === 'drinks') {
      setUrlCategory('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=');
    } else if (type === 'meals') {
      setUrlCategory('https://www.themealdb.com/api/json/v1/1/filter.php?c=');
    }
  }, []);
  const {
    setCategoryRecipes,
    getRecipesByCategory,
    setValidation,
    validation } = useContext(AppContext);
  const maxCategories = 5;
  const getByCategory = async ({ target: { name } }) => {
    setActualCategory(name);
    if (validation === false && actualCategory === name) {
      setValidation(true);
    } else {
      setValidation(false);
      const recipesCategory = await getRecipesByCategory(`${urlCategory}${name}`);
      setCategoryRecipes(recipesCategory[type]);
    }
  };
  const getAll = () => {
    setValidation(true);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
        onClick={ () => getAll() }
      >
        All
      </button>

      {categoriesNames.slice(0, maxCategories)
        .map((category, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
            name={ category.strCategory }
            onClick={ (event) => getByCategory(event) }
          >
            {category.strCategory}
          </button>
        ))}
    </div>
  );
}

ButtonsRecipe.propTypes = {
  categoriesNames: PropTypes.arrayOf,
}.isRequired;

export default ButtonsRecipe;
