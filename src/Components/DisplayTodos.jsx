import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../Redux/features/AddTodoSlice';

function DisplayTodos(props) {
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo({
      id: id
    }))
  }
  return (
    <div className="flex justify-between items-center border-b-2 pb-2">
      <div className="flex gap-4">
        <input type="checkbox"/>
        <p className="text-balck text-lg">{props.todo}</p>
      </div>
      <div className="bg-gray-200 py-3 px-4 rounded-full cursor-pointer" onClick={() => deleteTodoHandler(props.id)} >
        <FontAwesomeIcon icon={faTrash} className="text-red-600" />
      </div>
    </div>
  );
}

DisplayTodos.propTypes = { todo: PropTypes.string.isRequired, id: PropTypes.number.isRequired };

export default DisplayTodos;

//style={{textDecoration: isChecked ? 'line-through' : '', fontStyle: isChecked ? 'italic': '', color: isChecked ? 'red': 'black' }}