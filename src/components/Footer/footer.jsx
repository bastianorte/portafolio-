
import { Link } from "react-scroll";



/*--------------------
* Footer Section
----------------------*/
function Footer() {
    const lkdn = 'https://www.linkedin.com/in/bastianortega/';

    return (
        <footer className="footer bg-slate-900 border-t border-white border-opacity-10 py-4">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
                        <div className="flex justify-center md:justify-start w-full">
                            <a className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]" href="https://www.linkedin.com/in/bastianortega/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 text-center md:text-right">
                        <p className="m-0 text-white text-opacity-75">©2024 Copyright Bastian Ortega/ Pagina desarrollada en React</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;