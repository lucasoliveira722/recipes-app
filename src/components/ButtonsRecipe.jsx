import React, { useEffect, useState } from 'react';
import searchCategoryRecipe from '../services/searchCategoryRecipe';

function ButtonsRecipe(categoryName) {
  const [recipeButton, setRecipeButton] = useState({});
  useEffect(() => {
    (async () => {
      const meals = await searchCategoryRecipe();
      setRecipeButton(meals.meals);
      console.log(recipeButton);
    })();
  }, []);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        All
      </button>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        Beef
      </button>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        Lamb
      </button>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        Chicken
      </button>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        Breakfast
      </button>

      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        // onClick={ () => }
      >
        Dessert
      </button>
    </div>
  );
}

export default ButtonsRecipe;
