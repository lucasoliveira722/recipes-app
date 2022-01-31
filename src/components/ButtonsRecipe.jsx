import React from 'react';
import PropTypes from 'prop-types';

function ButtonsRecipe({ categoriesNames }) {
  const maxCategories = 5;
  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        // onClick={ () => }
      >
        All
      </button>

      {categoriesNames.slice(0, maxCategories)
        .map((category, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
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
