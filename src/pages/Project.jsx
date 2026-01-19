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
 
 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
 



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
 

]



  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4

      },
      scrollTrigger:{
        trigger:'.lol',
        
        start:'top 100%',
        end:'top -200%',
        scrub:true
      }
       
    })

  })























  return (
    <div className='p-4 mb-[100vh] text-black'>
      <div className='pt-[40vh]' >
        <h2 className='font-[font2] text-[13vw] uppercase '> projets 
       </h2>
      </div>

      <div className='-mt-20 lol'>

        {
          projects.map(function(elem , idx){
         return  <div key={idx} className='hero w-full  h-[520px] mb-4 flex gap-4 '> 
             
             <ProjectCard  image1={elem.image1} image2={elem.image2}/>

             </div>
          })}
        

      </div>
    </div>
  )

}

export default Project

        