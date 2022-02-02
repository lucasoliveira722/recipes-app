import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  getStrAreaNationalities,
  getFoodNationalities,
  getAllFoods,
} from '../services/searchNationalityApis';
import AppContext from '../context/AppContext';

export default function ExploreFoodsNationality() {
  const history = useHistory();
  const { foodCategories, setFoodCategories } = useContext(AppContext);
  const [nationalities, setNationalities] = useState([]);
  const [meals, setMeals] = useState([]);
  const [country, setCountry] = useState('All');

  const resultApi = async () => {
    const response = await getStrAreaNationalities();
    setMeals(Object.values(response.map((event) => event.strArea)));
  };

  useEffect(() => {
    resultApi();
  }, []);

  useEffect(() => {
    const result = async (value) => {
      if (country === 'All') { return; }
      const response = await getFoodNationalities(value);
      setNationalities(response.map((event) => event));
    };
    result(country);
  }, [setNationalities, country]);

  useEffect(() => {
    const setFoodsApi = async () => {
      const returnFoods = await getAllFoods();
      setFoodCategories(returnFoods);
    };
    setFoodsApi();
  }, [setFoodCategories]);

  return (
    <>
      <Header title="Explore Nationalities" />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ ({ target }) => {
          setCountry(target.value);
        } }
      >
        <option data-testid="All-option">
          All
        </option>
        { meals.map((event) => (
          <option
            key={ event }
            data-testid={ `${event}-option` }
          >
            {event}
          </option>))}
      </select>
      {
        (nationalities.length > 0 && country !== 'All') && (
          nationalities.slice(0, +'12').map((food, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${index}-recipe-card` }
              onClick={ () => history.push(`/foods/${food.idMeal}`) }
            >
              <img
                src={ food.strMealThumb }
                alt="img food"
                data-testid={ `${index}-card-img` }
              />
              <h1 data-testid={ `${index}-card-name` }>{ food.strMeal }</h1>
            </button>
          ))
        )
      }
      {
        (foodCategories.length > 1 && country === 'All')
        && (foodCategories.slice(0, +'12').map((food, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-recipe-card` }
            onClick={ () => history.push(`/foods/${food.idMeal}`) }
          >
            <img
              style={ { width: 300 } }
              src={ food.strMealThumb }
              alt="img food"
              data-testid={ `${index}-card-img` }
            />
            <h1 data-testid={ `${index}-card-name` }>{ food.strMeal }</h1>
          </button>
        ))
        )
      }
      <Footer />
    </>
  );
}
