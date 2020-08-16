import React from 'react';

import {
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';

import SpecialActivityActions from '../../common/special-activity-actions';

import {
  changeSpecialActivity,
  reset
} from '../../actions';

import {
  noop
} from 'lodash/fp';

export default function Transport({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone;

  return (
    <Card>
      <CardHeader title="Transport" subheader="Up to 3 Troops, max 1" />
      <CardContent>
        <ul>
          <li>
            <strong>From</strong> city with most Troops above Government Control
          </li>
          <li>
            <strong>To</strong> Provice with Police not Troops, <i>then</i> where Active Guerrillas exceed Troops, <i>then</i> to remove Control
          </li>
          <li>
            If not possible, <strong>No Special Activity</strong>
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
