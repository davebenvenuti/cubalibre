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

export default function Profit({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => dispatch(changeSpecialActivity({ specialActivity: "muscle" }));

  return (
    <Card>
      <CardHeader title="Profit" subheader="At 1-2 open Casinos, max 2" />
      <CardContent>
        <ul>
          <li>
            Place up to 2 Cash with Syndicate Guerrillas, <i>first</i> where Syndicate has no Cash, <i>then</i> where no enemy, <i>then</i> at random
          </li>
          <li>
            <strong>If no Cash available or no Syndicate Guerrilla with open Casino</strong>, muscle
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
