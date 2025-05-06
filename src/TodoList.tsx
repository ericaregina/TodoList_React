import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Typography, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Stack spacing={2} alignItems="center" mt={5}>
      <Typography variant="h4"> To-Do List</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Nova tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Adicionar
        </Button>
      </Stack>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TodoList;
