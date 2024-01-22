import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, TextInput } from '@mantine/core';
import { IconEdit, IconArrowBack, IconTrash } from '@tabler/icons-react';
import { editTodo, removeTodo } from '../store/todoSlice';
import styled from 'styled-components';

const EditIcon = styled(IconEdit)`
cursor: pointer;
`;
const ReturnIcon = styled(IconArrowBack)`
cursor: pointer;
`;
const TrashIcon = styled(IconTrash)`
cursor: pointer;
`;

const Todo = ({ todo, handleRemoveClick }) => {
    const { id, task, complete } = todo;
    const [text, setText] = useState(task);
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onEditDone = () => {
        dispatch(editTodo({ id, task: text }));
        handleEditClick();
    }

    const handleEditClick = () => {
        setDisabled(state => !state);
    }

    return (
        <Grid gutter="md" justify='center'>
            <Grid.Col span={8}>
                <TextInput
                    variant="unstyled"
                    value={text}
                    onChange={textChangeHandler}
                    grow='true'
                    disabled={disabled}
                    rightSection={(!disabled ? <ReturnIcon onClick={onEditDone} /> : '')}
                />
            </Grid.Col>
            <Grid.Col span="content">
                <EditIcon onClick={handleEditClick} />
            </Grid.Col>
            <Grid.Col span="content">
                <TrashIcon onClick={() => {
                    handleRemoveClick(id)
                }} />
            </Grid.Col>
        </Grid>
    )
};

export default Todo;