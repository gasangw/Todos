import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DisplayTodos(props) {
   const {todo, isChecked} = props
  return (
    <div className="flex justify-between items-center border-b-2 pb-2">
      <div className="flex gap-4">
        <input type="checkbox"/>
        <p className="text-balck text-lg">{todo}</p>
      </div>
      <div className="bg-gray-200 py-3 px-4 rounded-full cursor-pointer">
        <FontAwesomeIcon icon={faTrash} className="text-red-600" />
      </div>
    </div>
  );
}

export default DisplayTodos;

//style={{textDecoration: isChecked ? 'line-through' : '', fontStyle: isChecked ? 'italic': '', color: isChecked ? 'red': 'black' }}