import React from 'react';

import {
  CardActions,
  Button
} from '@material-ui/core';

export default function SpecialActivityActions({ onDone, onNone }) {
  return (
    <CardActions>
      <Button size="small" color="primary" onClick={onDone}>Done</Button>
      <Button size="small" color="secondary" onClick={onNone}>Not Possible</Button>
    </CardActions>
  );
}
