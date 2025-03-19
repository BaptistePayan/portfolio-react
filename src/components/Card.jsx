import react from "react";

const Card = ({img, alt, title, subtitle, bouton, pied}) => {
    return(
      
        <div className="card mb-5 ">
        <img className="card-img-top" src={img} alt={alt}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <a href={bouton} className="btn btn-primary">Voir le site</a>
        </div>
        <div className="card-footer bg-light text-muted">{pied}
    
  </div>
      </div>
      

    
    )
    }
    
    export default Card;