
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
