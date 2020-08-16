import questions from './questions';

import makeReducer from '../reducer';

const ID = "july26";

export const initialState = {
  operation: null,
  specialActivity: null,
  question: questions[0]
};

export default makeReducer({ initialState, questions });
