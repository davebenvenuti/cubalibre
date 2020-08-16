import React, { useReducer } from 'react';

import { If } from './util';

import Question from './question';
import Pass from './pass';

export default function createFaction({ reducer, initialState, operationComponentMap, specialActivityComponentMap }) {
  return function Faction() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
      question,
      operation,
      specialActivity,
      pass
    } = state;

    const Operation = !!operation ? (operationComponentMap[operation] || Pass) : Null;
    const SpecialActivity = !!specialActivity ? (specialActivityComponentMap[specialActivity] || Pass) : Null;

    return (
      <React.Fragment>
        <If condition={pass}>
          <Pass dispatch={dispatch} />
        </If>

        <If condition={question}>
          <Question question={question} dispatch={dispatch} />
        </If>

        <If condition={operation}>
          <Operation dispatch={dispatch} />
        </If>

        <If condition={specialActivity}>
          <SpecialActivity dispatch={dispatch} />
        </If>
      </React.Fragment>
    );
  };
}

function Null() {
  return null;
}
