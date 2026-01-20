import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
  


     <div className='flex flex-col pt-15 lg:pt-3' >
      <div className=' self-end mr-1 lg:mr-8'>
        <p className='text-start text-sm  lg:text-[1vw] font-[font2] '>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
       
         K72 est une agence qui pense
         <br /> chaque action pour nourrir la marque.
        Demain,<br /> dans 5 mois et dans 5 ans.
       On cherche la <br /> friction qui crée l’étincelle pour générer de <br /> l’émotion.
        Pour assurer une relation honnête, <br />
         on est sans filtre, on dit ce qui doit être dit, <br />
          on fait ce qui doit être fait.
      </p>
      </div>
      <div className='flex font-[font1] pt-10 items-center justify-center gap-2'>
        <Link className='lg:text-[6.5vw]  lg:leading-[5.5vw] mt-6 border-white hover:text-[#D3FD50] hover:border-[#D3FD50]  rounded-full lg:px-14 lg:py-2 px-8 py-1   uppercase lg:border-4 border-2 '  to='/project'>Project</Link>
        <Link className='lg:text-[6.5vw]  lg:leading-[5.5vw] mt-6 border-white hover:text-[#D3FD50] hover:border-[#D3FD50]  rounded-full lg:px-14 lg:py-2 px-8 py-1 uppercase lg:border-4 border-2'  to='/agence'>Agence</Link>
       
      </div>
      
      
    </div>

  
  )
}

export default HomeBottom
