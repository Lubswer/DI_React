import perfilDefault from "../assets/perfil.png"; 

export default function PublicationCard({ user, descripcion }) {
  return (
    <article className="bg-white/5 border border-white/10 rounded-[25px] overflow-hidden transition-all duration-500 hover:border-white/30">
      <div className="p-4 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <img
            src={perfilDefault}
            alt="Miniatura"
            className="w-10 h-10 rounded-full border border-white/20 object-cover perfil-foto-mini"
          />
          <div>
            <p className="text-sm font-bold text-white">{user.usuario || user.nombres}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Publicado recientemente</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-white p-2">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <div className="p-6 md:p-10 flex flex-col items-center">
        <p className="mb-8 text-gray-300 text-center">{descripcion}</p>
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur group-hover:opacity-100 transition"></div>
          <i className="fa-regular fa-folder text-[120px] md:text-[150px] text-white/10 relative"></i>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center border-t border-white/5 bg-white/[0.02]">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <i className="fa-regular fa-bookmark text-xl"></i>
            <span className="text-xs font-bold uppercase">Guardar</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
            <i className="fa-regular fa-circle-down text-xl"></i>
            <span className="text-xs font-bold uppercase">Descargar</span>
          </button>
        </div>
        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Documento</span>
      </div>
    </article>
  );
}