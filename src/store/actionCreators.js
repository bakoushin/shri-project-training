import {SET_INPUT_DATA, SOME_ACTION} from './actions';

export function setInputData(value) {
  return {type: SET_INPUT_DATA, payload: value};
}

export function someAction(value) {
  return {type: SOME_ACTION, payload: value};
}
