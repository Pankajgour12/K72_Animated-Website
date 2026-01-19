import React from 'react'
import Video from '../components/home/Video'
import HomeHero from '../components/home/HomeHero'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div>
     

     <div className='h-screen w-full fixed '>
      <Video/>
     </div>
    <div className='h-screen w-screen overflow-hidden relative flex flex-col'>
      
   <HomeHero />
   <HomeBottom/>
    </div>

    </div>
  )
}

export default Home
