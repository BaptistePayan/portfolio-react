import Footer from "../components/Footer";
import Form from "../components/Formulaire";




const Contact = () => {
    return(
        <div>
            <div class="container">
            <div class="h3 pb-2 mb-4 border-bottom border-primary border-3"> {/*il faut que je centre avec les class bootstrap, essayer de mettre dans un container*/}
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
            </div>
            <Form />
            <Footer />
            </div>
        </div>
    )
    }
    
    export default Contact;