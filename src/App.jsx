import {useState, useEffect} from 'react'
import TodoHeading from "./Components/Heading"
import TextInput from "./Components/TextInput"
import DisplayTodos from "./Components/DisplayTodos"

function App() {
const [todos, setTodos] = useState(()=> JSON.parse(localStorage.getItem("todos")) || [])

const addTodo =(newTodo)=>{
  setTodos(prevTodo => [...prevTodo, newTodo])
}

const deleteTodo =(ID)=> {
  setTodos((prevState) => {
    return prevState.filter((todo) => todo.id !== ID)
  })
}

useEffect(()=> {
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <div>
      <TodoHeading />
      <TextInput  onAddTodo={addTodo} todo={todos}/>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="mx-auto w-3/5 mt-4">
             <DisplayTodos todo={todo} deleteTodo={deleteTodo} />
          </div>
        )
      })}
    </div>
  )
}

export default App
