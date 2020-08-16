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

export default function Assault({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "airstrike" }));
  const onNone = () => dispatch(changeOperation({ operation: "pass" }));

  return (
    <Card>
      <CardHeader title="Assault" subheader="For max 9 Resources, max 2-4" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong> in spaces to remove (not close) the most Bases, then to take Cash, <i>then</i> to remove the most Guerrillas
          </li>
          <li>
            Each space, target Bases, then Cash, then 26 July, then DR, then Syndicate
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
