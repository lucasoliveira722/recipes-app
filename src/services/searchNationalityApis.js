export const getStrAreaNationalities = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json())
    .then((data) => data.meals)
);

export const getFoodNationalities = (nationality) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`)
    .then((response) => response.json())
    .then((data) => data.meals)
);

export const getAllFoods = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((data) => data.meals)
);
