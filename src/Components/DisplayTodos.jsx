import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DisplayTodos(props) {
const { id, checked, message } = props.todo;
const [isChecked, setIsChecked] = useState(checked)

const deleteATodo =(e) => {
  props.deleteTodo(id)
}

const handleChecked =()=>{
  setIsChecked(prevState => !prevState)
}

  return (
    <div className="flex justify-between items-center border-b-2 pb-2">
      <div className="flex gap-4">
        <input type="checkbox" onChange={handleChecked}/>
        <p className="text-balck text-lg" style={{textDecoration: isChecked ? 'line-through' : '', fontStyle: isChecked ? 'italic': '' }}>{message}</p>
      </div>
      <div className="bg-gray-200 py-3 px-4 rounded-full cursor-pointer" onClick={deleteATodo}>
        <FontAwesomeIcon icon={faTrash} className="text-red-600" />
      </div>
    </div>
  );
}

export default DisplayTodos;
