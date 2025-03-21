{/*Utilisation Props */}
const Titre = ({title, subtitle}) => {
    return(
<div class="pt-5 pb-5 d-flex justify-content-center text-center">   
    <div class="h3 pb-2 mb-4 border-bottom border-primary border-4 col-md-6"> {/*il faut que je centre avec les class bootstrap, essayer de mettre dans un container*/}
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
</div>
)
}
export default Titre