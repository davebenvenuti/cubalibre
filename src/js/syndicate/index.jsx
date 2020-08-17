import React from 'react';

import reducer, { initialState } from './reducer';

import {
  noop
} from 'lodash/fp';

import operationComponentMap from './operations';
import specialActivityComponentMap from './special-activities';

import createFaction from '../faction-factory';

export const ID = "syndicate";

export default createFaction({ reducer, initialState, operationComponentMap, specialActivityComponentMap });
