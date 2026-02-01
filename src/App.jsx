import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Esfot from "./pages/Esfot";
import Perfil from "./pages/Perfil";
import Facultades from "./pages/Facultades";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login initialView="login" />} />
        <Route path="/registro" element={<Login initialView="signup" />} />
        <Route path="/facultades" element={<Facultades />} />
        <Route path="/esfot" element={<Esfot />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
