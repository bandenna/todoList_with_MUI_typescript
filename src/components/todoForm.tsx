import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

import '../App.css'

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form className='for-btn' onSubmit={handleSubmit}>
            <Input className='for-input' placeholder='Enter Todo...' type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />

            <Button type="submit" className='ml-3' variant="solid">Add</Button>
        </form>
    );
};

export default TodoForm;
