import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import {
  answeredQuestion
} from './actions';

export default function Question({ question, dispatch }) {
  const answerYes = () =>
        dispatch(answeredQuestion({ question, answer: "yes" }));

  const answerNo = () =>
        dispatch(answeredQuestion(({ question, answer: "no" })));

  return (
    <Card>
      <CardContent>
        <Typography component="p">
          {question.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={answerYes}>
          Yes
        </Button>
        <Button size="small" color="primary" onClick={answerNo}>
          No
        </Button>
      </CardActions>
    </Card>
  );
}
