import {
  SET_CURRENT_FACTION,
  ANSWERED_QUESTION,
  PERFORMED_OP,
  CHANGE_OP,
  PERFORMED_SPECIAL_ACTIVITY,
  CHANGE_SPECIAL_ACTIVITY,
  RESET,
  PASS
} from './actions';

import {
  findIndex
} from 'lodash/fp';

import {
} from './actions';

export default function makeReducer({ initialState, questions }) {
  function answeredQuestion(state, extendState, action) {
    const { question, answer } = action.payload;
    const { no, yes } = question;
    const nextQuestion = findNextQuestion(question);

    if(no && answer == "no") {
      return extendState({
        question: null,
        operation: no
      });
    } else if(yes && answer == "yes") {
      return extendState({
        question: null,
        operation: yes
      });
    } else if(nextQuestion.pass) {
      return extendState({
        question: null,
        specialActivity: null,
        operation: null,
        pass: true,
      });

    } else {
      return extendState({
        question: nextQuestion
      });
    }
  }

  function findNextQuestion(question) {
    const { body, faction } = question;

    const index = findIndex({ body })(questions);

    return questions[index + 1] || PASS;
  }

  function changeOperation(state, extendState, action) {
    return extendState({
      operation: action.payload.operation
    });
  }

  function performedOperation(state, extendState, action) {
    return extendState({
      operation: null,
      specialActivity: action.payload.specialActivity
    });
  }

  function changeSpecialActivity(state, extendState, action) {
    return extendState({
      specialActivity: action.payload.specialActivity
    });
  }

  return function update(state = initialState, action) {
    const extendState = (newState) => ({
      ...state,
      ...newState
    });

    switch(action.type) {
    case ANSWERED_QUESTION:
      return answeredQuestion(state, extendState, action);

    case CHANGE_OP:
      return changeOperation(state, extendState, action);

    case PERFORMED_OP:
      return performedOperation(state, extendState, action);

    case CHANGE_SPECIAL_ACTIVITY:
      return changeSpecialActivity(state, extendState, action);

    case RESET:
      return initialState;

    case PASS:
      return extendState({ pass: true });

    default:
      return state;
    }
  };
}
