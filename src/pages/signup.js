import React from 'react'
import GetSyyndLogo from '../assets/images/Marketplace for Creative Talents.png'

const signUpPage = () => {
  return (
    <>
      <section className='sm:h-screen w-full'>
        <main>
          <div className='flex flex-row'>
            <div className='basis-1/2 h-screen w-full flex flex-col items-center justify-center gap-2'>
              <div className='logo_container'>
                <img src={GetSyyndLogo} width={'300'} alt='get syynd logo' />
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                  Create a new account
                </h2>
              </div>
              <form className='space-y-6' action='#' method='POST'></form>
            </div>
            <div className='basis-1/2 h-screen bg-gray-900 w-full'></div>
          </div>
        </main>
      </section>
    </>
  )
}

export default signUpPage