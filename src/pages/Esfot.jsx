import styles from "../css/esfot.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 

const publicacionesIniciales = [
  {
    id: 1,
    usuario: "María García",
    fecha: "28/01/2026",
    descripcion: "Apuntes de Cálculo Diferencial - Derivadas e integrales 📚",
    tipo: "pdf", 
    nombreArchivo: "Calculo_Apuntes.pdf",
    urlArchivo: null, 
  },
  {
    id: 2,
    usuario: "Carlos Mendoza", 
    fecha: "27/01/2026",
    descripcion: "Mi proyecto de Programación Web con React 🚀",
    tipo: "imagen",
    nombreArchivo: "imagenP1.jpg",
    urlArchivo: "/imagenes/imagenP1.jpg",
  },
  {
    id: 3,
    usuario: "Ana Rodríguez",
    fecha: "25/01/2026", 
    descripcion: "Resumen de Física II - Electromagnetismo ⚡",
    tipo: "pdf",
    nombreArchivo: "Fisica_II_Resumen.pdf",
    urlArchivo: null,
  },
  {
    id: 4,
    usuario: "Luis Herrera",
    fecha: "24/01/2026",
    descripcion: "Diagrama de base de datos del proyecto final 💾",
    tipo: "imagen",
    nombreArchivo: "imagenP2.avif",
    urlArchivo: "/imagenes/imagenP2.avif",
  },
];

export default function Esfot() {
  const navigate = useNavigate();
  
  // ESTADOS 

  
  // 1. Lista de publicaciones - inicia con las quemadas
  const [posts, setPosts] = useState(publicacionesIniciales);
  
  // 2. Texto de la descripción del formulario
  const [descripcion, setDescripcion] = useState("");
  
  // 3. Archivo seleccionado (null = ninguno)
  const [archivo, setArchivo] = useState(null);

  // =============================================
  // FUNCIÓN PARA PUBLICAR
  // =============================================
  function handlePublicar() {
    // 1. VALIDACIÓN: verificar que hay datos
    if (!descripcion.trim()) {
      alert("Escribe una descripción");
      return; // Salir de la función si no hay descripción
    }
    if (!archivo) {
      alert("Selecciona un archivo");
      return;
    }

    // 2. CREAR OBJETO DE NUEVA PUBLICACIÓN
    const nuevaPublicacion = {
      id: Date.now(), // ID único basado en timestamp
      usuario: "Tú", // Usuario actual (hardcodeado por ahora)
      fecha: new Date().toLocaleDateString("es-ES"), // Fecha de hoy
      descripcion: descripcion,
      tipo: archivo.type.startsWith("image/") ? "imagen" : "pdf",
      nombreArchivo: archivo.name,
      urlArchivo: null, // Por ahora no guardamos la imagen real
    };

    // 3. AGREGAR AL ARRAY (al inicio con spread operator)

    setPosts([nuevaPublicacion, ...posts]);

    // 4. LIMPIAR FORMULARIO
    setDescripcion("");
    setArchivo(null);
    
    // Limpiar el input file también
    document.getElementById("inputArchivo").value = "";

    alert("¡Publicación creada! (temporal, desaparece al recargar)");
  }

  return (
    <div className={styles.layoutContainer}>
      {/* 1. COLUMNA IZQUIERDA: MENÚ LATERAL */}
      <aside className={styles.sidebarMenu}>
        <a href="#" className={styles.menuItem}>
          <i className="fa-solid fa-building-columns" /> ALU
        </a>
        <a onClick={() => navigate("/Facultades")} href="#" className={styles.menuItem}>
          <i className="fa-solid fa-house" /> Facultades
        </a>
        <a onClick={() => navigate("/Perfil")} href="#" className={styles.menuItem}>
          <i className="fa-solid fa-user" /> Perfil
        </a>
        <a href="#" className={styles.menuItem}>
          <i className="fa-solid fa-file-arrow-up" /> Subir
        </a>
        <a href="#" className={styles.menuItem}>
          <i className="fa-solid fa-bookmark" /> Guardados
        </a>
        <a href="#" className={styles.menuItem}>
          <i className="fa-solid fa-gear" /> Configuración
        </a>
      </aside>

      {/* 2. COLUMNA CENTRAL: FEED */}
      <main className={styles.mainFeed}>
        {/* Buscador */}
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar"
          />
        </div>

        {posts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            {/* HEADER: Avatar, nombre y fecha */}
            <div className={styles.postHeader}>
              <div className={styles.userInfo}>
                <img
                  src="/imagenes/perfil.png"
                  alt={post.usuario}
                  className={styles.avatarImg}
                />
                <div>
                  {/* 👇 Mostramos datos dinámicos con {} */}
                  <span className={styles.userName}>{post.usuario}</span>
                  <span className={styles.userDate}>
                    {post.fecha}
                  </span>
                </div>
              </div>

              <button className={styles.menuBtn}>
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>

            {/* DESCRIPCIÓN */}
            <p className={styles.postDescription}>{post.descripcion}</p>

            {/* CONTENIDO: Imagen o PDF */}
            <div className={styles.postContentBox}>
              {/* Si tipo es "imagen" muestra <img>, si no muestra ícono PDF */}
              {post.tipo === "imagen" ? (
                <img
                  src={post.urlArchivo}
                  alt={post.nombreArchivo}
                  className={styles.postImage}
                />
              ) : (
                <div className={styles.pdfContainer}>
                  <i className={`fa-solid fa-file-pdf ${styles.pdfIcon}`} />
                  <span className={styles.pdfFileName}>
                    {post.nombreArchivo}
                  </span>
                </div>
              )}
            </div>

            {/* ACCIONES */}
            <div className={styles.postActions}>
              <i className={`fa-solid fa-download ${styles.actionIcon}`} />
              <i className={`fa-solid fa-bookmark ${styles.actionIcon}`} />
            </div>
          </article>
        ))}
      </main>

      {/* 3. COLUMNA DERECHA: FORMULARIO */}
      <aside className={styles.rightPanel}>
        <div className={styles.uploadCard}>
          <h3>Sube contenido</h3>

          <label className={styles.inputLabel}>
            Descripcion del contenido:
          </label>

          <textarea
            className={styles.textAreaCustom}
            rows="4"
            placeholder="¿Qué estás pensando?"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <label className={styles.inputLabel}>Adjuntar Archivo:</label>

          <div className={styles.fileInputContainer}>
            <input
              type="file"
              id="inputArchivo"
              accept="image/*,.pdf"
              className={styles.hiddenInput}
              onChange={(e) => {
                const file = e.target.files[0]; // Obtiene el archivo
                if (file) {
                  setArchivo(file); // Guarda el archivo en el estado
                }
              }}
            />
            
            <label htmlFor="inputArchivo" className={styles.fileUploadBtn}>
              Elegir archivo
            </label>
            
            <span className={styles.fileNameText}>
              {archivo ? archivo.name : "No se eligió ningún archivo"}
            </span>
          </div>

          <button 
            className={styles.publishBtn}
            onClick={handlePublicar}
          >
            Publicar
          </button>
        </div>
      </aside>

      {/* Campana flotante */}
      <div className={styles.bellFloat}>
        <i className="fa-solid fa-bell" />
      </div>
    </div>
  );
}