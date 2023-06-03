import React, { useState } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import Todo from './components/todo';
import Box from '@mui/joy/Box';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Box className="container">
      <h1 className='heading'>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />

    </Box>
  );
};

export default App;
