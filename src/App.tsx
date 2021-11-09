import { Container } from '@material-ui/core';
import React from 'react';
import TodoItemForm from './TodoItemForm';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <TodoItemForm />
    </Container>
  );
};

export default App;
