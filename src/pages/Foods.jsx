import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import ButtonsRecipe from '../components/ButtonsRecipe';
import AppContext from '../context/AppContext';

export default function Foods() {
  const urlFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlFoodCategory = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const { foodRecipes,
    setFoodRecipes,
    getRecipes,
    foodCategories,
    setFoodCategories,
    getCategories,
    validation,
    categoryRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { meals } = await getRecipes(urlFood);
      setFoodRecipes(meals);
      const mealsCategories = await getCategories(urlFoodCategory);
      setFoodCategories(mealsCategories.meals);
    })();
  }, []);
  // console.log(1, foodCategories);
  // console.log(recipes);
  const maxRecipes = 12;
  const mapFunction = (arr) => arr.map((recipe, index) => (
    <CardRecipe
      key={ recipe.idMeal }
      index={ index }
      url={ recipe.strMealThumb }
      name={ recipe.strMeal }
    />
  ));
  console.log('catF', categoryRecipes);
  return (
    <>
      <Header title="Foods" />
      <ButtonsRecipe categoriesNames={ foodCategories } type="meals" />
      {validation ? (
        mapFunction(foodRecipes.slice(0, maxRecipes))
      )
        : (
          mapFunction(categoryRecipes.slice(0, maxRecipes))
        ) }
      <Footer />
    </>
  );
}
