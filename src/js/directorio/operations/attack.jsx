import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

import OperationActions from '../../common/operation-actions';

import {
  changeOperation,
  performedOperation,
  pass
} from '../../actions';

export default function Attack({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "ambush" }));
  const onNone = () => dispatch(pass());

  return (
    <Card>
      <CardHeader title="Attack" subheader="In up to 3 spaces with any enemy and the following, max 3" />
      <CardContent>
        <ul>
          <li>
            <strong>And at least 1 Underground or 4 total DR Guerrillas</strong>, <i>first</i> those spaces with the most DR Guerrillas
          </li>
          <li>
            <strong>Target enemies</strong> <i>first</i> to take Cash, <i>then</i> target Government, <i>then</i> 26 July
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
