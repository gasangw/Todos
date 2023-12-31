import TextInput from "./TextInput";
import DisplayTodos from "./DisplayTodos";
import TodoHeading from "./Heading";
import { useSelector } from "react-redux";

export default function GetTodos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <TodoHeading />
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

