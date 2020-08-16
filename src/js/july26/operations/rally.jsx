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
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "infiltrate" }));
  const onNone = () => dispatch(changeOperation({ operation: "march" }));

  return (
    <Card>
      <CardHeader title="Rally" subheader="In non-Support spaces" />
      <CardContent>
        <ul>
          <li>
            Flip Underground where all Active 26 July Guerrillas, 26 July Base, and cube
          </li>
          <li>
            <strong>Then</strong> place Bases where at least 3 26 July Guerrillas and room
          </li>
          <li>
            <strong>Then</strong> place Guerrillas at 26 July Bases, <i>then</i> with 26 July Guerrillas, <i>then</i> 1 random
          </li>
          <li>
            <strong>If "Guerrilla Life"</strong>, combine flip/place
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
