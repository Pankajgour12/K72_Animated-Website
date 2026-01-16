import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'



const Agence = () => {

   const imageDivRef = useRef(null);
   const imageRef = useRef(null);

   const imageArray = [img1,img2,img3,img4,img5,img6,img7,img8,img3,img4,img5,img6,img7,img8]


   gsap.registerPlugin(ScrollTrigger);

   useGSAP(function(){

    gsap.to(imageDivRef.current,{
     
    scrollTrigger:{
        trigger:imageDivRef.current,
       
        start:'top 28%',
        end:'top -100%',
        scrub:1,
        pin:true,
        
       
      

        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1) imageIndex = Math.floor(elem.progress*imageArray.length)
          else imageIndex = imageArray.length-1
          imageRef.current.src = imageArray[imageIndex]
          
          

        }
      }
      
      
      
    })
   })

 






  return (
 <div>
    <div className="section1  py-1 ">
      <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-40 left-[30vw] py-0.5 ">
        <img ref={imageRef} className="h-full w-full object-cover" 
         src={img1}
alt="" />
      </div>

       



      <div className="relative font-[font2] py-1 ">
      <div className="mt-[55vh] py-0.5">
        <h1 className="text-[19vw] text-center uppercase leading-[17vw] ">
          Soixan7e <br />
          Douze
        </h1>
        
      </div>

      <div className="pl-[45%] font-[font1] mt-10">
        <p className="text-5xl "> 
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          
         
          
          Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </p>
      </div>
      </div>
    </div>

  



    <div className="section2  h-screen">
      
    </div>

 </div>
   
    
  );
};

export default Agence;
//  #D3FD50