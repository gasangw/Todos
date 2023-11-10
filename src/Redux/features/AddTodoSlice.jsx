import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, message: "great", checked: false },
  { id: 2, message: "Read Redux", checked: false },
  { id: 3, message: "Read Anki", checked: false },
];

const addTodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos: (state) => {
           return state
        },
        addTodo: (state, action) => {
           state.push(action.action)
        }
    }
})

export const { addTodo} = addTodoSlice.actions
export default addTodoSlice.reducer