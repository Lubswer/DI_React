// src/pages/Facultades.jsx
import { useNavigate } from "react-router-dom";
import CardFacultad from "../components/CardFacultad"; // <--- Importamos tu nuevo componente

export default function Facultades() {
  const navigate = useNavigate();

  // Aquí están los datos de todas tus facultades. ¡Es mucho más fácil editar esto!
  const listaFacultades = [
    {
      id: 1,
      nombre: "Escuela de Formación de Tecnólogos",
      imagen: "/imagenes/ESFOT.webp",
      ruta: "/Esfot", // Esta es la única que tiene ruta real por ahora
      shadow: "hover:shadow-[0_10px_24px_rgba(239,68,68,0.55)]" // Rojo
    },
    {
      id: 2,
      nombre: "Facultad de Ciencias",
      imagen: "/imagenes/CIENCIAS-02.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(171,171,171,0.6)]" // Gris
    },
    {
      id: 3,
      nombre: "Facultad de Ciencias Administrativas",
      imagen: "/imagenes/ADMINISTRATIVAS.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(250,204,21,0.55)]" // Amarillo
    },
    {
      id: 4,
      nombre: "Facultad de Geología y Petróleos",
      imagen: "/imagenes/PETROLEO.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(168,85,247,0.55)]" // Morado
    },
    {
      id: 5,
      nombre: "Facultad de Ingeniería Civil",
      imagen: "/imagenes/CIVIL-10-10.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(132,204,22,0.55)]" // Verde lima
    },
    {
      id: 6,
      nombre: "Facultad de Ingeniería de Sistemas",
      imagen: "/imagenes/SISTEMAS.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(6,182,212,0.55)]" // Cyan
    },
    {
      id: 7,
      nombre: "Facultad de Ingeniería Eléctrica",
      imagen: "/imagenes/ELECTRICA.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(59,130,246,0.55)]" // Azul
    },
    {
      id: 8,
      nombre: "Facultad de Ingeniería Mecánica",
      imagen: "/imagenes/MECANICA.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(249,115,22,0.55)]" // Naranja
    },
    {
      id: 9,
      nombre: "Facultad de Ingeniería Química",
      imagen: "/imagenes/QUIMICA.webp",
      ruta: "#",
      shadow: "hover:shadow-[0_10px_24px_rgba(34,197,94,0.55)]" // Verde
    }
  ];

  return (
    <main className="px-4 pb-10 bg-[#101214] text-[#f9f9f9] font-mono min-h-screen">
      
      {/* HEADER (Lo dejamos igual porque no era parte de la tarea separar esto) */}
      <header className="facultades-header pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#21252ac2] px-4 py-3 rounded-b-2xl md:rounded-b-[40px] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)]">
          
          {/* Botón Perfil */}
          <a onClick={() => navigate("/Perfil")} href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#21252ac2] border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] text-sm transition hover:bg-white/15">
            <img src="/imagenes/perfil.png" alt="perfil" className="w-5 h-5 rounded-full" />
            <span className="hidden md:inline font-bold">Perfil</span>
          </a>

          <h1 className="text-2xl md:text-[32px] font-semibold tracking-wider my-1">
            Bienvenido a ALU
          </h1>

          {/* Botón Ajustes */}
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#21252ac2] border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] text-sm transition hover:bg-white/15">
            <span className="font-bold">Ajustes</span>
            <span>⚙️</span>
          </a>
        </div>

        <h2 className="mx-auto my-5 w-full md:w-[88%] max-w-xl text-center bg-[#21252ac2] px-5 py-3 rounded-full text-2xl tracking-wide border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <b>Facultades</b>
        </h2>
      </header>

      {/* AQUÍ ESTÁ LA MAGIA: Renderizamos las cards usando .map() */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-9 max-w-6xl mx-auto mt-6">
        {listaFacultades.map((facultad) => (
          <CardFacultad 
            key={facultad.id}
            nombre={facultad.nombre}
            imagen={facultad.imagen}
            shadowColor={facultad.shadow}
            onClick={() => {
               if(facultad.ruta !== "#") navigate(facultad.ruta);
            }}
          />
        ))}
      </ul>

    </main>
  );
}