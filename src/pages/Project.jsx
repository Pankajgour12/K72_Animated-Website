import React from 'react'
 import nav1 from '../assets/nav1.png'
 import nav2 from '../assets/nav1.jpg'


const Project = () => {
  return (
    <div className='p-4 text-black'>
      <div className='pt-[42vh]' >
        <h2 className='font-[font2] text-[13vw] uppercase '> projets</h2>
      </div>

      <div className='-mt-20'>
        <div className='w-full h-150 mb-4 flex gap-4  ' >
          <div className='w-1/2 group  transition-all relative rounded-none hover:rounded-4xl overflow-hidden h-full'>
            <img className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110' src={nav1} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10 '>
               <h2 className='uppercase text-6xl font-[font2] border-2 pt-1 px-10 text-white border-white rounded-full '>voir le projet</h2>
            </div>
            
          </div>
            <div className='w-1/2 group  transition-all relative rounded-none hover:rounded-4xl overflow-hidden h-full'>
            <img className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110' src={nav2} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10 '>
               <h2 className='uppercase text-6xl font-[font2] border-2 pt-1 px-10 text-white border-white rounded-full '>voir le projet</h2>
            </div>
            
          </div>

        </div>
        
      </div>
     

    </div>
  )
}

export default Project
