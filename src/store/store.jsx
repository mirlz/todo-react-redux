import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';

const store = configureStore({
    reducer: { todos: todoReducer },
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 