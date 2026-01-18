import React, { useContext, useRef } from 'react'
import nav1 from '../../assets/nav1.jpg'
import nav2 from '../../assets/nav1.png'
import nav3 from '../../assets/nav3.jpg'
import nav4 from "../../assets/nav4.png"
import nav5 from "../../assets/nav1.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavbarContext } from '../../context/NavContext'






const FullScreenNav = () => {
   const fullNavLinksRef = useRef(null)
   const fullScreenRef = useRef(null)

   const [navOpen, setNavOpen] = useContext(NavbarContext)
  //  console.log(navOpen ,setNavOpen);

   useGSAP(function(){
    const tl = gsap.timeline()

    

    tl.from('.stairing',{
      
      height:0,
      stagger:{
        amount:-0.2
      }
    })

    tl.from(fullNavLinksRef.current,{
      opacity:0
    })

    tl.from('.link',{
      opacity:0,
      rotateX:90,
      stagger:{
        amount:0.2
      }


    })

    tl.pause()

    if(navOpen){
       fullScreenRef.current.style.display='block'
      tl.play()
    }else{
       fullScreenRef.current.style.display='none'

      tl.reverse()
    }

    


 },[navOpen])


 

 



   


  return (
    <div ref={fullScreenRef} id='fullscreennav' className='hidden absolute h-screen overflow-hidden z-50 w-full  text-white' >
      
      <div className='h-screen w-full fixed '>
        <div className=" h-full w-full flex">
            <div className='stairing h-full w-1/5 bg-black'> </div>
            <div className='stairing h-full w-1/5 bg-black'> </div>
            <div className='stairing h-full w-1/5 bg-black'> </div>
            <div className='stairing h-full w-1/5 bg-black'> </div>
            <div className='stairing h-full w-1/5 bg-black'> </div>

        </div>
      
         </div>


      
       <div ref={fullNavLinksRef} className='relative'>
        <div className='flex w-full justify-between p-3 items-start'>
        <div className=''>
          <div className='w-28'>
          <svg
className='w-full'
  xmlns="http://www.w3.org/2000/svg"
  
  viewBox="0 0 103 44"
>
  <path
   fill="white"
    fillRule="evenodd"
    d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M0,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L0,0.0057591623 L0,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
  />
</svg>
          
          </div>
          </div>

          <div 
          onClick={()=>{
            setNavOpen(false)
          }}
          className="relative h-28 w-28 cursor-pointer group">
  
  <div className="h-40 w-0.5 -rotate-45 origin-top bg-white absolute 
                  transition-colors duration-300 
                  group-hover:bg-[#d3fd50]">
  </div>

  <div className="h-40 w-0.5 rotate-45 right-0 absolute origin-top bg-white 
                  transition-colors duration-300 
                  group-hover:bg-[#d3fd50]">
  </div>

</div>

           
          

       </div>
      
       <div className='py-4' >
        <div className='link origin-top relative  border-t  border-white'>
            <h1 className='font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Projects</h1>
            <div className='moveLink absolute flex top-0 bg-[#d3fd50] text-black'>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour Tour voir</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav1} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour Tour voir</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav2} alt="" />
                </div>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour Tour voir</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav1} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour Tour voir</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav2} alt="" />
                </div>



            </div>


        </div>

        <div className='link origin-top relative  border-t  border-white'>
            <h1 className='font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Agence</h1>
            <div className='moveLink absolute flex top-0 bg-[#d3fd50] text-black'>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour Tout Savoir</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav3} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour Tout Savoir</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav4} alt="" />
                </div>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour Tout Savoir</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav3} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour Tout Savoir</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav4} alt="" />
                </div>



            </div>


        </div>

        <div className='link origin-top relative  border-t  border-white'>
            <h1 className='font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Contact</h1>
            <div className='moveLink absolute flex top-0 bg-[#d3fd50] text-black'>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour envoyer un fax</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav5} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour envoyer un fax</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav3} alt="" />
                </div>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Pour envoyer un fax</h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav5} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Pour envoyer un fax</h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav3} alt="" />
                </div>



            </div>


        </div>

        <div className='link origin-top relative  border-t border-b  border-white'>
            <h1 className='font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Blogue</h1>
            <div className='moveLink absolute flex top-0 bg-[#d3fd50] text-black'>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Lire les articles </h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav4} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Lire les articles </h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav2} alt="" />
                </div>
                <div className='moveX flex items-center  '>
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase '>Lire les articles </h2>
                    <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav3} alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[7.5vw] text-center leading-[0.8] py-2 pt-4 uppercase ' >Lire les articles </h2>
                     <img className='h-20 w-52 object-cover shrink-0 rounded-full ' src={nav4} alt="" />
                </div>



            </div>


        </div>

       


       
       </div>
       </div>
    </div>
  )
}

export default FullScreenNav