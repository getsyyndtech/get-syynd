import React from 'react'

const InputUI = ({ inputType, autoCompleteValue, placeholderValue }) => {
  return (
    <>
      <input className='p-2 ring-1 w-full focus:bg-white bg-gray-100 duration-300 ring-gray-300' placeholder={placeholderValue} required type={inputType} autoComplete={autoCompleteValue} />
    </>
  )
}

export default InputUI