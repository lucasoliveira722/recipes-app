const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';

const searchIngredientAPI = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchIngredientAPI;
