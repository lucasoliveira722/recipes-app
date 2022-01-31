// const urlFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchRecipes = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchRecipes;
