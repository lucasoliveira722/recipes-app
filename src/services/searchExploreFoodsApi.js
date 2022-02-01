const RANDOM_FOODS_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const randomFoods = async () => {
  const result = await fetch(RANDOM_FOODS_URL);
  const data = await result.json();
  return data.meals;
};

export default randomFoods;
