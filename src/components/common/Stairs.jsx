import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
   
    const pageRef = useRef(null)
    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.set(stairParentRef.current,{
        display:'block'
       

    })
    tl.from('.stair',{
        height:0,
        stagger:{
            amount:-0.25

        }

    })

    tl.to('.stair',{
        y:'100%',
        stagger:{
            amount:-0.25

        }

    })

    tl.set(stairParentRef.current,{
        display:'none'
    })
    tl.set('.stair',{
        y:'0%'
    })

  

    gsap.from(pageRef.current,{

        opacity:0,
        duration:1,
        
       
        
    })

 },[currentPath]) 



  return (
    <div>
        <div ref={stairParentRef} className='h-full w-screen fixed z-20 top-0'>
        <div className="h-full w-full flex">
            <div className='stair h-full w-1/5 bg-black'> </div>
            <div className='stair h-full w-1/5 bg-black'> </div>
            <div className='stair h-full w-1/5 bg-black'> </div>
            <div className='stair h-full w-1/5 bg-black'> </div>
            <div className='stair h-full w-1/5 bg-black'> </div>

        </div>
      
         </div>


        <div ref={pageRef} >
          {props.children}
          </div>



    </div>
  )
}

export default Stairs

