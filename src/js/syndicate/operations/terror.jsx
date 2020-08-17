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

export default function Terror({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "bribe" }));
  const onNone = () => dispatch(reset());

  return (
    <Card>
      <CardHeader title="Terror" subtitle="In up to 2 spaces with max 2 Underground Syndicate Guerrillas, max 2" />
      <CardContent>
        <ul>
          <li>
            <strong>First, if 26 July a player and at victory</strong>, 1 space with Opposition
          </li>
          <li>
            <strong>Then, if Government a player and at victory</strong>, 1 space with Support
          </li>
          <li>
            <strong>If neither</strong>, in 1 random City/Province
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
