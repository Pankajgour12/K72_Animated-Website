import React from 'react'


const ProjectCard = (props) => {
  return (
    <>  
              <div className='w-1/2 group  transition-all relative rounded-none hover:rounded-4xl overflow-hidden h-full'>
                <img className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110' src={props.image1} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10 '>
                   <h2 className='uppercase text-6xl font-[font2] border-2 pt-1 px-10 text-white border-white rounded-full '>voir le projet</h2>
                </div>
                
              </div>
                <div className='w-1/2 group  transition-all relative rounded-none hover:rounded-4xl overflow-hidden mb-3 h-full'>
                <img className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110' src={props.image2} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10 '>
                   <h2 className='uppercase text-6xl font-[font2] border-2 pt-1 px-10 text-white border-white rounded-full '>voir le projet</h2>
                </div>
                
              </div>
    
          </>
  )
}

export default ProjectCard
