import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: 0,
    task: 'some random thing',
    completed: false
}, {
    id: 1, 
    task: 'yawn',
    completed: true
}];

export const todoSlice = createSlice({
    name: "todos",
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload; 
            state.todos.push(newTodo);
        },
        editTodo: (state, action) => {
            const { id, task } = action.payload;
            const currentTask = state.todos.find(item => item.id === id);
            if(currentTask) 
                currentTask.task = task;
        },
        removeTodo: (state, action) => {
            const { id } = action.payload; 
            const filteredTasks = state.todos.filter(item => item.id !== id);
            state.todos = filteredTasks; 
        },
        updateCompleteStatus: (state, action) => {
            const { id } = action.payload; 
            const currentTask = state.todos.find(item => item.id === id);
            if(currentTask) 
                currentTask.completed = !currentTask.completed;
        }
    }
});

export const { addTodo, editTodo, removeTodo, updateCompleteStatus } = todoSlice.actions;

export default todoSlice.reducer; 