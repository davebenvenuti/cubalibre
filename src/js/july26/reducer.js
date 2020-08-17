import questions from './questions';

import makeReducer from '../reducer';

export const initialState = {
  operation: null,
  specialActivity: null,
  question: questions[0]
};

export default makeReducer({ initialState, questions });
