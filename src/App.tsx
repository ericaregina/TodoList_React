import React from 'react';
import TodoList from './TodoList';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
};

export default App;
