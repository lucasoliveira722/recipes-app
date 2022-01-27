import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import FoodProgress from '../pages/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress';
import ExploreFoods from '../pages/ExploreFoods';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreFoodsNationality from '../pages/ExploreFoodsNationality';
import ExploreDrinks from '../pages/ExploreDrinks';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/foods/{id-da-receita}" component={ FoodDetails } />
      <Route path="/drinks/{id-da-receita}" component={ DrinkDetails } />
      <Route path="/foods/{id-da-receita}/in-progress" component={ FoodProgress } />
      <Route path="/drinks/{id-da-receita}/in-progress" component={ DrinkProgress } />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
      <Route path="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
      <Route path="/explore/foods/nationalities" component={ ExploreFoodsNationality } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}
