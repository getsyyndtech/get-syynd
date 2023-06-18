import React from 'react'

const ButtonUICompoennt = ({ text, largeButton }) => {
  return (
    <>
      <button className={largeButton ? 'py-3.5 px-10 text-lg rounded-md bg-indigo-500 text-white' : 'py-2 px-5 rounded-md bg-indigo-500 text-white'}>
        {text}
      </button>
    </>
  )
}

export default ButtonUICompoennt