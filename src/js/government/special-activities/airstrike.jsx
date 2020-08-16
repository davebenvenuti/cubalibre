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

export default function AirStrike({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => dispatch(changeSpecialActivity({ specialActivity: "reprisal" }));

  return (
    <Card>
      <CardHeader title="Air Strike" subheader="vs an Active piece, in a Province if possible, otherwise EC" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong> to remove 26 July, then DR Base
          </li>
          <li>
            <strong>Then</strong> to remove 26 July, then DR where a Cube
          </li>
          <li>
            <strong>Then</strong> to remove 26 July, then DR Guerrilla from a space
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
