import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Esfot from "./pages/Esfot";
import Perfil from "./pages/Perfil";
import Facultades from "./pages/Facultades";
export default function App() {
  //return <Home />;
  //return <Esfot/>;
  //return <Facultades/>;
  //return<Perfil/>;
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facultades" element={<Facultades />} />
        <Route path="/esfot" element={<Esfot />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );

}
