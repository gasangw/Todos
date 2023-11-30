import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [];

const addTodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos: (state) => {
           return state
        },
        addTodo: (state, action) => {
         state.push({ id: uuid(), message: action.payload.message, checked: action.payload.checked });
        },
        editTodo: (state, action) => {
          const { id, message, checked } = action.payload
          const existingTodo = state.find(todo => todo.id === id)
          if(existingTodo){
            existingTodo.message = message
            existingTodo.checked = checked
          
          }
          return state
        },
        deleteTodo: (state, action) => {
          const { id } = action.payload
          return state.filter(todo => todo.id !== id)
        },
        checkedTodo: (state, action) => {
           const { id } = action.payload
           const existingTodo = state.find(todo => todo.id === id)
           if(existingTodo){
             existingTodo.checked = !existingTodo.checked
           }
        }
    }
})

export const { addTodo, editTodo, deleteTodo, checkedTodo } = addTodoSlice.actions
export default addTodoSlice.reducer