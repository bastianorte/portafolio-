import Header from "../Header/header"
import Banner from "../Banner/banner"
import ServiceList from "../Service/service"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"
import Intrested from "../Intrested/intrested"

/*--------------------
* Building Krinky
----------------------*/
export default function Krinky() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <Intrested />                    
                    <Work/>                                      
                    <ServiceList/>
                    <Contact/>
                </main>
            <Footer/>                              
        </>
    )
}
