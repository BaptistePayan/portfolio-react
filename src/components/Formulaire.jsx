const Form = () => {
    return(
     //<!-- <div class="d-flex justify-content-center"> -->
<section class="container">
  <div class="row justify-content-center border-light shadow p-3 mb-5 bg-body-tertiary rounded">     {/*<!--on declare row pour la responsive et justify pour centrer puis on ajoute un bord avec des ombres-->*/}
    <div class="c1 card border border-0 col-md-6 col-lg-6 col-sm-12 pt-4"> {/*<!--responsive 2 : tablette et ordi 1 = portable-->*/}
       <div class="h3 pb-2 mb-4 border-bottom border-primary border-3">                            {/*<!--titre H3-->*/}
                 Formulaire de contact
        </div>
        <form>
            <div class="form-group">
              <label for="inputName"></label>
              <input type="text" class="form-control" id="inputName" placeholder="Votre nom"></input>
            </div>
            <div class="form-group">
              <label for="inpulMail"></label>
              <input type="email" class="form-control" id="inputMail" aria-describedby="emailHelp" placeholder="Votre adresse mail"></input>
            </div>
            <div class="form-group">
              <label for="inputNumber"></label>
              <input type="tel" class="form-control" id="inputNumber" placeholder="Votre numéro de téléphone"></input>
            </div>
            <div class="form-group">
             <label for="inputSujet"></label>
             <input type="text" class="form-control" id="inputSujet" placeholder="Password"></input>
            </div>
            <div class="form-group">
             <label for="inputTextarea"></label>
             <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre message" rows="10"></textarea>
            </div>
            <div class="d-flex justify-content-center pt-3">                        {/*pour centrer ne pas oublier de mettre dans une div et activer d-flex*/}
             <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
        </form>
    </div>
 
    <div class="c1 card border border-0 col-md-6 col-lg-6 col-sm-12 pt-4">  
        <div class="h3 pb-2 mb-4 border-bottom border-primary border-3">
        Mes coordonnées
        </div> 
            <h4>John DOE</h4>
            <i class="bi bi-map">40 rue Laure Diebold</i>
            <i class="bi bi-geo-alt">69009 Lyon, France</i>
            <i class="bi bi-phone">10 20 30 40 50</i>
            <i class="bi bi-envelope-at">john.doe@gmail.com</i>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621716!2d4.796403977104257!3d45.778661971080965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1742408484451!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map img-fluid h-100"></iframe>   {/*img fluid pour etre responsive et h-100 pour qu'il occupe tout le container de son parent*/}    
    </div>
  </div>
</section>
   
    ) 
 }
 
 export default Form