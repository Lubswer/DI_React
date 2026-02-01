// src/components/CardFacultad.jsx
import React from 'react';

const CardFacultad = ({ imagen, alt, shadowColor, onClick }) => {
  return (
    <li className="fac-card">
      <a
        onClick={onClick}
        href="#" // Mantenemos el href para el cursor pointer, pero onClick maneja la navegación
        className={`
          block rounded-2xl overflow-hidden
          bg-gray-200
          border border-[rgba(255,255,255,0.1)]
          shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          transition
          hover:-translate-y-0.5
          ${shadowColor} 
        `}
      >
        <img
          src={imagen}
          alt={alt}
          className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
        />
      </a>
    </li>
  );
};

export default CardFacultad;