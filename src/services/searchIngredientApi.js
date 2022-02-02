const url = (value) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;

const searchIngredientAPI = async (value) => {
  const response = await fetch(url(value));
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchIngredientAPI;
