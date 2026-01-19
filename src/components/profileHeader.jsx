export default function ProfileHeader({ nombres, email, frase, edad, semestre, carrera, foto }) {
  return (
    <header className="pt-10 pb-6 px-[5%] flex flex-col items-center border-b border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="relative group">
        <img
          src={foto}
          alt="Perfil"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 object-cover shadow-2xl transition duration-500 group-hover:border-white/30"
        />
      </div>
      <div className="text-center mt-5">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
          {nombres}
        </h1>
        <p className="text-gray-400 font-medium">{email}</p>
        <p className="mt-3 italic text-gray-300 max-w-lg mx-auto">"{frase}"</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
          <span className="block text-xs uppercase text-gray-500 font-bold">Edad</span>
          <span className="text-lg font-semibold">{edad}</span>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
          <span className="block text-xs uppercase text-gray-500 font-bold">Semestre</span>
          <span className="text-lg font-semibold">{semestre}</span>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
          <span className="block text-xs uppercase text-gray-500 font-bold">Carrera</span>
          <span className="text-sm font-semibold truncate block">{carrera}</span>
        </div>
      </div>
    </header>
  );
}