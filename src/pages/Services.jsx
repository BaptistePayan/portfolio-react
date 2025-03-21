import SerCard from "../components/SerCard";
import Titre from "../components/Titre";



const Services = () => {
    return(
<div>
    <div class="container">
        <img src="img/banner.jpg" alt="bannière" class="col-sm-12 img-fluid"></img>
        <Titre title="Mon offre de service" subtitle="Voici les prestations sur lesquelles je peux intervenir"/>
        <SerCard />
    </div>
</div>
)
}
export default Services;