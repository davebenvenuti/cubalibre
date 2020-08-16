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

export default function Kidnap({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone();

  return (
    <Card>
      <CardHeader title="Kidnap" subheader="In 1 space where Terror Op & 26 July Guerrillas > Police, max 1" />
      <CardContent>
        <ul>
          <li>
            Target Cash if possible, otherwise a Faction with &gt; 0 resources
          </li>
          <li>
            Target Government Cash or Resources if possible, otherwise Syndicate
          </li>
          <li>
            <strong>If Raúl</strong>, reroll 1 or 2
          </li>
          <li>
            <strong>If no targets</strong>, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
