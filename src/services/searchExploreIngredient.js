export const ingredientsFood = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then((data) => data.meals.slice(0, +'12'))
);

export const ingredientsDrink = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json())
    .then((data) => data.drinks.slice(0, +'12'))
);
