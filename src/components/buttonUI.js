import React from 'react'

const ButtonUICompoennt = ({ text, largeButton }) => {
  return (
    <>
      <button className={largeButton ? 'py-3.5 px-10 text-lg rounded-md' : 'py-2 px-5 rounded-md'}>
        {text}
      </button>
    </>
  )
}

export default ButtonUICompoennt