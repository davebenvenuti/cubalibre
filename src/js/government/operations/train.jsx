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

export default function Train({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "transport" }));
  const onNone = () => dispatch(changeOperation({ operation: "garrison" }));

  return (
    <Card>
      <CardHeader title="Train" subheader="For max 9 Resources, max 2-4" />
      <CardContent>
        <ul>
          <li>
            <strong>Until fewer than 4 cubes available</strong>, please 4 cubes at Cities and Government Bases, <i>first</i> where no Government Control, <i>then</i> where no Police, <i>then</i> where no Troops
          </li>
          <li>
            <strong>Then</strong>, in 1 Province with 2+ cubes, no Government Base, and room for one, replace 2 Troops <i>then</i> Police with a Base
          </li>
          <li>
            <strong>Finally</strong>, if no Base built, buy Civic Action in a Training space for the greatest shift, <i>without</i> spending Resources below 9
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
