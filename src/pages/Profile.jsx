import { useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Publications from "../components/Publications";
import Knowledge from "../components/Knowledge";
import Projects from "../components/Projects";
import EditProfileModal from "../components/EditProfile";
import logoEsfot from "../assets/logoEsfot.png";

export default function Profile() {
  const [user, setUser] = useState({
    nombres: "",
    usuario: "",
    email: "---",
    frase: "Sin descripción",
    edad: "--",
    semestre: "--",
    carrera: "--",
    enseñar1: "Sin asignar",
    aprender1: "Sin asignar",
    proyecto1: "Sin proyectos",
    foto: logoEsfot,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const [publicaciones] = useState([
    { id: 1, descripcion: "Descripción del documento 1" },
    { id: 2, descripcion: "Descripción del documento 2" },
  ]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datos) setUser((prev) => ({ ...prev, ...datos }));
  }, []);

  return (
    <div className="min-h-screen font-['Outfit'] text-white bg-[#050505] bg-[radial-gradient(circle_at_top_center,_#1a1a1a,_#050505)] bg-fixed">
      <ProfileHeader {...user} />
      <main className="max-w-7xl mx-auto px-[5%] py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Publications user={user} publicaciones={publicaciones} />
        <div className="space-y-8">
          <Knowledge enseñar1={user.enseñar1} aprender1={user.aprender1} />
          <Projects proyecto1={user.proyecto1} />
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-4 rounded-2xl bg-white text-black font-extrabold hover:bg-gray-200 transition-all uppercase tracking-widest shadow-lg"
            >
              Editar Perfil
            </button>
            <a
              href="/facultades"
              className="block w-full text-center py-3 rounded-2xl border border-white/10 text-gray-500 hover:text-white transition-all font-bold"
            >
              Regresar
            </a>
          </div>
        </div>
      </main>

      {modalOpen && <EditProfileModal user={user} setUser={setUser} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
