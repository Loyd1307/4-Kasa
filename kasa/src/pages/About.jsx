import Header from "../pages/Header"
import Footer from "./Footer"
import Logo2 from "../assets/IMG-ABOUT.png"
import "./About.css"
import Collapse from "./Collapse.jsx"

function About() {
  return (
    <>
    
      <Header />

      <main>
        <img className="about-logo" src={Logo2} alt="Bannière" />
        <Collapse />
      </main>
      <Footer />

    </>
  )
}

export default About