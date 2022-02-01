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
    getCategories,
    validation,
    categoryRecipes } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { drinks } = await getRecipes(urlDrinks);
      setDrinkRecipes(drinks);
      const categories = await getCategories(urlDrinkCategory);
      setDrinkCategories(categories.drinks);
    })();
  }, []);
  const maxRecipes = 12;
  console.log('cat', categoryRecipes);
  const mapFunction = (arr, type) => arr.map((recipe, index) => (
    <CardRecipe
      type={ type }
      key={ recipe.idDrink }
      id={ recipe.idDrink }
      index={ index }
      url={ recipe.strDrinkThumb }
      name={ recipe.strDrink }
    />
  ));

  return (
    <div>
      <Header title="Drinks" />
      <ButtonsRecipe categoriesNames={ drinkCategories } type="drinks" />
      { validation ? (
        mapFunction(drinkRecipes.slice(0, maxRecipes), 'drinks')
      )
        : (
          mapFunction(categoryRecipes.slice(0, maxRecipes), 'drinks')

        )}

      )
      <Footer />
    </div>
  );
}
