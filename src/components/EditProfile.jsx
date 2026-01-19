import React, { useState } from "react";
import Swal from "sweetalert2";


export default function EditProfile({ user, setUser, onClose }) {
  const [inputs, setInputs] = useState({ ...user, foto: null });
  const [previewFoto, setPreviewFoto] = useState(user.foto);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const manejarFoto = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewFoto(event.target.result);
        setInputs((prev) => ({ ...prev, foto: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    const nuevoUsuario = { ...user, ...inputs };
    if (inputs.foto) nuevoUsuario.foto = inputs.foto;
    setUser(nuevoUsuario);
    localStorage.setItem("datosUsuario", JSON.stringify(nuevoUsuario));
    onClose();

    Swal.fire({
      icon: "success",
      title: "Perfil Actualizado",
      background: "#0a0a0a",
      color: "#fff",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0a0a0a] border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl">
        <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#0a0a0a] z-10">
          <h2 className="text-2xl font-bold">Configurar Perfil</h2>
          <span onClick={onClose} className="cursor-pointer text-3xl hover:text-red-500">
            &times;
          </span>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombres"
              placeholder="Nombre Completo"
              className="bg-white/5 border-b border-white/20 p-2 outline-none focus:border-white transition-colors"
              value={inputs.nombres}
              onChange={manejarCambio}
            />
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              className="bg-white/5 border-b border-white/20 p-2 outline-none focus:border-white transition-colors"
              value={inputs.usuario}
              onChange={manejarCambio}
            />
          </div>
          <input
            type="text"
            name="frase"
            placeholder="Tu descripción o frase"
            className="w-full bg-white/5 border-b border-white/20 p-2 outline-none focus:border-white"
            value={inputs.frase}
            onChange={manejarCambio}
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              name="edad"
              placeholder="Edad"
              className="bg-white/5 border-b border-white/20 p-2 outline-none"
              value={inputs.edad}
              onChange={manejarCambio}
            />
            <input
              type="text"
              name="carrera"
              placeholder="Carrera"
              className="bg-white/5 border-b border-white/20 p-2 outline-none"
              value={inputs.carrera}
              onChange={manejarCambio}
            />
            <input
              type="number"
              name="semestre"
              placeholder="Semestre"
              className="bg-white/5 border-b border-white/20 p-2 outline-none"
              value={inputs.semestre}
              onChange={manejarCambio}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="enseñar1"
              placeholder="Puedo enseñar..."
              className="bg-white/5 border-b border-white/10 p-2 outline-none text-sm"
              value={inputs.enseñar1}
              onChange={manejarCambio}
            />
            <input
              type="text"
              name="aprender1"
              placeholder="Quiero aprender..."
              className="bg-white/5 border-b border-white/10 p-2 outline-none text-sm"
              value={inputs.aprender1}
              onChange={manejarCambio}
            />
          </div>
          <input
            type="text"
            name="proyecto1"
            placeholder="Proyecto principal"
            className="w-full bg-white/5 border-b border-white/20 p-2 outline-none"
            value={inputs.proyecto1}
            onChange={manejarCambio}
          />
          <div className="flex flex-col items-center gap-4 py-4 border-y border-white/5">
            <label className="text-xs font-bold text-gray-500 uppercase">Cambiar Foto</label>
            <input type="file" accept="image/*" className="text-sm" onChange={manejarFoto} />
            <img className="w-24 h-24 rounded-full border-2 border-white/20 object-cover" src={previewFoto} alt="Preview" />
          </div>
          <button
            onClick={guardarCambios}
            className="w-full py-4 bg-white text-black font-extrabold rounded-2xl hover:shadow-xl transition-all uppercase"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
