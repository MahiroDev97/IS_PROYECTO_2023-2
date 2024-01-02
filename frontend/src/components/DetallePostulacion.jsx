import { updatePostulacion } from "../services/postulaciones.service";
import { useState } from "react";
import "../styles/DetallePostulacion.css";
export const DetallePostulacion = ({ postulacion, cerrar }) => {
  const [comentariosRevisor, setComentariosRevisor] = useState("");

  const handleComentariosRevisor = (e) => {
    setComentariosRevisor(e.target.value);
  };

  const handleUpdatePostulacion = async (id, updatedPostulacion) => {
    await updatePostulacion(id, updatedPostulacion);
  };
  return (
    <div className="DetallePostulacion">
      <h1>Detalle Postulación</h1>
      <button onClick={cerrar}>Cerrar</button>
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
          <a key={i} href={` http://localhost:5000/${path.url}`}>
            {path.nombre}
          </a>
        ))}
      </p>
      <div>
        <h3>Añadir Comentarios</h3>
        <textarea
          className="ComentariosRevisor"
          cols="30"
          rows="10"
          value={comentariosRevisor}
          onChange={handleComentariosRevisor}
        ></textarea>
      </div>
      <div>
        <button
          onClick={() =>
            handleUpdatePostulacion(postulacion._id, {
              ...postulacion,
              comentariosRevisor: comentariosRevisor,
              estado: "Aprobada",
            })
          }
        >
          Aprobar
        </button>
        <button
          onClick={() =>
            handleUpdatePostulacion(postulacion._id, {
              ...postulacion,
              comentariosRevisor: comentariosRevisor,
              estado: "Rechazada",
            })
          }
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};
