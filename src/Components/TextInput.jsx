import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TextInput() {
  return (
    <div className='flex justify-between rounded-md shadow-md w-3/5 mx-auto mt-8 px-6 items-center'>
        <input type='text' placeholder='Add todo...' className='py-4 px-3 w-4/5 outline-none placeholder-black'/>
        <p className='bg-green-600 py-2 px-2 rounded-full cursor-pointer'>
          <FontAwesomeIcon icon={faPlus}  className="text-[#f5f5f5]"/>
        </p>
    </div>
  )
}

export default TextInput