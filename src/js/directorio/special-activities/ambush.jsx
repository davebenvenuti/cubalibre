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

export default function Ambush({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone();

  return (
    <Card>
      <CardHeader title="Ambush" subheader="max 1" />
      <CardContent>
        <ul>
          <li>
            In the attack space with the fewest total DR Guerrillas (at least 1 of them underground)
          </li>
          <li>
            <strong>First</strong> against targetted cash, <i>then</i> against Government, <i>then</i> Syndicate, <i>then</i> 26 July
          </li>
          <li>
            <strong>If none</strong>, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
