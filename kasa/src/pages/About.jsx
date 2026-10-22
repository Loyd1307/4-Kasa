import Header from "../pages/Header"
import Footer from "./Footer"
import Logo2 from "../assets/IMG-ABOUT.png"
import "./About.css"

function About() {
  return (
    <>
    
      <Header />

      <main>
        <img className="about-logo" src={Logo2} alt="Bannière" />
        <div className="about-container">
          <h2 className="about-title">Fiabilité</h2>
          <p className="about-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
        <div className="about-container">
          <h2 className="about-title">Respect</h2>
          <p className="about-text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div className="about-container">
          <h2 className="about-title">Service</h2>
          <p className="about-text">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </div>
        <div className="about-container">
          <h2 className="about-title">Sécurité</h2>
          <p className="about-text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </main>
      <Footer />

    </>
  )
}

export default About