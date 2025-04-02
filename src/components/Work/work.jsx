import { useState } from "react";
import { Link } from "react-scroll";

/*--------------------
* Proejct Section
----------------------*/



function Proejct(props) {

    return (

        <>


            <div className="px-modal mfp-hide">
                <div className="single-project-box">
                    <div className="grid grid-cols-12 gx-3">
                        <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                            <div className="grid grid-cols-2 gap-2">
                                {props.projectDetails.images.map((img, i) => {
                                    return ( 
                                        <div key={`image_${i}`} className="col-span-1">
                                            <img className="border" src={img} title="" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:pl-10 lg:pl-14">
                            <h4 className="font-[600] text-[25px] text-black mb-4 pb-4 border-b">{props.projectDetails.title}</h4>
                            <p className="mb-3">{props.projectDetails.description}</p>
                            <p>{props.projectDetails.subDescription}</p>
                            <ul className="m-0 p-0 pt-7 list-none">
                                {props.projectDetails.details.map((detail, i) => {
                                    return (

                                        <li key={`detail_${i}`} className="flex py-2">
                                            <a href={detail.web} target="_blank"><span className="w-1/2 font-[600] text-black">{detail.title}</span></a>                                                                                       
                                        </li>                                     
                                    )
                                })}
                            </ul>
                        </div>
                        <button className="px-close" onClick={ props.closePopup }><i className="fa fa-times"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}




/*--------------------
* Work Section
----------------------*/

export default function Work() {
    const [showModal, setShowModal] = useState(0);
    const closePopup = () => {
        setShowModal(0);
    }

    const projectDetails = [

        {
            title: 'Web Hospital',
            description: 'Proyecto de pagina de hospital',
            images: ['img/web1.jpg', 'img/web2.jpg', 'img/web3.jpg', 'img/web4.jpg'],
            details: [
                {
                    title: 'Proyecto de Web Hospital',
                    web: 'https://pruebahospital.netlify.app/',                  
                },
            ]
        },
        {
            title: 'Paginas Web varias',
            description: 'Programación de paginas optimizadas y responsivas en HTML, CSS y JS',
            images: ['img/web1.jpg', 'img/web2.jpg', 'img/web3.jpg', 'img/web4.jpg'],
            details: [
                {
                    title: 'Portafolio HTML + CSS',
                    web: 'https://bastianorte.github.io/portafolio/',                  
                },
                {
                    title: 'Pagina Fabrica',
                    web: 'https://bastianorte.github.io/fabrica/',                  
                },
            ]
        },
        {
            title: 'Landings CMS',
            description: 'Landings page o página de aterrizaje diseñadas y desarrolladas de una forma optima y en diferentes plataformas de CMS',
            images: ['img/landings1.jpg', 'img/landings2.jpg', 'img/landings3.jpg', 'img/landings4.jpg'],
            details: [
                {

                },
            ]
        },         
        {
            title: 'Email Marketing',
            description: 'Diseño y desarrollo de mailings varios optimizados y responsivos en HTML y CSS',
            images: ['img/mailing6.jpg', 'img/mailing2.jpg', 'img/mailing4.jpg', 'img/mailing5.jpg'],
            details: [
                {
                    title: 'Ejemplo de mailing',
                    web: 'https://bastianorte.github.io/pagina-mail/',                  
                },
            ]
        },  
        {
            title: 'Proyectos React',
            description: 'Algunos ejercicios que he desarrollado en React',
            images: ['img/react1.jpg', 'img/react2.jpg', 'img/react3.jpg', 'img/react4.jpg'],
            details: [
                {
                    title: 'Cotizador de Criptomonedas',
                    web: 'https://famous-biscotti-9f0fba.netlify.app/',                  
                },
                {
                    title: 'Planificador de gastos',
                    web: 'https://stunning-truffle-0917ff.netlify.app/',                  
                },  
                {
                    title: 'Agenda de horas',
                    web: 'https://taupe-sprinkles-0671bc.netlify.app',                  
                },                                  
            ]
        },             
    ]
    return (
        <>
            <section data-scroll-data="3" id="portfolio" className="section">
                <div className="container">
                    <div className="grid section-heading">
                        <div className="lg:col-span-6 text-center mx-auto">
                            <h3><span>Proyectos</span></h3>
                        </div>
                    </div>
                    <div className="lightbox-gallery portfolio-box">`

                    <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/landings1.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Proyecto de hospital</h4>
                                    <p>Gestión y desarrollo de landings en diversos CMS</p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(1)}>Ver Más</div>
                                    </div>
                                </div>
                            </div>
                        </div>                          

                    <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/webpage1.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Paginas Web varias</h4>
                                    <p>Programación de paginas en HTML, CSS y JS </p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(2)}>Ver Más</div>
                                    </div>
                                </div>
                            </div>
                        </div>     

                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/landings1.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Landing CMS</h4>
                                    <p>Gestión y desarrollo de landings en diversos CMS</p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(3)}>Ver Más</div>
                                    </div>
                                </div>
                            </div>
                        </div>                                       

                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/port1.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Email Marketing</h4>
                                    <p>Diseño y desarrollo de mailing en HTML y CSS</p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(4)}>Ver Más</div>
                                    </div>
                                </div>
                            </div>
                        </div>

 

                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/react5.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Web Design</span></h6>
                                    <h4>Proyectos de ejemplo en React</h4>
                                    <p>Aplicaciones y proyectos de ejemplo en React</p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(5)}>Ver Más</div>
                                    </div>
                                </div>
                            </div>
                        </div>                           
                        
                       


                    </div>
                </div>
            </section>

            {showModal ? (
                <>
                    <Proejct closePopup={closePopup} projectDetails={projectDetails[showModal - 1]}></Proejct>
                </>
            ): null}


        </>
     );
}
