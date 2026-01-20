import React from 'react'
import Video from './Video'


const HomeHero = () => {
  return (
    <div className='font-[font1] mt-90 lg:mt-1 text-center '>
      <div className='lg:text-[9.4vw] text-[13vw] uppercase lg:leading-[8vw] leading-[11vw] flex items-center justify-center '>L'étincelle</div>
      <div className='lg:text-[9.4vw] text-[13vw] uppercase lg:leading-[8vw] leading-[11vw] flex items-center justify-center '>qui 
        <div 
        className='h-[7vw] w-[15vw] -mt-3 rounded-full overflow-hidden'  > <Video/> 
         </div> génère 
      
      </div>
      <div className='lg:text-[9.4vw] text-[13vw] uppercase lg:leading-[8vw]  leading-[11vw] flex items-center justify-center '>la créativité</div>



        
      
    </div>
  )
}

export default HomeHero
