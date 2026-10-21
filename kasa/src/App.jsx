import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Header from "./pages/Header.jsx";

function Kaza () {
  return <><Header /></>
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