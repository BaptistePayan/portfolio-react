import react from "react";

const Card = ({img, alt, title, subtitle, bouton, pied}) => {
    return(
      <div class="row">
        <div className="col col-sm-12 col-lg-4 col-md-4">
        <div className="cardPortfolio">
        <img className="card-img-top" src={img} alt={alt}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <a href={bouton} className="btn btn-primary"></a>
        </div>
        <div className="card-footer text-muted">{pied}
    
  </div>
      </div>
      </div>
      </div>

    
    )
    }
    
    export default Card;