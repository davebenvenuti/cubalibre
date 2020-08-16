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

export default function Terror({ dispatch }) {
  const onSpecialActivity = () => dispatch(performedOperation({ specialActivity: "kidnap" }));
  const onNone = () => dispatch(changeOperation({ operation: "rally" }));

  return (
    <Card>
      <CardHeader title="Terror" subheader="With Underground 26 July" />
      <CardContent>
        <ul>
          <li>
            <strong>First</strong> in a space where Kidnap possible (<i>26 July Guerrillas &gt; Police</i>) -- EC <i>first</i>, then City, <i>then</i> open Casino
          </li>
          <li>
            <strong>Then</strong> on all other un-Sabotaged ECs
          </li>
          <li>
            <strong>Then</strong> in each City and Province not at Opposition
          </li>
          <li>
            <strong>Then</strong>, if no "Pact of Caracas", at each Passive Opposition
          </li>
        </ul>
      </CardContent>
      <OperationActions onSpecialActivity={onSpecialActivity} onNone={onNone} />
    </Card>
  );
}
