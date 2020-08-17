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

export default function Subvert({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => onDone();

  return (
    <Card>
      <CardHeader title="Subvert" subheader="in a Province with DR Control, max 1" />
      <CardContent>
        <ul>
          <li>
            <strong>If 26 July at victory</strong>, remove the most Opposition possible
          </li>
          <li>
            <strong>Otherwise</strong> remove the most Support
          </li>
          <li>
            <strong>If neither applies</strong>, at highest Population, Neutral <i>if possible</i>
          </li>
          <li>
            <strong>If no DR Control</strong>, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
