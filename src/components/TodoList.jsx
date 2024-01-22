import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, TextInput, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowBack } from '@tabler/icons-react';
import styled from 'styled-components';

import { removeTodo, addTodo } from '../store/todoSlice';

import Todo from './Todo';

const ReturnIcon = styled(IconArrowBack)`
cursor: pointer;
`;

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: {
            newTodo: '',
        },
        validate: {
            newTodo: (value) => (!value ? 'Field cannot be empty.' : null),
        }
    });

    const handleRemoveClick = (id) => {
        console.log(id)
        dispatch(removeTodo({ id }));
    }

    const handleSubmitAddTodo = (values) => {
        const { newTodo } = values;
        dispatch(addTodo({ id: todos.length, task: newTodo, completed: false }))
    }

    return (
        <Container
            size="lg"
        >
            <Grid align='center'>
                <Grid.Col span={{ base: 12 }}>
                    <form onSubmit={form.onSubmit(handleSubmitAddTodo)}>
                        <TextInput
                            size="lg"
                            {...form.getInputProps('newTodo')}
                            grow='true'
                            rightSection={<ReturnIcon onClick={form.onSubmit(handleSubmitAddTodo)} />}
                        />
                    </form>
                    {todos.map(todo => (
                        <Todo key={`todoItem-${todo.id}`} todo={todo} handleRemoveClick={handleRemoveClick} />
                    ))}
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default TodoList;