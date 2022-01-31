import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import AppContext from '../context/AppContext';
import ButtonsRecipe from '../components/ButtonsRecipe';

export default function Drinks() {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const urlDrinkCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { drinkRecipes,
    setDrinkRecipes,
    getRecipes,
    drinkCategories,
    setDrinkCategories,
    getCategories } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { drinks } = await getRecipes(urlDrinks);
      setDrinkRecipes(drinks);
      const categories = await getCategories(urlDrinkCategory);
      setDrinkCategories(categories.drinks);
    })();
  }, []);
  console.log(drinkRecipes);
  const maxRecipes = 12;
  return (
    <div>
      <Header title="Drinks" />
      <ButtonsRecipe categoriesNames={ drinkCategories } />
      {drinkRecipes.slice(0, maxRecipes)
        .map((recipe, index) => (
          <CardRecipe
            key={ recipe.idDrink }
            index={ index }
            url={ recipe.strDrinkThumb }
            name={ recipe.strDrink }
          />))}
      <Footer />
    </div>
  );
}
