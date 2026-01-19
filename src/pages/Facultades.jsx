import { useNavigate } from "react-router-dom";
export default function Facultades() {
  const navigate = useNavigate();
  return (
    <main className="px-4 pb-10 bg-[#101214] text-[#f9f9f9] font-mono">
      <header className="facultades-header pt-2">
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-3
            bg-[#21252ac2]
            px-4 py-3
            rounded-b-2xl md:rounded-b-[40px]
            shadow-[0_2px_8px_rgba(0,0,0,0.5)]
            border border-[rgba(255,255,255,0.1)]
          "
        >
          {/* Perfil */}
          <a onClick={() => navigate("/Perfil")}
            href="#"
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-[#21252ac2]
              border border-[rgba(255,255,255,0.1)]
              shadow-[0_2px_8px_rgba(0,0,0,0.5)]
              text-sm
              transition
              hover:bg-white/15
            "
          >
            <img
              src="/imagenes/perfil.webp"
              alt="perfil"
              className="w-5 h-5 rounded-full"
            />
            <span className="hidden md:inline font-bold">Perfil</span>
          </a>

          <h1 className="text-2xl md:text-[32px] font-semibold tracking-wider my-1">
            Bienvenido a ALU
          </h1>

          <a
            href="#"
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-[#21252ac2]
              border border-[rgba(255,255,255,0.1)]
              shadow-[0_2px_8px_rgba(0,0,0,0.5)]
              text-sm
              transition
              hover:bg-white/15
            "
          >
            <span className="font-bold">Ajustes</span>
            <span>⚙️</span>
          </a>
        </div>

        <h2
          className="
            mx-auto my-5
            w-full md:w-[88%] max-w-xl
            text-center
            bg-[#21252ac2]
            px-5 py-3
            rounded-full
            text-2xl
            tracking-wide
            border border-[rgba(255,255,255,0.1)]
            shadow-[0_2px_8px_rgba(0,0,0,0.5)]
          "
        >
          <b>Facultades</b>
        </h2>
      </header>

      <ul
        className="
          grid
          grid-cols-1 md:grid-cols-3
          gap-x-10 gap-y-9
          max-w-6xl
          mx-auto
          mt-6
        "
      >
        {/* ESFOT */}
        <li className="fac-card">
          <a onClick={() => navigate("/Esfot")}
            href="#"
            className="
              block rounded-2xl overflow-hidden
              bg-gray-200
              border border-[rgba(255,255,255,0.1)]
              shadow-[0_2px_8px_rgba(0,0,0,0.5)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_10px_24px_rgba(239,68,68,0.55)]
            "
          >
            <img
              src="/imagenes/ESFOT.webp"
              alt="Escuela de Formación de Tecnólogos"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* CIENCIAS */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(171,171,171,0.6)]">
            <img
              src="/imagenes/CIENCIAS-02.webp"
              alt="Facultad de Ciencias"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* ADMINISTRATIVAS */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(250,204,21,0.55)]">
            <img
              src="/imagenes/ADMINISTRATIVAS.webp"
              alt="Facultad de Ciencias Administrativas"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* PETRÓLEOS */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(168,85,247,0.55)]">
            <img
              src="/imagenes/PETROLEO.webp"
              alt="Facultad de Geología y Petróleos"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* CIVIL */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(132,204,22,0.55)]">
            <img
              src="/imagenes/CIVIL-10-10.webp"
              alt="Facultad de Ingeniería Civil"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* SISTEMAS */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(6,182,212,0.55)]">
            <img
              src="/imagenes/SISTEMAS.webp"
              alt="Facultad de Ingeniería de Sistemas"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* ELÉCTRICA */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(59,130,246,0.55)]">
            <img
              src="/imagenes/ELECTRICA.webp"
              alt="Facultad de Ingeniería Eléctrica"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* MECÁNICA */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(249,115,22,0.55)]">
            <img
              src="/imagenes/MECANICA.webp"
              alt="Facultad de Ingeniería Mecánica"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>

        {/* QUÍMICA */}
        <li className="fac-card">
          <a className="block rounded-2xl overflow-hidden bg-gray-200 border border-[rgba(255,255,255,0.1)] shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(34,197,94,0.55)]">
            <img
              src="/imagenes/QUIMICA.webp"
              alt="Facultad de Ingeniería Química"
              className="w-full object-cover border-b border-[rgba(255,255,255,0.1)]"
            />
          </a>
        </li>
      </ul>
    </main>
  );
}
