import questions from './questions';

import makeReducer from '../reducer';

const ID = "government";

export const initialState = {
  operation: null,
  specialActivity: null,
  question: questions[0]
};

export default makeReducer({ initialState, questions });
