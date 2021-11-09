import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    width: '100%',
    marginBottom: 20,
  },
}));

const TodoItemForm: React.FC = () => {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1>Todo List</h1>
      <TextField className={classes.input} id="standard-basic" label="Todo" />
      <TextField className={classes.input} id="standard-basic" label="Details" />
      <Button variant="contained" color="primary">
        ADD
      </Button>
    </form>
  );
};

export default TodoItemForm;
