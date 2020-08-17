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
  reset
} from '../../actions';

export default function Rally({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "profit" }));
  const onNone = () => dispatch(reset());

  return (
    <Card>
      <CardHeader title="Rally" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, place 1 Guerrilla per space with any Casino and no Syndicate Guerrillas
          </li>
          <li>
            <strong>Then</strong>, where any open Casino, cube, and all Syndicate Guerrillas Active, flip Guerrillas Underground
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
