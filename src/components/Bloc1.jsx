


const Bloc1 = () => {
   return(
    //<!-- <div class="d-flex justify-content-center"> -->
    <section class="container">
<div class="row justify-content-center border-light shadow p-3 mb-5 bg-body-tertiary rounded">     {/*<!--on declare row pour la responsive et justify pour centrer puis on ajoute un bord avec des ombres-->*/}
        <div class="c1 card border border-0 col-md-6 col-lg-6 col-sm-12">. {/*<!--responsive 2 : tablette et ordi 1 = portable-->*/}
            <div class="h3 pb-2 mb-4 border-bottom border-primary border-3">                            {/*<!--titre H3-->*/}
                À propos
              </div>
            <img src="img/john-doe-about.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quisquam voluptas quod dolor, saepe aut ipsum repellat. Harum sequi dicta possimus repudiandae? Illum totam reiciendis unde ipsam consequuntur tempora maxime?</p>
            </div>
        </div>

            <div class="c1 card border border-0 col-md-6 col-lg-6 col-sm-12 mt-4">  
                <div class="h3 pb-2 mb-4 border-bottom border-primary border-3">
                    Mes compétences
                  </div> 
                  <p>HTML5 90%</p> 
                  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">   {/*<!--les progressions-->*/}
                    <div class="progress-bar5 bg-danger" ></div>
                  </div> 
                  <p>CSS3 80%</p>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar4 bg-info" ></div>
                  </div>
                  <p>JavaScript 70%</p>
                  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar3 bg-warning" ></div>
                  </div>
                  <p>PHP 60%</p>
                  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar2 bg-success"> </div>
                  </div>
                  <p>REACT 50%</p>
                  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar1 bg-primary" ></div>
                  </div>
            </div>
        </div>
        </section>
  
   ) 
}

export default Bloc1