const RANDOM_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const randomDrinks = async () => {
  const result = await fetch(RANDOM_DRINK_URL);
  const data = await result.json();
  return data.drinks;
};

export default randomDrinks;
