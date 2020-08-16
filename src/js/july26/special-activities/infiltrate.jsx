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

export default function Infiltrate({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone();

  return (
    <Card>
      <CardHeader title="Infiltrate" subheader="In a non-Support space within 1 space of an Underground 26 July Guerrilla, max 1" />
      <CardContent>
        <ul>
          <li>
            <strong>If possible</strong>, at an EC
          </li>
          <li>
            <strong>Otherwise</strong>, to take Cash
          </li>
          <li>
            <strong>Otherwise</strong>, to remove last Police from a space
          </li>
          <li>
            <strong>Otherwise</strong>, elsewhere at random
          </li>
          <li>
            If none, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
