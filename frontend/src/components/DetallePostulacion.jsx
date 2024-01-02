import { updatePostulacion } from "../services/postulaciones.service";
import { useState } from "react";
import "../styles/DetallePostulacion.css";
import { toast } from "react-toastify";
export const DetallePostulacion = ({ postulacion, cerrar }) => {
  const [comentariosRevisor, setComentariosRevisor] = useState(
    postulacion.comentariosRevisor
  );

  const handleComentariosRevisor = (e) => {
    setComentariosRevisor(e.target.value);
  };

  const handleUpdatePostulacion = async (id, updatedPostulacion) => {
    await updatePostulacion(id, updatedPostulacion);
  };
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
        <h3>Añadir Comentarios</h3>
        <textarea
          className="ComentariosRevisor"
          cols="30"
          rows="10"
          value={comentariosRevisor}
          onChange={handleComentariosRevisor}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="aprobar"
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
          className="rechazar"
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
