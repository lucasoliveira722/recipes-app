import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const { drinkRecipes, setDrinkRecipes, getRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { drinks } = await getRecipes(urlDrinks);
      setDrinkRecipes(drinks);
    })();
  }, []);
  console.log(drinkRecipes);
  const maxRecipes = 12;
  return (
    <div>
      <Header title="Drinks" />
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
