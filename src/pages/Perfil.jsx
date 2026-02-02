import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Perfil() {
  const navigate = useNavigate();

  // --- 1. ESTADOS ---
  const [mostrarModal, setMostrarModal] = useState(false);
  
  const [usuario, setUsuario] = useState({
    nombres: "Usuario Nuevo",
    usuario: "usuario_ejemplo",
    email: "correo@ejemplo.com",
    frase: "Sin Descripción",
    edad: "--",
    semestre: "--",
    carrera: "--",
    enseñar1: "---",
    aprender1: "---",
    proyecto1: "---",
    foto: "/imagenes/logoEsfot.png"
  });

  // --- 2. EFECTO ---
  useEffect(() => {
    const datosGuardados = localStorage.getItem("datosUsuario");
    if (datosGuardados) {
      setUsuario(JSON.parse(datosGuardados));
    }
  }, []);

  // --- 3. FUNCIONES ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prev => ({ ...prev, [name]: value }));
  };

  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUsuario(prev => ({ ...prev, foto: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleGuardar = () => {
    localStorage.setItem("datosUsuario", JSON.stringify(usuario));
    setMostrarModal(false);
    Swal.fire({
      icon: 'success', title: 'Perfil Actualizado', background: '#0a0a0a', color: '#fff', timer: 1500, showConfirmButton: false
    });
  };

  // Estilo común para las etiquetas
  const labelStyle = "text-xs font-bold text-gray-500 uppercase";
  // Estilo común para los inputs
  const inputStyle = "w-full bg-white/5 border-b border-white/20 p-2 outline-none focus:border-white transition-colors text-white font-medium";

  return (
    <div className="min-h-screen font-['Outfit'] text-white bg-[#050505] bg-[radial-gradient(circle_at_top_center,_#1a1a1a,_#050505)] bg-fixed font-sans">
      
      {/* HEADER */}
      <header className="pt-10 pb-6 px-[5%] flex flex-col items-center border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="relative group">
          <img src={usuario.foto} alt="perfil" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 object-cover shadow-2xl transition duration-500 group-hover:border-white/30" />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">{usuario.nombres}</h1>
          <p className="text-gray-400 font-medium">{usuario.email}</p>
          <p className="mt-3 italic text-gray-300 max-w-lg mx-auto">"{usuario.frase}"</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
          {[{ label: "Edad", value: usuario.edad }, { label: "Semestre", value: usuario.semestre }, { label: "Carrera", value: usuario.carrera }].map((item, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
              <span className="block text-xs uppercase text-gray-500 font-bold">{item.label}</span>
              <span className="text-lg font-semibold truncate block">{item.value}</span>
            </div>
          ))}
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-[5%] py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ... (Esta parte del main sigue igual, la omito para ahorrar espacio, pero no la borres) ... */}
        {/* PUBLICACIONES (Izquierda) */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <i className="fa-solid fa-layer-group text-blue-500" />
            Publicaciones Subidas
          </h3>

          <article className="bg-white/5 border border-white/10 rounded-[25px] overflow-hidden transition-all duration-500 hover:border-white/30">
            <div className="p-4 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <img
                  src={usuario.foto}
                  alt="user"
                  className="w-10 h-10 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    {usuario.nombres}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    Publicado recientemente
                  </p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-white p-2">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>

            <div className="p-6 md:p-10 flex flex-col items-center">
              <p className="mb-8 text-gray-300 text-center">
                Descripción del contenido cargado por el estudiante.
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur group-hover:opacity-100 transition" />
                <i className="fa-regular fa-folder text-[120px] md:text-[150px] text-white/10 relative" />
              </div>
            </div>

            <div className="px-6 py-4 flex justify-between items-center border-t border-white/5 bg-white/[0.02]">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fa-regular fa-bookmark text-xl" />
                  <span className="text-xs font-bold uppercase">Guardar</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <i className="fa-regular fa-circle-down text-xl" />
                  <span className="text-xs font-bold uppercase">Descargar</span>
                </button>
              </div>
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                Documento
              </span>
            </div>
          </article>
        </div>

        {/* SIDEBAR (Derecha) */}
        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 p-6 rounded-[25px]">
            <h3 className="text-xl font-bold mb-4">Conocimiento</h3>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-green-400 uppercase mb-2">
                Puedo enseñar
              </h4>
              <p className="text-sm italic text-gray-400">{usuario.enseñar1}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-purple-400 uppercase mb-2">
                Quiero aprender
              </h4>
              <p className="text-sm italic text-gray-400">{usuario.aprender1}</p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 p-6 rounded-[25px]">
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Proyectos
            </h3>
            <p className="text-sm bg-blue-500/10 text-blue-300 p-3 rounded-xl border border-blue-500/20">
              {usuario.proyecto1}
            </p>
          </section>

          <div className="flex flex-col gap-3 pt-4">
            {/* AQUÍ ESTÁ EL BOTÓN QUE ACTIVA EL MODAL */}
            <button 
              onClick={() => setMostrarModal(true)}
              className="w-full py-4 rounded-2xl bg-white text-black font-extrabold hover:bg-gray-200 transition-all uppercase tracking-widest shadow-lg"
            >
              Editar Perfil
            </button>
            
            <button onClick={() => navigate("/Facultades")} className="w-full text-center py-3 rounded-2xl border border-white/10 text-gray-500 hover:text-white transition-all font-bold">
              Regresar
            </button>
          </div>
        </div>
      </main>

      {/* --- MODAL EDITAR PERFIL (CORREGIDO CON ETIQUETAS) --- */}
      {mostrarModal && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl animate-fadeIn">
            
            {/* Header del Modal */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#0a0a0a] z-10">
              <h2 className="text-2xl font-bold">Configurar Perfil</h2>
              <span onClick={() => setMostrarModal(false)} className="cursor-pointer text-3xl hover:text-red-500">&times;</span>
            </div>

            {/* Formulario con ETIQUETAS */}
            <div className="p-8 space-y-6">
              
              {/* Nombres y Usuario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Nombre Completo</label>
                    <input type="text" name="nombres" value={usuario.nombres} onChange={handleChange} className={inputStyle}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Nombre de Usuario (Nick)</label>
                    <input type="text" name="usuario" value={usuario.usuario} onChange={handleChange} className={inputStyle}/>
                </div>
              </div>
              
              {/* Frase */}
              <div className="flex flex-col gap-2">
                 <label className={labelStyle}>Descripción / Frase</label>
                 <input type="text" name="frase" value={usuario.frase} onChange={handleChange} className={inputStyle}/>
              </div>
              
              {/* Edad, Carrera, Semestre */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Edad</label>
                    <input type="text" name="edad" value={usuario.edad} onChange={handleChange} className={inputStyle}/>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className={labelStyle}>Carrera</label>
                    <input type="text" name="carrera" value={usuario.carrera} onChange={handleChange} className={inputStyle}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Semestre</label>
                    <input type="text" name="semestre" value={usuario.semestre} onChange={handleChange} className={inputStyle}/>
                </div>
              </div>

              {/* Enseñar y Aprender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Puedo enseñar...</label>
                    <input type="text" name="enseñar1" value={usuario.enseñar1} onChange={handleChange} className={inputStyle}/>
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className={labelStyle}>Quiero aprender...</label>
                    <input type="text" name="aprender1" value={usuario.aprender1} onChange={handleChange} className={inputStyle}/>
                 </div>
              </div>
              
              {/* Proyecto */}
              <div className="flex flex-col gap-2">
                  <label className={labelStyle}>Proyecto Principal</label>
                  <input type="text" name="proyecto1" value={usuario.proyecto1} onChange={handleChange} className={inputStyle}/>
              </div>

              {/* Foto */}
              <div className="flex flex-col items-center gap-4 py-4 border-y border-white/5">
                <label className={labelStyle}>Cambiar Foto</label>
                <input type="file" onChange={handleFotoChange} accept="image/*" className="text-sm text-gray-400"/>
                <img src={usuario.foto} alt="Preview" className="w-24 h-24 rounded-full border-2 border-white/20 object-cover"/>
              </div>

              <button onClick={handleGuardar} className="w-full py-4 bg-white text-black font-extrabold rounded-2xl hover:shadow-xl transition-all uppercase tracking-widest hover:bg-gray-200">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}