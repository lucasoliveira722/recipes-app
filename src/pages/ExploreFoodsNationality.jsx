import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  getStrAreaNationalities,
  getFoodNationalities,
  getAllFoods,
} from '../services/searchNationalityApis';
import AppContext from '../context/AppContext';

export default function ExploreFoodsNationality() {
  // const history = useHistory();
  const { foodRecipes, setFoodRecipes } = useContext(AppContext);
  const [nationalities, setNationalities] = useState([]);
  const [meals, setMeals] = useState([]);
  const [country, setCountry] = useState('');

  const resultApi = async () => {
    const response = await getStrAreaNationalities();
    setNationalities(Object.values(response.map((event) => event.strArea)));
  };

  useEffect(() => {
    resultApi();
  }, []);

  useEffect(() => {
    const result = async (value) => {
      if (country === 'All') { return; }
      const response = await getFoodNationalities(value);
      setMeals(response.map((e) => e));
    };
    result(country);
  }, [setMeals, country]);

  useEffect(() => {
    const setFoodsApi = async () => {
      const returnFoods = await getAllFoods();
      setFoodRecipes(returnFoods);
    };
    setFoodsApi();
  }, [setFoodRecipes]);

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
        { nationalities.map((e) => (
          <option
            key={ e }
            data-testid={ `${e}-option` }
          >
            {e}
          </option>))}
      </select>
      <Footer />
    </>
  );
}
