import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@mantine/core';

import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <Container
            size="lg"
        >
            {todos.map(todo => (
                <Todo key={`todoItem-${todo.id}`} todo={todo} />
            ))}
        </Container>
    )
}

export default TodoList;