import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, checkedTodo } from "../Redux/features/AddTodoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function DisplayTodos(props) {
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
    toast.error("Todo Deleted Successfully");
  };
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 pb-2">
        <div className="flex gap-4">
          <input
            type="checkbox"
            onChange={() => dispatch(checkedTodo(props))}
          />
          <p
            className="text-balck text-lg"
            style={{
              textDecoration: props.checked ? "line-through" : "",
              fontStyle: props.checked ? "italic" : "",
              color: props.checked ? "red" : "black",
            }}
          >
            {props.todo}
          </p>
        </div>
        <Link to={`${props.id}`} className="underline text-red-600">
          Edit
        </Link>
        <div
          className="bg-gray-200 py-3 px-4 rounded-full cursor-pointer"
          onClick={() => deleteTodoHandler(props.id)}
        >
          <FontAwesomeIcon icon={faTrash} className="text-red-600" />
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

DisplayTodos.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default DisplayTodos;
