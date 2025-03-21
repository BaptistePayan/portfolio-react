import Card from "../components/Card"
import Titre from "../components/Titre";



const Portfolio = () => {
    return(
<div>
   <div class="container">
         <Titre title="Portfolio" subtitle="Voici quelques-unes de mes réalisations"/>
            
         <div class="row">
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/fresh-food.jpg" title="Fresh Food" alt="panier de légumes" subtitle="Site de vente de produit frais en ligne" bouton="Voir le site" pied="Site réalisé avec PHP et MySQL"/>
            </div>
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/restaurant-japonais.jpg" title="Restaurant Akira" alt="nouritture asiatique" subtitle="Site de vente de produits frais en ligne" bouton="Voir le site" pied="Site réalisé avec WordPress"/>
            </div>
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/espace-bien-etre.jpg" title="Espace bien-être" alt="photo de zenitude" subtitle="Site de vente de produit frais en ligne" bouton="Voir le site" pied="Site réalisé avec LARAVEL"/> 
            </div>
         </div>
            
         <div class="row">
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/seo.jpg" title="SEO" alt="tout les mots concernant le référencement" subtitle="Amélioration du référencement d'un site e-commerce" bouton="Voir le site" pied="Utilisation des outils SEO"/>
            </div>
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/coder.jpg" title="Création d'une API" alt="éditeur de code  avec du HTML" subtitle="Creéation d'une API RESTFULL publique" bouton="Voir le site" pied="Création d'une API RESTFULL publique"/>
            </div>
            <div className="col col-sm-12 col-lg-4 col-md-4">
                <Card img="img/portfolio/screens.jpg" title="Maquette d'un site web" alt="ordinateur portable, pc, tablette" subtitle="Création du prototype d'un site" bouton="Voir le site" pied="Site réalisé avec FIGMA"/>
            </div>
         </div>
   </div>
</div>
)
}
export default Portfolio;