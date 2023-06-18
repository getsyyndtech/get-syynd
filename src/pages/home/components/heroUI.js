import React from 'react'
import ButtonUICompoennt from '../../../components/buttonUI'

const HeroUIComponent = () => {
  return (
    <section className='h-screen w-full'>
      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:flex-row gap-3 h-screen'>
          <div className='basis-1/2 w-full h-full flex flex-col justify-center'>
            <h1 className='text-indigo-500 xl:text-6xl text-3xl lg:text-5xl md:text-4xl font-bold'>
              Every tool you need as a Creative talent or Investor.
            </h1>
            <p className='mt-5 text-gray-400 text-sm'>
              Got Creative Talent? Bring it on. Join the Get Syynd <br /> Creative Talent Community of Talents, Fans and Investors <br /> (music, athletes, actors, models, artist, dancer).
            </p>
            <div className='mt-5 flex gap-2'>
              <ButtonUICompoennt
                text={'Sign Up'}
                largeButton={true}
              />
              <ButtonUICompoennt
                text={'Learn More'}
                largeButton={true}
              />
            </div>
          </div>
          <div className='basis-1/2 h-full w-full sm:flex sm:justify-center sm:items-center'>
            <div className='rounded-lg shadow-lg xl:h-5/6 lg:h-3/5 md:h-3/5 w-4/5 hero_sub_img'></div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroUIComponent