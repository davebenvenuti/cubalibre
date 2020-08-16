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

export default function March({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "infiltrate" }));
  const onNone = () => dispatch(changeOperation({ operation: "attack" }));

  return (
    <Card>
      <CardHeader title="March" subheader="To these spaces" />
      <CardContent>
        <ul>
          <li>
            All ECs with Underground 26 July Guerrillas until 1 on each
          </li>
          <li>
            <strong>Then</strong> 1 Government-Controlled space, <i>first</i> where Support, <i>with</i> Guerrillas from all adjacent Opposition spaces and ECs
          </li>
          <li>
            <strong>If El Che</strong>, Reverse above order
          </li>
          <li>
            <strong>Then</strong> 1 space closer to Havana <i>with</i> largest 26 July group yet to move
          </li>
          <li>
            <strong>Leave</strong> 1 26 July Guerrilla in each space
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
