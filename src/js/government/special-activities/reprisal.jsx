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

export default function Reprisal({ dispatch }) {
  const onDone = () => dispatch(reset());
  const onNone = () => dispatch(changeSpecialActivity({ specialActivity: "transport" }));

  return (
    <Card>
      <CardHeader title="Reprisal" />
      <CardContent>
        <ul>
          <li>
            Shift highest Population Government-Control with opposition toward Neutral
          </li>
          <li>
            Relocate 26 July, then DR, then Syndicate, Underground <i>first</i>, if possible to Neutral or Opposition
          </li>
        </ul>
      </CardContent>
      <SpecialActivityActions onDone={onDone} onNone={onNone} />
    </Card>
  );
}
