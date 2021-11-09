import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ITodo } from './interfaces';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  task: ITodo;
}

const useStyles = makeStyles({
  card: {
    marginBottom: 15,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const TodoItems = ({ task }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography color="textSecondary" gutterBottom>
          {task.taskName}
        </Typography>
        <Typography>
          <DeleteIcon color="secondary" />
        </Typography>
      </CardContent>
      <CardContent>{task.details}</CardContent>
    </Card>
  );
};

export default TodoItems;
