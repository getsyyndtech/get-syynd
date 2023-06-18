import React from 'react'

const InputUI = ({ inputType, autoCompleteValue }) => {
  return (
    <>
      <input className='p-1.5 ring-1 w-full focus:ring-2 focus:ring-indigo-500 ring-gray-300 rounded-md' required type={inputType} autoComplete={autoCompleteValue} />
    </>
  )
}

export default InputUI