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

export default function Assassinate({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone();

  return (
    <Card>
      <CardHeader title="Assassinate" subheader="Where DR did max 1 Terror and DR Guerrillas > Police, max 1" />
      <CardContent>
        <ul>
          <li>
            Target a Government Base, <i>then</i> any player's Base, <i>then</i> a piece to take Cash, <i>then</i> an open Casino, <i>then</i> a cube, <i>then</i> 26 July
          </li>
          <li>
            <strong>If not possible</strong>, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
