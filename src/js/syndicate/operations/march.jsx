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

export default function March({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "profit" }));
  const onNone = () => dispatch(reset());

  return (
    <Card>
      <CardHeader title="March" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, 1 to each empty EC, <i>from</i> most Syndicate Guerrillas, <i>then</i> where no open Casino, then random
          </li>
          <li>
            <strong>Then</strong>, <i>if next Propaganda card will be final</i>, any with Cash where no closed Casinos <i>to</i> any closed Casinos
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
