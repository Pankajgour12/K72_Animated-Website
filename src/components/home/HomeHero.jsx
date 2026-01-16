import React from 'react'
import Video from './Video'


const HomeHero = () => {
  return (
    <div className='font-[font1] pt-5 text-center '>
      <div className='text-[9.4vw] uppercase leading-[8vw] flex items-center justify-center '>L'étincelle</div>
      <div className='text-[9.4vw] uppercase leading-[8vw] flex items-center justify-center '>qui 
        <div 
        className='h-[7vw] w-[15vw] -mt-3 rounded-full overflow-hidden'  > <Video/> 
         </div> génère 
      
      </div>
      <div className='text-[9.4vw] uppercase leading-[8vw] flex items-center justify-center '>la créativité</div>



        
      
    </div>
  )
}

export default HomeHero
