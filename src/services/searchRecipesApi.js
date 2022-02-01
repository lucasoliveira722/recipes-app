const urlFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchRecipes = async (type) => {
  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  switch (type) {
  case 'foods':
    getData(urlFood);
    break;
  case 'drinks':
    getData(urlDrinks);
    break;
  default:
  }
};

export default searchRecipes;
