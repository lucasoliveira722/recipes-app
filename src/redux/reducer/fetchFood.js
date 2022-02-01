import { INFO_FIRST_LETTER } from '../actions/actions';

const INITIAL_STATE = '';

const fetchInfoFirstLetter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_FIRST_LETTER:
    return {
      ...state,
      payload,
    };
  default:
    return {
      state,
    };
  }
};

export default fetchInfoFirstLetter;
