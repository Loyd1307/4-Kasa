import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";

function Kaza () {
  return <><ul>
    <li><a href="./home">Home</a></li>
  </ul><h1>React fonctionne !</h1></>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Kaza />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}