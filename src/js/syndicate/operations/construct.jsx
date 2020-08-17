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

export default function Construct({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "profit" }));
  const onNone = () => dispatch(reset());

  return (
    <Card>
      <CardHeader title="Construct" subtitle="In 1 space, 2 if Resources > 35 (at Government/Syndicate Control), max 2" />
      <CardContent>
        <ul>
          <li>
            <strong>If next Propaganda card will be final</strong>, open closed Casinos where no Cash
          </li>
          <li>
            <strong>If not or no closed Caisno in such a space</strong>, place new closed Casinos, <i>first</i> where already 1 Casino
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
