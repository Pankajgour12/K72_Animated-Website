import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='flex flex-col pt-6 ' >
      <div className='self-end mr-6'>
        <p className='text-start  text-[1vw] font-[font2] '>
       
         K72 est une agence qui pense
         <br /> chaque action pour nourrir la marque.
        Demain,<br /> dans 5 mois et dans 5 ans.
       On cherche la <br /> friction qui crée l’étincelle pour générer de <br /> l’émotion.
        Pour assurer une relation honnête, <br />
         on est sans filtre, on dit ce qui doit être dit, <br />
          on fait ce qui doit être fait.
      </p>
      </div>



      <div className='flex font-[font1]  items-center justify-center gap-2 mt-6'>
        <Link className='text-[6.5vw] leading-[5.5vw] mt-6 border-white rounded-full px-14 py-2  uppercase border-4 '  to='/project'>Project</Link>
        <Link className='text-[6.5vw] leading-[5.5vw] mt-6 border-white rounded-full px-14 py-2  uppercase border-4 '  to='/agence'>Agence</Link>
       
      </div>
      
      
    </div>
  )
}

export default HomeBottom
