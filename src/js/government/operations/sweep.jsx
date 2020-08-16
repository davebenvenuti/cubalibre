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
  performedOperation
} from '../../actions';

export default function Sweep({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "airstrike" }));
  const onNone = () => dispatch(changeOperation({ operation: "assault" }));

  return (
    <Card>
      <CardHeader title="Sweep" subheader="For max 9 Resources, max 2-4" />
      <CardContent>
        <ul>
          <li>
            To activate underground 26 July or DR Guerrillas, first at Support, then in Havana, then elsewhere - within those, first where cubes already
          </li>
          <li>
            Also move in up to Troops needed to activate all Guerrillas and add Government Control, losing no Government Control
          </li>
          <li>
            Target 26 July, then DR, then Syndicate
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
