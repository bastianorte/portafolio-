import { Component, useRef, useEffect, useState } from 'react';
import { Link } from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';

/*--------------------
* Banner Section
----------------------*/
export default function Banner() {
    const imageURL = "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg";

    const img1 = '../public/img/imageheader2.png'
    const img2 = '../public/img/imageheader1.png'

    const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
        const imageRef = useRef(null);
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          window.addEventListener("scroll", scrollHandler)
          setIsLoading(false)
          setInView(isInView())
          return () => {
            window.removeEventListener("scroll", scrollHandler)
          }
        }, [isLoading]);
      
        const [inView, setInView] = useState(false);
      
        const isInView = () => {
          if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
          }
          return false;
        }
      
        const scrollHandler = () => {
          setInView(() => {return isInView()});
        }
      
        return isLoading ? null : (
          <img 
            src={inView ? secondaryImg : primaryImg} 
            alt=""
            ref={imageRef}
            className="imgbn"
          />
        )
      }

    return (
        <>
            <section data-scroll-data="0" id="home" className="home-section pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${imageURL})`,}}>
                <div className="container relative z-[1]">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6">
                            <div className="text-center lg:text-start mb-[50px] lg:mb-0">
                                <h6 className="text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]">👋, Hola mi nombre es Bastian Ortega</h6>
                                <h1 className="text-black font-[600] text-[40px] lg:text-[60px] xl:text-[70px] leading-[1] mb-[25px] md:mb-[35px]">Diseñador Web</h1>
                                <p className="text-[16px] md:text-[20px] mb-[8px] md:mb-[16px]">

                                Soy un apasionado diseñador web con 8 años de experiencia en la industria. Durante mi carrera, he tenido el privilegio de trabajar en una variedad de proyectos emocionantes que van desde sitios web corporativos hasta aplicaciones web interactivas.
                                </p>
                                <div className="pt-[10px]">
                                    <Link className="px-btn px-btn-theme" to="contactus">Contáctame</Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="home-image text-cente mx-auto">
                              <ImageToggleOnScroll primaryImg={img1} secondaryImg={img2} alt=""  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
