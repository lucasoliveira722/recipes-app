import { INFO_NAME } from '../actions/actions';

const INITIAL_STATE = {};

const fetchInfoName = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_NAME:
    return {
      ...state,
      payload,
    };
  default:
    return state;
  }
};

export default fetchInfoName;
