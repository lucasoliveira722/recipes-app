const urlFood = (value) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
const urlDrinks = (value) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;

const searchFirstLetterAPI = async (value, pathname) => {
  if (pathname === '/foods') {
    const response = await fetch(urlFood(value));
    const data = await response.json();

    return response.ok ? Promise.resolve(data) : Promise.reject(data);
  }
  const response = await fetch(urlDrinks(value));
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchFirstLetterAPI;
