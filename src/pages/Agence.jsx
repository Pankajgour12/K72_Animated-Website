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
    <div className="section1 relative text-black  py-1 ">
      <div ref={imageDivRef} className="absolute overflow-hidden lg:h-[20vw] h-[40vw] w-[30vw] rounded-4xl lg:w-[15vw] top-50 lg:left-[30vw] left-[20vw] py-0.5 ">
        <img ref={imageRef} className="h-full w-full object-cover" 
         src={img1}
        alt="" />
      </div>

       



      <div className="relative font-[font2] py-1 ">
      <div className="lg:mt-[55vh] mt-[31vh] py-0.5">
        <h1 className="text-[18vw] text-center uppercase leading-[17vw] ">
          Soixan7e <br />
          Douze
        </h1>
        
      </div>

      <div className="lg:pl-[45%] font-[font2] mt-30 lg:mt-10">
        <p className="lg:text-5xl text-2xl text-start px-4  "> 
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

  



<div className="section2 relative z-10 text-black px-6 md:px-40 py-24 font-[font2]">

 
  <div className="grid grid-cols-2  gap-y-10 mb-10 lg:mb-40">
    
   
    <h2 className="text-3xl">Expertise</h2>

    
    <div className="text-3xl  leading-[2.2rem]">
      <p>Stratégie</p>
      <p>Publicité</p>
      <p>Branding</p>
      <p>Design</p>
      <p>Contenu</p>
    </div>
    

  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-20 text-base leading-relaxed">
    
    <p className="text-2xl">
      Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
      et vivent grâce à la créativité sous toutes ses formes.
    </p>

    <p className="text-2xl">
      Notre création_ bouillonne dans un environnement où le talent a le goût
      d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
    </p>

    <p className="text-2xl">
      Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
      participe à bâtir une agence dont on est fiers.
    </p>

  </div>

</div>

    

 </div>
   
    
  );
};

export default Agence;
//  #D3FD50