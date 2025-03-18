import Footer from "../components/Footer";
import SerCard from "../components/SerCard";



const Services = () => {
    return(
        <div>
            <div class="banner">
            <img src="img/banner.jpg"></img>
            </div>
            <div class="h3 pb-2 mb-4 border-bottom border-primary border-3"> {/*il faut que je centre avec les class bootstrap, essayer de mettre dans un container*/}
                <h1>Mon offre de service</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </div>
            <SerCard />
            <Footer />
            <h1>ENFIN</h1>
        </div>
    )
    }
    
    export default Services;