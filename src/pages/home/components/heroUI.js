import React from 'react'
import sectionClosure from '../../../assets/images/section_bottom_shape.png'
import InputUI from '../../../components/inputsUI'

const HeroUIComponent = () => {
  return (
    <section className='w-full hero_container relative'>
      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='md:flex md:flex-row h-screen'>
          <div className='md:basis-1/2 h-full w-full flex flex-col justify-center'>
            <h1 className='lg_header_text'>Get Syynd</h1>
            <h1 className='text-white'>Everything you need as an independent creative talent, a fan or investor.</h1>
            <p className='mt-5 text-white text-base'>

            </p>
          </div>
          <div className='md:basis-1/2 h-full w-full flex items-center justify-center'>
            <div className='py-14 px-12 bg-white shadow w-3/4'>
              <h1 className='text-center text-3xl font-bold'>Register now</h1>

              <form className='mt-10 space-y-5' action='#' method='POST'>
                <InputUI 
                  inputType={'text'}
                  placeholderValue={'Full name'}
                />
                <InputUI 
                  inputType={'emial'}
                  placeholderValue={'Email address'}
                />
                <InputUI 
                  inputType={'Password'}
                  placeholderValue={'Password'}
                />
                <InputUI 
                  inputType={'Password'}
                  placeholderValue={'Confirm password'}
                />
                <button className='p-2 bg-indigo-500 w-full text-white text-lg'>Create account</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <div className='absolute bottom-0 left-0 right-0 w-full'>
        <img src={ sectionClosure } width={'100%'} alt='brush effect png' />
      </div>
    </section>
  )
}

export default HeroUIComponent