import { combineReducers } from 'redux';
import fetchInfoIngredients from './fetchInfoIngredients';
import fetchInfoName from './fetchInfoName';
import fetchInfoFirstLetter from './fetchInfoFirstLetter';

const rootReducer = combineReducers({
  ingredients: fetchInfoIngredients,
  name: fetchInfoName,
  firstLetter: fetchInfoFirstLetter,
});

export default rootReducer;
