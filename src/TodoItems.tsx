import { Card, CardContent, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ITodo } from './interfaces';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  task: ITodo;
  handleRemoveTodo(taskDelete: string | boolean): void;
  handleToggleTodo(taskToggle: string | boolean): void;
}

const useStyles = makeStyles({
  card: {
    marginBottom: 15,
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  checkTrue: {
    textDecoration: 'line-through',
  },
});

const TodoItems = ({ task, handleRemoveTodo, handleToggleTodo }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <Typography className={classes.content} color="textSecondary" gutterBottom>
          <Checkbox
            checked={task.completed}
            onChange={handleToggleTodo.bind(null, task.taskName)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span className={task.completed ? classes.checkTrue : ''}>{task.taskName}</span>
        </Typography>
        <Typography className={classes.content}>
          <DeleteIcon
            style={{ cursor: 'pointer' }}
            onClick={() => handleRemoveTodo(task.taskName)}
            color="secondary"
          />
        </Typography>
      </CardContent>
      <CardContent>{task.details}</CardContent>
    </Card>
  );
};

export default TodoItems;
