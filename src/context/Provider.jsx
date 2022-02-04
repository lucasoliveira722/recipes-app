import PropTypes from 'prop-types';
import React, { useState } from 'react';
import searchByCategoryRecipe from '../services/searchByCategoryRecipe';
import searchCategoryRecipe from '../services/searchCategoryRecipe';
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
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [validation, setValidation] = useState(true);
  const getRecipes = async (url) => {
    const result = await searchRecipes(url);
    return result;
  };
  const getCategories = async (url) => {
    const result = await searchCategoryRecipe(url);
    return result;
  };
  const getRecipesByCategory = async (url) => {
    const result = await searchByCategoryRecipe(url);
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
    foodCategories,
    setFoodCategories,
    drinkCategories,
    setDrinkCategories,
    getCategories,
    categoryRecipes,
    setCategoryRecipes,
    getRecipesByCategory,
    validation,
    setValidation,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default Provider;
