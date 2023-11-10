import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/AddTodoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
})