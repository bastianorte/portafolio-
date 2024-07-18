

/*--------------------
* Service Section
----------------------*/
function Service(props) {
    return (
        <>
            <div className="lg:col-span-6">
                <div className={props.id.main + " feature-box-01"}>
                    <div className="icon"><i className={props.id.icon}></i></div>
                    <div className="feature-content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

/*--------------------
* Service List Section
----------------------*/
export default function ServiceList() {
    const service_list = [
        {id:{main:'bg-1', icon:'fas fa-laptop'}, title:'Diseño y desarrollo de sitios web', description:'Sitios web adaptados a las necesidades específicas del cliente. Esto implica el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX), desarrollo con tecnologías como HTML, CSS y JavaScript.'},
        {id:{main:'bg-2', icon:'fas fa-ruler-vertical'}, title:'Diseño gráfico y branding: ', description:'Crear elementos visuales para los sitios web, como logotipos, gráficos, imágenes y paletas de colores coherentes, para reforzar la identidad de la marca del cliente y proporcionar una experiencia visualmente atractiva.'},        
        {id:{main:'bg-3', icon:'fas fa-phone-alt'}, title:'Dispositivos móviles y responsive design:', description:'Asegurar que los sitios web sean accesibles y se vean bien en una variedad de dispositivos y tamaños de pantalla, incluyendo teléfonos, tablets y desktop.'},
        {id:{main:'bg-4', icon:'fas fa-columns'}, title:'Diseño y Desarrollo de Mailings:', description:'Diseño y desarrollo de mailings atractivos, optimizados y responsivos en HTML y CSS compatibles con una variedad de plataformas de mailign marketing.'},    
        {id:{main:'bg-5', icon:'fab fa-wordpress'}, title:'Sistemas de gestión de contenido (CMS): ', description:'Configuración e integración de "sistemas de gestión de contenido" como WordPress, Shopify o Wix para permitir que los clientes actualicen y gestionen fácilmente el contenido de sus sitios web sin necesidad de conocimientos técnicos.'},
        {id:{main:'bg-6', icon:'fas fa-globe'}, title:'Diseño y desarrollo de landings :', description:'Landings page o paginas de captura diseñadas y desarrolladas de una forma optima y responsiva para una correcta lectura, tratando de cumplir con los propositos del cliente.'},            



    ]
    return (
        <>
           <section data-scroll-data="1" id="services" className="section services-section bg-gray" style={{ "backgroundImage": "url(img/effect/bg-effect-1.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="grid section-heading">
                        <div className="lg:col-span-6 text-center mx-auto">
                            <h3><span>Skills</span></h3>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center">
                        {
                            service_list.map((val, i)=>{
                                return <Service key={i} id={val.id} title={val.title} description={val.description} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
