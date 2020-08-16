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

export default function Garrison({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "airstrike" }));
  const onNone = () => dispatch(changeOperation({ operation: "sweep" }));

  return (
    <Card>
      <CardHeader title="Garrison" subheader="With police then troops" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong>, ECs to equal Guerrillas
          </li>
          <li>
            <strong>Then</strong>, to add Government Control and at least 1 Police and Troop to each City, <strong>from</strong> spaces with the most of the moving cube type, <i>not</i> last Police
          </li>
          <li>
            <strong>Then</strong> assault most 26 July Guerrillas
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
