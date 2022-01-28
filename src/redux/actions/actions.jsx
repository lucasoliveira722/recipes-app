import searchFirstLetterAPI from '../../services/searchFirstLetterAPI';
import searchIngredientAPI from '../../services/searchIngredientApi';
import searchNameAPI from '../../services/searchNameAPI';

export const INFO_FIRST_LETTER = 'INFO_FIRST_LETTER';
export const INFO_INGREDIENTS = 'INFO_INGREDIENTS';
export const INFO_NAME = 'INFO_NAME';

export const infoFirstLetter = (payload) => ({
  type: INFO_FIRST_LETTER,
  payload,
});

export const infoIngredients = (payload) => ({
  type: INFO_INGREDIENTS,
  payload,
});

export const infoName = (payload) => ({
  type: INFO_NAME,
  payload,
});

export function fetchFirstNameThunk() {
  return (dispatch) => searchFirstLetterAPI().then((data) => dispatch(saveToken(data)));
}

export function fetchIngredientThunk() {
  return (dispatch) => searchIngredientAPI().then((data) => dispatch(saveToken(data)));
}

export function fetchNameThunk() {
  return (dispatch) => searchNameAPI().then((data) => dispatch(saveToken(data)));
}
