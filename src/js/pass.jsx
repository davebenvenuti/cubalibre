import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import {
  reset
} from './actions';

export default function Pass({ dispatch }) {
  function handlePass() {
    dispatch(reset());
  }

  return (
    <Card>
      <CardContent>
        <Typography>
          Pass
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handlePass}>
          Ok
        </Button>
      </CardActions>
    </Card>
  );
}
