import {useState} from 'react'
import TodoHeading from "./Components/Heading"
import TextInput from "./Components/TextInput"
import TODOS from "./Components/Todos"
import DisplayTodos from "./Components/DisplayTodos"
import uuid from 'react-uuid';

function App() {
const [todos, setTodos] = useState([...TODOS])

const addTodo =(newTodo)=>{
  setTodos(prevTodo => [...prevTodo, newTodo])
}

const deleteTodo =(ID)=> {
  setTodos((prevState) => {
    return prevState.filter((todo, index) => todo.index !== ID)
  })
}

  return (
    <div>
      <TodoHeading />
      <TextInput  onAddTodo={addTodo} todo={TODOS}/>
      {todos.map((todo) => {
        return (
          <div key={uuid()} className="mx-auto w-3/5 mt-4">
             <DisplayTodos todo={todo} deleteTodo={deleteTodo} />
          </div>
        )
      })}
    </div>
  )
}

export default App
