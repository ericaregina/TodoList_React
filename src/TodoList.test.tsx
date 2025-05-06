import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('adiciona nova tarefa', () => {
  render(<TodoList />);
  const input = screen.getByLabelText(/Nova tarefa/i);
  const button = screen.getByText(/Adicionar/i);

  fireEvent.change(input, { target: { value: 'Estudar React' } });
  fireEvent.click(button);

  expect(screen.getByText(/Estudar React/i)).toBeInTheDocument();
});

test('remove tarefa', () => {
  render(<TodoList />);
  const input = screen.getByLabelText(/Nova tarefa/i);
  const button = screen.getByText(/Adicionar/i);

  fireEvent.change(input, { target: { value: 'Comprar pão' } });
  fireEvent.click(button);

  const deleteButton = screen.getByLabelText(/delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Comprar pão/i)).not.toBeInTheDocument();
});
