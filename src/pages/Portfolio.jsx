import Footer from "../components/Footer";
import Card from "../components/Card"
import react from "react";



const Portfolio = () => {
    return(
       <div>
         <div class="h3 pb-2 mb-4 border-bottom border-primary border-3"> {/*il faut que je centre avec les class bootstrap, essayer de mettre dans un container*/}
                <h1>Mon offre de service</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </div>
            <Card img="img/portfolio/fresh-food.jpg" title="Fresh Food" alt="panier de légumes" subtitle="Site de vente de produit frais en ligne" bouton="Voir le site" pied="Site réalisé avec PHP et MySQL"/>
            <Card img="img/portfolio/restaurant-japonais.jpg" title="Restaurant Akira" alt="nouritture asiatique" subtitle="Site de vente de produits frais en ligne" bouton="Voir le site" pied="Site réalisé avec WordPress"/>
            <Card img="img/portfolio/espace-bien-etre.jpg" title="Espace bien-être" alt="photo de zenitude" subtitle="Site de vente de produit frais en ligne" bouton="Voir le site" pied="Site réalisé avec LARAVEL"/> 
            <Card img="img/portfolio/seo.jpg" title="SEO" alt="tout les mots concernant le référencement" subtitle="Amélioration du référencement d'un site e-commerce" bouton="Voir le site" pied="Utilisation des outils SEO"/>
            <Card img="img/portfolio/coder.jpg" title="Création d'une API" alt="éditeur de code  avec du HTML" subtitle="Creéation d'une API RESTFULL publique" bouton="Voir le site" pied="Création d'une API RESTFULL publique"/>
            <Card img="img/portfolio/screens.jpg" title="Maquette d'un site web" alt="ordinateur portable, pc, tablette" subtitle="Création du prototype d'un site" bouton="Voir le site" pied="Site réalisé avec FIGMA"/>
         <Footer />
         
         </div>
    )
    }
    
    export default Portfolio;