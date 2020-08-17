import React from 'react';

import {
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';

import SpecialActivityActions from '../../common/special-activity-actions';

import {
  changeSpecialActivity,
  reset,
  pass
} from '../../actions';

import {
  noop
} from 'lodash/fp';

export default function Bribe({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => dispatch(pass());

  return (
    <Card>
      <CardHeader title="Bribe" subheader="Move per 8.1.2" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, to take Cash, <i>if possible</i>
          </li>
          <li>
            <strong>Then</strong>, 26 July, <i>then</i> DR at open Casino
          </li>
          <li>
            <strong>Then</strong>, 26 July, <i>then</i> DR at Syndicate
          </li>
          <li>
            <strong>If Mafia Offensive and Terror</strong>, Assassinate instead, <i>if possible</i>
          </li>
          <li>
            <strong>If none possible</strong>, no Special Activity
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
