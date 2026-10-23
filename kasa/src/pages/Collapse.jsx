import { useState } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown , faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
    const [collapseOpen, setCollapseOpen] = useState(null);
 
    const collapse = [
    {
      titre: "Fiabilité",
      texte: "Toutes les informations des logements sont vérifiées."
    },
    {
      titre: "Respect",
      texte: "Nous plaçons le respect des voyageurs au centre de nos priorités."
    },
    {
      titre: "Service",
      texte: "Notre équipe vous accompagne tout au long de votre séjour."
    },
    {
      titre: "Sécurité",
      texte: "Nous veillons à proposer une expérience de location sécurisée."
    }
  ];

  return (
    <div className="collapse">
      {collapse.map((item, index) => (
        <div className="collapse-title" key={item.titre}>
          <p
            onClick={() =>
              setCollapseOpen(
                collapseOpen === index ? null : index
              )
            }
          >
            {item.titre}
            <span>
              <FontAwesomeIcon
                icon={
                  collapseOpen === index
                    ? faChevronDown
                    : faChevronUp
                }
              />
            </span>
          </p>

          {collapseOpen === index && (
            <p>{item.texte}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;