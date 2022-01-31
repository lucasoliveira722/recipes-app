import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
// import ButtonsRecipe from '../components/ButtonsRecipe';
import AppContext from '../context/AppContext';

export default function Foods() {
  const urlFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const { foodRecipes, setFoodRecipes, getRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { meals } = await getRecipes(urlFood);
      setFoodRecipes(meals);
    })();
  }, []);
  // console.log(recipes);
  const maxRecipes = 12;
  return (
    <>
      <Header title="Foods" />
      {/* <ButtonsRecipe title={ categoryName } /> */}
      {foodRecipes.slice(0, maxRecipes)
        .map((recipe, index) => (
          <CardRecipe
            key={ recipe.idMeal }
            index={ index }
            url={ recipe.strMealThumb }
            name={ recipe.strMeal }
          />))}
      <Footer />
    </>
  );
}
