const Accordeon = () => {
    return(
<div class="accordion pb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Editeur du site
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="c1 card border border-0 col-md-6 col-lg-6 col-sm-12 ">   
           <h3>John DOE</h3>
            <i class="bi bi-map">40 rue Laure Diebold</i>
            <i class="bi bi-geo-alt">69009 Lyon, France</i>
            <i class="bi bi-phone">10 20 30 40 50</i>
            <i class="bi bi-envelope-at">john.doe@gmail.com</i>
        </div>
      </div>
    </div>
  </div>
  
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hébergeur
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h3>Alwaysdata</h3>
        <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <i class="bi bi-globe"></i>< a href="https://www.alwaysdata.com/fr/" > www.alwaysdata.com</a>
      </div>
    </div>
  </div>
  
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Crédits
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>ce site a été réalisé par John Doe, étudiant au< a href="https://www.centre-europeen-formation.fr/" > Centre Européen de formation</a></p>
        <p>Les images utilisées sur ce sitesont libres de droits et ont été obtenues sur le site< a href="https://pixabay.com/fr/" > Pixabay</a></p>
        <p>La favicon de ce site a été fournie par< a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" > John doe Icons erstellt von Freepik - Flaticon</a></p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Accordeon