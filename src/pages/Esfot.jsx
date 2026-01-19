import React from 'react';
import '../css/esfot.css'; // Importa el CSS nuevo que acabamos de hacer

const Esfot = () => {
  return (
    <div className="layout-container">
      
      {/* 1. COLUMNA IZQUIERDA: MENÚ LATERAL */}
      <aside className="sidebar-menu">
        <a href="#" className="menu-item">
          <i className="fa-solid fa-building-columns"></i> ALU
        </a>
        <a href="#" className="menu-item">
          <i className="fa-solid fa-house"></i> Facultades
        </a>
        <a href="#" className="menu-item">
          <i className="fa-solid fa-user"></i> Perfil
        </a>
        <a href="#" className="menu-item">
          <i className="fa-solid fa-file-arrow-up"></i> Subir
        </a>
        <a href="#" className="menu-item">
          <i className="fa-solid fa-bookmark"></i> Guardados
        </a>
        <a href="#" className="menu-item">
          <i className="fa-solid fa-gear"></i> Configuración
        </a>
      </aside>


      {/* 2. COLUMNA CENTRAL: FEED */}
      <main className="main-feed">
        
        {/* Buscador */}
        <div className="search-bar-container">
          <input type="text" className="search-input" placeholder="Buscar" />
        </div>

        {/* Publicación Ejemplo (Igual a la foto) */}
        <article className="post-card">
          <div className="post-header">
            <div className="user-info">
              {/* Círculo para foto de perfil */}
              <img src="/imagenes/perfil.png" alt="user" style={{width:'40px', height:'40px', borderRadius:'50%'}} />
              <span>Usuario Fecha</span>
            </div>
            <button style={{background:'transparent', border:'none', color:'white'}}> ... </button>
          </div>

          <p style={{marginBottom: '10px'}}>Descripcion del contenido</p>

          <div className="post-content-box">
             {/* Icono de carpeta gigante */}
             <i className="fa-solid fa-folder folder-icon"></i>
          </div>

          <div className="post-actions">
            <i className="fa-solid fa-download" style={{cursor:'pointer'}}></i>
            <i className="fa-solid fa-bookmark" style={{cursor:'pointer'}}></i>
          </div>
        </article>

      </main>


      {/* 3. COLUMNA DERECHA: FORMULARIO */}
      <aside className="right-panel">
        <div className="upload-card">
          <h3>Sube contenido</h3>

          <label className="input-label">Descripcion del contenido:</label>
          <textarea 
            className="text-area-custom" 
            rows="4" 
            placeholder="¿Qué estás pensando?"
          ></textarea>

          <label className="input-label">Adjuntar Archivo:</label>
          <div style={{textAlign:'left', marginBottom:'20px'}}>
             <button className="file-upload-btn">Elegir archivo</button>
             <span style={{fontSize:'0.7rem', color:'#666'}}>No se eligió ningún archivo</span>
          </div>

          <button className="publish-btn">Publicar</button>
        </div>
      </aside>

      {/* Campana flotante abajo derecha */}
      <div className="bell-float">
        <i className="fa-solid fa-bell"></i>
      </div>

    </div>
  );
};

export default Esfot;