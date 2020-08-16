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
            In the attack space with the fewest total 26 July Guerrillas (and with an Underground 26 July Guerrilla)
          </li>
          <li>
            <strong>First</strong> where Cash would be taken, <i>then</i> a Base removed, then random
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
