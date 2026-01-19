import React from 'react'
import ProjectCard from '../components/project/ProjectCard.jsx'
 import nav1 from '../assets/nav1.png'
 import nav2 from '../assets/nav1.jpg'
 import p3 from '../assets/p3.jpg'
 import p4 from '../assets/p4.jpg'
 import p5 from '../assets/p5.jpg'
 import p6 from '../assets/p6.jpg'
 import p7 from '../assets/p7.jpg'
 import p8 from '../assets/nav4.png'
 import p9 from '../assets/p9.jpg'
 import p10 from '../assets/p10.jpg'
 import p11 from '../assets/p11.jpg'
 import p12 from '../assets/p12.jpg'
 import p13 from '../assets/p13.jpg'
 import p14 from '../assets/p14.jpg'
 import p15 from '../assets/p15.jpg'
 



const Project = () => {
const projects = [
  {
    image1: nav1,
    image2: nav2,
  },
  {
    image1: p3,
    image2: p4,
  },
  {
    image1: p5,
    image2: p6,
  },
  {
    image1: p7,
    image2: p8,
  },
  {
    image1: p9,
    image2: p10,
  },
  {
    image1: p11,
    image2: p12,
  },
  {
    image1: p13,
    image2: p14,
  },
  {
    image1: p15,
    image2: p5,
  },

]

  return (
    <div className='p-4 text-black'>
      <div className='pt-[42vh]' >
        <h2 className='font-[font2] text-[13vw] uppercase '> projets</h2>
      </div>

      <div className='-mt-20'>
       {projects.map(function(elem){
        return <ProjectCard image1={elem.image1} image2={elem.image2}/>
       })}
        
      </div>
     

    </div>
  )
}

export default Project
