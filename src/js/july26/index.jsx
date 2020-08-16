import React, { useReducer } from 'react';

import reducer, { initialState } from './reducer';

import {
  noop
} from 'lodash/fp';

import operationComponentMap from './operations';
import specialActivityComponentMap from './special-activities';

import createFaction from '../faction-factory';

export const ID = "july26";

export default createFaction({ reducer, initialState, operationComponentMap, specialActivityComponentMap });
