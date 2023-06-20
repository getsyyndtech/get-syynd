import React from 'react'
import HeroUIComponent from './components/heroUI'
import NavbarComponentUI from '../../components/navbarUI'

const HomePage = () => {
  return (
    <>
      <section className='h-full w-full'>
        <NavbarComponentUI />
        <main>
          <HeroUIComponent />
        </main>
      </section>
    </>
  )
}

export default HomePage