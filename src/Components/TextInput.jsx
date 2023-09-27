import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';

function TextInput({onAddTodo}) {
  const [error, setError] = useState(false)
    const [todo, setTodo] = useState({
        id: uuid(),
        message: "",
        checked: false
    })
    const inputTextHandler =(e) => {
       const { name, value} = e.target
       setTodo((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
       })
       setError(false)
    }

    const addATodo =()=> {
        if(todo.message === ''){
           setError(true)
           return;
        }
        
        onAddTodo(todo)
        setTodo({id:uuid(), message: "", checked: false})
    } 
  return (
    <>
    {error && <p className='text-white bg-red-600 py-3 text-center font-semibold w-full absolute top-4'>The Input can't be empty, Kindly fill in something...</p>}
    <div className='flex justify-between rounded-full shadow-md w-3/5 mx-auto mt-8 px-6 items-center'>
    <input type='text' id={todo.id} onChange={inputTextHandler} placeholder='Add todo...' value={todo.message} name="message"  className='py-4 px-3 w-4/5 outline-none placeholder-black'/>
    <p className='bg-green-600 py-2 px-4 rounded-full cursor-pointer' onClick={addATodo}>
      <FontAwesomeIcon icon={faPlus}  className="text-[#f5f5f5]"/>
    </p>
   </div>
  </>
  )
}

export default TextInput