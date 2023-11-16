import TextInput from "./TextInput";
import DisplayTodos from "./DisplayTodos";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <TextInput todo={todos} />
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="mx-auto w-3/5 mt-4">
            <DisplayTodos
              todo={todo.message}
              id={todo.id}
              checked={todo.checked}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
