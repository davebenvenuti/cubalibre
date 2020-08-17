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

export default function Muscle({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => dispatch(changeSpecialActivity({ specialActivity: "bribe" }));

  return (
    <Card>
      <CardHeader title="Muscle" subheader="Move 2 cubes (Troops if to Province, Police if to City), max 1" />
      <CardContent>
        <ul>
          <li>
            <strong>To</strong> an open Casino in 26 July-Control, <i>then</i> DR-Control space
          </li>
          <li>
            <strong>From</strong> a space with the most Cubes
          </li>
          <li>
            <strong>If no such Casino space</strong>, Bribe
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
