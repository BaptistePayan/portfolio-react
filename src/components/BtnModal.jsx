

const Modal = () => {
    return (
        <div className="container">
<div className="card text-bg-dark">
    <img src="img/hero-bg.jpg" id="img1" class="col-12 img-fluid " alt="men with computer"></img>   {/*<!--image responsive qui prend les 12 colonnes-->*/}
    <div className="card-img-overlay position-absolute top-50 start-50 translate-middle">
      
      <h1 className="card-title d-flex justify-content-center">Bonjour, je suis John Doe</h1>
      <h2 className="card-text d-flex justify-content-center">Dévellopeur web full stack</h2>
      
{/*<!-- Button trigger modal -->*/}
<div class="d-flex justify-content-center">
<button type="button" className="btn btn-danger col-md-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
En savoir plus
</button>
</div>
</div>

{/*<!-- Modal -->*/}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="staticBackdropLabel">Mon profil GitHub</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body container">
        <div className="row">
          <div className="col">
              <img src="img/ppgithub.png" className="w-25" alt="profil picture of GitHub"></img>    
          </div>
              <div className="col">
           <ul className="nav flex-column">
              <li className="nav-item border-bottom">John Doe</li>
              <li className="nav-item border-bottom">As we all know, John Doe's identify is unknow. i just wanted to contribute without being known.<i class="bi bi-geo-alt"></i>John doe</li>
              <li className="nav-item border-bottom">repositories : 1</li>
              <li className="nav-item border-bottom">Followers : 16</li>
              <li className="nav-item border-bottom"> Following : 0</li>
              <li className="nav-item"></li>
           </ul>
               </div> 
        </div> 
        </div>
    </div>
    <div className="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
    </div>
  </div>
</div>
</div>
</div>
    )
}
export default Modal