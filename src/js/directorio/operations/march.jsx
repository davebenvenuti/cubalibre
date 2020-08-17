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
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "subvert" }));
  const onNone = () => dispatch(changeOperation({ operation: "attack" }));

  return (
    <Card>
      <CardHeader title="March" subheader="With DR Guerrillas, max 2" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, just enough to take DR Control of the highest Population City or Province possible, <i>first from</i> where the most DR Guerrillas, <i>then from</i> 1 space with most DR yet to move
          </li>
          <li>
            <strong>Then</strong> 1 Government-Controlled space, <i>first</i> where Support, <i>with</i> Guerrillas from all adjacent Opposition spaces and ECs
          </li>
          <li>
            <strong>To</strong> a space closer to Havana
          </li>
          <li>
            <strong>If Morgan</strong>, March up to 2 spaces
          </li>
          <li>
            <strong>Do not</strong> remove DR Control or last DR Guerrilla from any space
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
