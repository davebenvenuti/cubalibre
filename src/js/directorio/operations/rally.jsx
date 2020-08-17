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

export default function Rally({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "subvert" }));
  const onNone = () => dispatch(changeOperation({ operation: "march" }));

  return (
    <Card>
      <CardHeader title="Rally" subheader="In Neutral or Passive Spaces" />
      <CardContent>
        <ul>
          <li>
            Guerrillas to Underground in all spaces with all Active DR Guerrillas, a DR Base, and a cube
          </li>
          <li>
            <strong>Then</strong> place Bases where at least 3 DR Guerrillas and room
          </li>
          <li>
            <strong>Then</strong> place Guerrillas at all DR Bases, <i>then</i> with DR Guerrillas, <i>then</i> 1 random
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
