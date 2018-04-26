import {SET_INPUT_DATA} from './actions';

const DEFAULT_STATE = {
  inputData: ''
};

function setInputData(state, action) {
  return Object.assign({}, state, {inputData: action.payload});
}

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_INPUT_DATA:
      return setInputData(state, action);
    default:
      return state;
  }
}

export default reducer;
