import React from 'react';

import {
  CardActions,
  Button
} from '@material-ui/core';

export default function OperationActions({ onSpecialActivity, onNone }) {
  return (
    <CardActions>
      <Button size="small" color="primary" onClick={onSpecialActivity} >Special Activity</Button>
      <Button size="small" color="secondary" onClick={onNone}>None</Button>
    </CardActions>
  );
}
