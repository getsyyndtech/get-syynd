import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneInputComponentUI = () => {
  const [ phoneValue, setPhoneValue ] = useState('');
  return (
    <>
      <PhoneInput
        placeholder="(+) phone number"
        className='p-2 ring-1 w-full focus:bg-white bg-gray-100 duration-300 ring-gray-300'
        value={phoneValue}
        onChange={setPhoneValue}
      />
    </>
  )
}

export default PhoneInputComponentUI