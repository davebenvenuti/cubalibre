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

export default function Terror({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "assassinate" }));
  const onNone = () => dispatch(pass());

  return (
    <Card>
      <CardHeader title="Terror" subheader="With Underground DR Guerrillas" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, where Active Support
          </li>
          <li>
            <strong>Then</strong>, where Active Opposition
          </li>
          <li>
            <strong>Finally</strong>, at 1 (other) Assassination target, <i>first</i> a Government Base, <i>then</i> any player's Base, <i>then</i> other
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
