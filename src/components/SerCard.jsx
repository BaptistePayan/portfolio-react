const SerCard = () => {
    return(
<section class="row pb-5">
    <div class="col col-sm-12 col-lg-4 col-md-4">
        <div class="card text-center h-100" >
          <i class="bi bi-brush text-primary h3 pt-4"></i>
           <div class="card-body">
             <h4 class="card-title">UX Design</h4>
             <p class="card-text">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets, connectés, ect) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la fluide et agréable possible.</p>
           </div>
        </div>
    </div>
    <div class="col col-sm-12 col-lg-4 col-md-4">
        <div class="card text-center h-100" >                      {/*je met h-100 pour préciser la haiteur du block*/}
           <i class="bi bi-code-slash text-primary h3 pt-4"></i>
           <div class="card-body">
              <h4 class="card-title">Développement Web</h4>
              <p class="card-text">Le développement de sites web consiste à creer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, ect) et des frameworks (Bootstrap, React, Angular, ect).</p>
           </div>
        </div>
    </div>
    <div class="col col-sm-12 col-lg-4 col-md-4">
        <div class="card text-center h-100" >
           <i class="bi bi-search text-primary h3 pt-4"></i>
           <div class="card-body">
              <h4 class="card-title">Référencement</h4>
              <p class="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, ect). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
           </div>
       </div>
    </div>
</section>
)
}

export default SerCard