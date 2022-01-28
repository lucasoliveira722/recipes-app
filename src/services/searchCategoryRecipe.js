const urlFood = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const searchCategoryRecipe = async (type) => {
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

export default searchCategoryRecipe;
