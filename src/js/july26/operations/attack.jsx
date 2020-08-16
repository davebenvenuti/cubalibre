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

export default function Attack({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "ambush" }));
  const onNone = () => dispatch(pass());

  return (
    <Card>
      <CardHeader title="Attack" subheader="Target Cash then Government pieces" />
      <CardContent>
        <ul>
          <li>
            In each space with at least 4 26 July Guerrillas that could take Cash or remove Government pieces
          </li>
          <li>
            <strong>Then</strong> in 1 other City or Province where 26 July could Ambush -- <i>first</i> to take Cash, <i>then</i> to remove Government pieces
          </li>
          <li>
            <strong>If Raúl</strong>, reroll failed Attacks
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
