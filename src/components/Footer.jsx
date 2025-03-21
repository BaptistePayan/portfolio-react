import {Link } from "react-router-dom";


const Footer = () => {
    return(
<div class="container bg-dark text-white">
            <footer className="row">
                <div className="col col-sm-12 col-lg-4 col-md-4">
                   <h4>John Doe</h4>
                   <ul className="nav flex-column">
                       <li className="nav-item">40 rue Laure Debiold</li>
                       <li className="nav-item">69009 Lyon, France</li>
                       <li className="nav-item">10 20 30 40 50</li>
                       <li className="nav-item">john.doe@gmail.com</li>
                       <li className="nav-item"><i class="bi bi-github"></i><i class="bi bi-twitter ps-2"></i><i class="bi bi-linkedin ps-2"></i></li>
                       </ul>
                </div>
                <div className="col col-sm-12 col-lg-4 col-md-4">
                    <h4>Liens Utiles</h4>
                    <ul className="nav flex-column">
                       <li className="nav-item"><Link to="Home" className="none">Acceuil</Link> </li>
                       <li className="nav-item"><Link to="Services" className="none">Services</Link></li>
                       <li className="nav-item"><Link to="Portfolio" className="none">Portfolio</Link></li>
                       <li className="nav-item"><Link to="Contact" className="none">Me contacter</Link></li>
                       <li className="nav-item"><Link to="MentionsLegales" className="none">Mentions légales</Link></li>
                    </ul>
                </div>
                <div className="col col-sm-12 col-lg-4 col-md-4">
                    <h4>Mes dernières réalisation</h4>
                    <ul class="nav flex-column">
                       <li className="nav-item">Fresh Food</li>
                       <li className="nav-item">Restaurant Akira</li>
                       <li className="nav-item">Espace bien être</li>
                       <li className="nav-item">SEO</li>
                       <li className="nav-item">Création d'une API</li>
                       <li className="nav-item">Maquette d'un site</li>
                    </ul>
                </div>
            </footer>
</div>
 )
}
export default Footer
