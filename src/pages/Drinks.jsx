import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipe from '../components/CardRecipe';

export default function Drinks() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const drinks = await searchRecipes('drinks');
      setRecipes(drinks.drinks);
    })();
  }, []);
  const twelve = 12;
  console.log(recipes);
  return (
    <>
      <Header title="Drinks" />
      {recipes
        .map((recipe, index) => (index < twelve ? (
          <CardRecipe
            key={ recipes.idDrink }
            index={ index }
            url={ recipe.strDrinkThumb }
            name={ recipe.strDrink }
          />)
          : null))}
      <Footer />
    </>
  );
}
