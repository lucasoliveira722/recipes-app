const urlFood = (value) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
const urlDrink = (value) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;

const searchNameAPI = async (value, pathname) => {
  if (pathname === '/foods') {
    const response = await fetch(urlFood(value));
    const data = await response.json();

    return response.ok ? Promise.resolve(data) : Promise.reject(data);
  }
  const response = await fetch(urlDrink(value));
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchNameAPI;
