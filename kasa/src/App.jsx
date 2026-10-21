import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function Kaza () {
  return <><ul>
    <li><a href="./home">Accueil</a></li>
    <li><a href="./a-propos">A Propos</a></li>
  </ul><h1>React fonctionne !</h1></>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Kaza />} />
      <Route path="/home" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
    </Routes>
  );
}