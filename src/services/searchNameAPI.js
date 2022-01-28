const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';

const searchNameAPI = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default searchNameAPI;
