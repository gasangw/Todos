import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { editTodo } from "../Redux/features/AddTodoSlice";  

export default function EditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );
  const [message, setMessage] = useState(todo);

  const editHandler = (e) => {
    setMessage(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  };

  const addEditedTodoHandler = () => {
     dispatch(editTodo({ id: id, message: message.message, checked: message.checked}));
      navigate('/')
  }

  return (
    <>
      <div>
        <h1 className="text-8xl font-semibold text-center mt-14 text-gray-300">
          Edit todo
        </h1>
      </div>
      <div className="flex justify-between rounded-full shadow-md w-3/5 mx-auto mt-8 px-6 items-center">
        <input
          type="text"
          onChange={editHandler}
          placeholder="Add todo..."
          value={message.message}
          name="message"
          className="py-4 px-3 w-4/5 outline-none placeholder-black"
        />
        <p
          className="bg-green-600 py-2 px-4 rounded-full cursor-pointer"
          onClick={addEditedTodoHandler}
        >
          <FontAwesomeIcon icon={faPlus} className="text-[#f5f5f5]" />
        </p>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
