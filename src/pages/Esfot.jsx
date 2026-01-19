import styles from "../css/esfot.module.css";
import { useNavigate } from "react-router-dom";
export default function Esfot(){
  const navigate = useNavigate();
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

        {/* Publicación Ejemplo */}
        <article className={styles.postCard}>
          <div className={styles.postHeader}>
            <div className={styles.userInfo}>
              <img
                src="/imagenes/perfil.png"
                alt="user"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
              <span>Usuario Fecha</span>
            </div>

            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              ...
            </button>
          </div>

          <p style={{ marginBottom: "10px" }}>
            Descripcion del contenido
          </p>

          <div className={styles.postContentBox}>
            <i className={`fa-solid fa-folder ${styles.folderIcon}`} />
          </div>

          <div className={styles.postActions}>
            <i className="fa-solid fa-download" />
            <i className="fa-solid fa-bookmark" />
          </div>
        </article>
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
          />

          <label className={styles.inputLabel}>Adjuntar Archivo:</label>

          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <button className={styles.fileUploadBtn}>
              Elegir archivo
            </button>
            <span style={{ fontSize: "0.7rem", color: "#666" }}>
              No se eligió ningún archivo
            </span>
          </div>

          <button className={styles.publishBtn}>Publicar</button>
        </div>
      </aside>

      {/* Campana flotante */}
      <div className={styles.bellFloat}>
        <i className="fa-solid fa-bell" />
      </div>
    </div>
  );
}
