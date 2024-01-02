import "../styles/DetallePostulacion.css";
export const DetallePostulacionUsuario = ({ postulacion, cerrar }) => {
  return (
    <div className="DetallePostulacion">
      <button className="cerrar" onClick={cerrar}>
        X
      </button>
      <h1>Detalle Postulación</h1>
      <p>
        <strong>Rut Empresa:</strong> {postulacion.empresa.rut}
      </p>
      <p>
        <strong>Nombre Empresa:</strong> {postulacion.empresa.nombre}
      </p>
      <p>
        <strong>Giro Empresa:</strong> {postulacion.empresa.giro}
      </p>
      <p>
        <strong>Tipo Postulación:</strong> {postulacion.tipo}
      </p>
      <p>
        <strong>Estado:</strong> {postulacion.estado}
      </p>
      <p>
        <strong>Fecha Envío:</strong> {postulacion.fechaEnvio}
      </p>
      <p>
        <strong>Documentos:</strong>{" "}
        {postulacion.documentos.map((path, i) => (
          <a
            className="documento"
            key={i}
            href={` http://localhost:5000/${path.url}`}
          >
            {path.nombre}
          </a>
        ))}
      </p>
      <div>
        <h3>Comentarios del revisor</h3>
        <textarea
          className="ComentariosRevisor"
          cols="30"
          rows="10"
          value={postulacion.comentariosRevisor}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};
