import { INFO_INGREDIENTS } from '../actions/actions';

const INITIAL_STATE = {};

const fetchInfoIngredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_INGREDIENTS:
    return {
      ...state,
      payload,
    };
  default:
    return state;
  }
};

export default fetchInfoIngredients;
