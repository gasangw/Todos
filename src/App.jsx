import { useEffect } from 'react'
import TodoHeading from "./Components/Heading"
import TextInput from "./Components/TextInput"
import DisplayTodos from "./Components/DisplayTodos"
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  },[todos])

const allTodos = JSON.parse(localStorage.getItem("todos"))
console.log(allTodos)
return (
    <div>
      <TodoHeading />
      <TextInput  todo={todos}/>
      {allTodos && allTodos.map((todo) => {
        console.log(todo)
        return (
          <div key={todo.id} className="mx-auto w-3/5 mt-4">
             <DisplayTodos todo={todo.message} />
          </div>
        )
      })}
    </div>
  )
}

export default App
