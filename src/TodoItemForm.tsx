import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { ITodo } from './interfaces';
import TodoItems from './TodoItems';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  disBtn: {
    opacity: 0.6,
  },
}));

const TodoItemForm: React.FC = () => {
  const classes = useStyles();

  const [todo, setTodo] = React.useState<ITodo[]>([]);
  const [task, setTask] = React.useState<string | boolean>('');
  const [details, setDetails] = React.useState<string>('');

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[];
    setTodo(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.id === 'task') {
      setTask(event.target.value);
    } else {
      setDetails(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, details: details };
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask('');
    setDetails('');
  };

  const handleRemoveTodo = (taskDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskDelete;
      }),
    );
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <h1>Todo List</h1>
        <TextField
          value={task}
          onChange={handleChange}
          className={classes.input}
          id="task"
          label="Todo"
        />
        <TextField
          value={details}
          onChange={handleChange}
          className={classes.input}
          id="details"
          label="Details"
        />
        <Button disabled={!task} onClick={addTask} variant="contained" color="primary">
          ADD
        </Button>
      </form>
      <Box>
        {todo.map((task: ITodo, key: number) => {
          return <TodoItems handleRemoveTodo={handleRemoveTodo} task={task} key={key} />;
        })}
      </Box>
    </>
  );
};

export default TodoItemForm;
