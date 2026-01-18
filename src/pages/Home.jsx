export default function Home() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <header className="fixed top-0 w-full px-[5%] py-5 flex justify-between items-center bg-[rgba(5,5,5,0.9)] border-b border-white/10 z-[100]">
        <div className="text-2xl font-extrabold tracking-[-1px] flex items-center gap-2">
          <i className="fa-solid fa-building-columns text-xl" />
          ALU
        </div>

        <nav className="flex items-center">
          <a className="ml-5 text-sm font-semibold uppercase text-[#888] hover:text-white cursor-pointer">
            Tutorial
          </a>
          <a className="ml-5 text-sm font-semibold uppercase text-[#888] hover:text-white cursor-pointer">
            Login
          </a>
          <a className="ml-5 border border-white/30 px-5 py-2 rounded text-white transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:rounded-2xl cursor-pointer">
            Regístrate
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center pt-[100px] pb-16 md:h-[55vh] max-w-[1200px] mx-auto">
        <h1 className="text-[42px] md:text-[80px] leading-tight md:leading-none font-extrabold mb-5 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
          COMPARTE Y BUSCA <br /> ALU
        </h1>

        <p className="text-[#d6d6d6] text-lg mb-10">
          Tu espacio digital para aprender, conectar y colaborar.
        </p>

        <button className="border border-white/30 px-[30px] py-[15px] text-lg font-bold tracking-[2px] rounded transition-all duration-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:rounded-2xl cursor-pointer">
          Comienza Ahora
        </button>
      </section>

      {/* TARJETAS */}
      <section className="mt-0 w-full flex flex-col items-center gap-6 px-[5%] py-10 md:flex-row md:justify-center md:gap-[30px]">
        <div className="w-[300px] p-10 rounded-[15px] bg-white/5 border border-white/10 transition duration-700 hover:-translate-y-1 hover:border-white/40">
          <div className="text-[30px] mb-5">
            <i className="fa-solid fa-book" />
          </div>
          <h3 className="mb-2">CONTENIDO</h3>
          <p className="text-[#888] text-sm">
            Recursos seleccionados por facultad.
          </p>
        </div>

        <div className="w-[300px] p-10 rounded-[15px] bg-white/5 border border-white/10 transition duration-700 hover:-translate-y-1 hover:border-white/40">
          <div className="text-[30px] mb-5">
            <i className="fa-solid fa-users" />
          </div>
          <h3 className="mb-2">COMUNIDAD</h3>
          <p className="text-[#888] text-sm">
            Conecta con estudiantes de todas las facultades.
          </p>
        </div>

        <div className="w-[300px] p-10 rounded-[15px] bg-white/5 border border-white/10 transition duration-700 hover:-translate-y-1 hover:border-white/40">
          <div className="text-[30px] mb-5">
            <i className="fa-solid fa-comments" />
          </div>
          <h3 className="mb-2">CHAT</h3>
          <p className="text-[#888] text-sm">
            Chatea con estudiantes que comparten tus intereses.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-0 w-full border-t border-white/10 px-[6%] py-2 flex flex-col gap-6 items-center md:flex-row md:justify-between">
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
