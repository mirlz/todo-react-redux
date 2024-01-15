import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, TextInput } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';

const Todo = ({ todo }) => {
    const { id, task, complete } = todo;
    console.log(task)
    const [text, setText] = useState(task);

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <Grid gutter="md">
            <Grid.Col span={8}>
                <TextInput
                    variant="unstyled"
                    value={text}
                    onChange={textChangeHandler}
                    grow
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <IconEdit />
            </Grid.Col>
        </Grid>
    )
};

export default Todo;