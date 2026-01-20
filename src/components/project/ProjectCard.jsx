import React from 'react'

const ProjectCard = (props) => {
  return (
  <>  
            <div className='lg:w-1/2 group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden h-full '>
            <img src={props.image1} alt="nav1" className='w-full h-full object-cover'/>
             <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15'>
              <h1 className='uppercase text-6xl font-[font2] border-2 pt-2 px-8 text-white border-white rounded-full' > 
                Voir le projet
              </h1>
             </div>
            
            </div>

            <div className='lg:w-1/2 group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden h-full '>
            <img src={props.image2} alt="nav1" className='w-full h-full object-cover'/>
             <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15'>
              <h1 className='uppercase text-6xl font-[font2] border-2 pt-2 px-8 text-white border-white rounded-full' > 
                Voir le projet
              </h1>
             </div>
            
            </div>
            

         
    </>
  )
}

export default ProjectCard
