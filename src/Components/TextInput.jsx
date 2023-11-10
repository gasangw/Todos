import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/features/AddTodoSlice";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function TextInput() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: uuid(),
    message: "",
    checked: false,
  });
  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addTodoHandler = () => {
    if (todo.message === "") {
      toast.error('The Input can not be empty, Kindly fill in something...')
      return;
    }

    dispatch(addTodo({id: todo.id, message: todo.message, checked: todo.checked}))
    toast.success('Todo Added Successfully')
    setTodo({ id: uuid(), message: "", checked: false });
  };
  return (
    <>
      <div className="flex justify-between rounded-full shadow-md w-3/5 mx-auto mt-8 px-6 items-center">
        <input
          type="text"
          id={todo.id}
          onChange={inputTextHandler}
          placeholder="Add todo..."
          value={todo.message}
          name="message"
          className="py-4 px-3 w-4/5 outline-none placeholder-black"
        />
        <p
          className="bg-green-600 py-2 px-4 rounded-full cursor-pointer"
          onClick={addTodoHandler}
        >
          <FontAwesomeIcon icon={faPlus} className="text-[#f5f5f5]" />
        </p>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default TextInput;
