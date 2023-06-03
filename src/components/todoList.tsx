import React from 'react';
import Todo from './todo';
import Box from '@mui/joy/Box';


interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul className='for-list'>
            {todos.map((todo) => (
                <li className='for-li'
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
