import { useState } from 'react';
import administrativas from '../images/ADMINISTRATIVAS.webp';
import ciencias from '../images/CIENCIAS-02.webp';
import civil from '../images/CIVIL-10-10.webp';
import electrica from '../images/ELECTRICA.webp';
import esfot from '../images/ESFOT.webp';
import mecanica from '../images/MECANICA.webp';
import petroleo from '../images/PETROLEO.webp';
import quimica from '../images/QUIMICA.webp';
import sistemas from '../images/SISTEMAS.webp';

export default function Facultades() {
  const [busqueda, setBusqueda] = useState('');

  const facultades = [
    { nombre: 'ADMINISTRATIVAS', imagen: administrativas },
    { nombre: 'CIENCIAS', imagen: ciencias },
    { nombre: 'CIVIL', imagen: civil },
    { nombre: 'ELÉCTRICA', imagen: electrica },
    { nombre: 'ESFOT', imagen: esfot },
    { nombre: 'MECÁNICA', imagen: mecanica },
    { nombre: 'PETRÓLEO', imagen: petroleo },
    { nombre: 'QUÍMICA', imagen: quimica },
    { nombre: 'SISTEMAS', imagen: sistemas },
  ];

  const facultadesFiltradas = facultades.filter(facultad =>
    facultad.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* CABECERA */}
      <section className="text-center pt-8 pb-6 px-[5%]">
        <h2 className="text-[32px] md:text-[48px] leading-tight font-extrabold mb-4 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
          Bienvenidos a ALU
        </h2>
      </section>

      {/* TÍTULO Y BUSCADOR */}
      <section className="text-center pb-10 px-[5%]">
        <h1 className="text-[42px] md:text-[60px] leading-tight font-extrabold mb-8 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
          FACULTADES
        </h1>

        {/* SEARCH BAR */}
        <div className="max-w-[500px] mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar facultad..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-6 py-3 rounded-[15px] bg-white/5 border border-white/30 text-white placeholder-[#888] focus:outline-none focus:border-white/60 transition duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-5 top-1/2 transform -translate-y-1/2 text-[#888]" />
          </div>
        </div>
      </section>

      {/* GRID 3x3 DE FACULTADES */}
      <section className="w-full px-[5%] py-10 max-w-[1400px] mx-auto">
        {facultadesFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultadesFiltradas.map((facultad, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[15px] border border-white/10 transition duration-700 hover:-translate-y-1 hover:border-white/40 group cursor-pointer"
              >
                <img
                  src={facultad.imagen}
                  alt={facultad.nombre}
                  className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 flex items-end justify-center pb-6">
                  <h3 className="text-white text-xl font-bold text-center">{facultad.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <i className="fa-solid fa-search text-[60px] text-[#888] mb-5 block" />
            <p className="text-[#888] text-lg">No se encontraron facultades con "{busqueda}"</p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="mt-10 w-full border-t border-white/10 px-[6%] py-6 flex flex-col gap-6 items-center md:flex-row md:justify-between">
        <div className="text-sm text-[#888]">
          © Todos los derechos reservados por ALU
        </div>

        <div className="flex gap-10 text-[35px]">
          <i className="fa-brands fa-instagram text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[15px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />

          <i className="fa-brands fa-facebook-f text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[18px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />

          <i className="fa-brands fa-x-twitter text-[35px] transition duration-700 hover:bg-[#ffffffc2] py-[10px] px-[13px] rounded-[50%] hover:text-black hover:shadow-[0_0_20px_rgb(255,255,255,0.3)] cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
