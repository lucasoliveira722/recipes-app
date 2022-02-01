import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import ButtonsRecipe from '../components/ButtonsRecipe';
import searchRecipes from '../services/searchRecipesApi';

export default function Foods() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const meals = await searchRecipes('foods');
      setRecipes(meals.meals);
    })();
  }, []);
  console.log(recipes);
  const twelve = 12;
  return (
    <>
      <Header title="Foods" />
      <ButtonsRecipe title={ categoryName } />
      {recipes
        .map((recipe, index) => (index < twelve ? (
          <CardRecipe
            key={ recipes.idMeal }
            index={ index }
            url={ recipe.strMealThumb }
            name={ recipe.strMeal }
          />)
          : null))}
      <Footer />
    </>
  );
}
