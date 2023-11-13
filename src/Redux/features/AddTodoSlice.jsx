import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, message: "Read Redux", checked: false },
];

const addTodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos: (state) => {
           return state
        },
        addTodo: (state, action) => {
         state.push(action.payload)
        },
        deleteTodo: (state, action) => {
          const { id } = action.payload
          return state.filter(todo => todo.id !== id)
        }
    }
})

export const { addTodo, deleteTodo } = addTodoSlice.actions
export default addTodoSlice.reducer