import PropTypes from 'prop-types';
import React, { useState } from 'react';
import searchRecipes from '../services/searchRecipesApi';
import AppContext from './AppContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(true);
  const [searchField, setSearchField] = useState('ingredient');
  const [search, setSearch] = useState('ingredient');
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [foodRecipes, setFoodRecipes] = useState([]);
  const getRecipes = async (url) => {
    const result = await searchRecipes(url);
    return result;
  };
  const contextValue = {
    email,
    password,
    enable,
    search,
    searchField,
    setEmail,
    setPassword,
    setEnable,
    setSearch,
    setSearchField,
    getRecipes,
    drinkRecipes,
    setDrinkRecipes,
    foodRecipes,
    setFoodRecipes,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
