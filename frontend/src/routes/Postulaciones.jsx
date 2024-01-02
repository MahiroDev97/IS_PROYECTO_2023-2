import {
  getPostulaciones,
  deletePostulacion,
  updatePostulacion,
} from "../services/postulaciones.service";
import { DetallePostulacion } from "../components/DetallePostulacion";
import { useEffect, useState } from "react";
import "../styles/Postulaciones.css";
export const Postulaciones = () => {
  const [postulaciones, setPostulaciones] = useState([]);

  const [detalleAbierto, setDetalleAbierto] = useState(false);
  const [postulacionSeleccionada, setPostulacionSeleccionada] = useState(null);

  const handleAbrirDetalle = (postulacion) => {
    setDetalleAbierto(true);
    setPostulacionSeleccionada(postulacion);
  };

  const handleCerrarDetalle = () => {
    setDetalleAbierto(false);
    setPostulacionSeleccionada(null);
    fetchPostulaciones();
  };

  const fetchPostulaciones = async () => {
    const res = await getPostulaciones();
    setPostulaciones(res);
  };

  const handleUpdatePostulacion = async (id, updatedPostulacion) => {
    await updatePostulacion(id, updatedPostulacion);
    fetchPostulaciones();
  };

  const handleDeletePostulacion = async (id) => {
    await deletePostulacion(id);
    fetchPostulaciones();
  };

  useEffect(() => {
    fetchPostulaciones();
  }, []);

  return (
    <div className="tablaEvPostulaciones">
      {detalleAbierto && (
        <div className="modal">
          <DetallePostulacion
            postulacion={postulacionSeleccionada}
            cerrar={handleCerrarDetalle}
          />
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Rut</th>
            <th>Nombre Empresa</th>
            <th>Tipo Postulacion</th>
            <th>Estado</th>
            <th>Comentarios Revisor</th>
            <th>Fecha Envío</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {postulaciones.map((postulacion) => (
            <tr
              className="filatabla"
              key={postulacion._id}
              onClick={() => handleAbrirDetalle(postulacion)}
            >
              <td>{postulacion.empresa.rut}</td>
              <td>{postulacion.empresa.nombre}</td>
              <td>{postulacion.tipo}</td>
              <td>{postulacion.estado}</td>
              <td>{postulacion.comentariosRevisor}</td>
              <td>{new Date(postulacion.fechaenvio).toLocaleDateString()}</td>
              <td>
                <button className="buttonAprobar"
                  type="aprobar"
                  onClick={() =>
                    handleUpdatePostulacion(postulacion._id, {
                      ...postulacion,
                      estado: "Aprobada",
                    })
                  }
                >
                  Aprobar
                </button>
                <button className="buttonRechazar"
                  type="rechazar"
                  onClick={() =>
                    handleUpdatePostulacion(postulacion._id, {
                      ...postulacion,
                      estado: "Rechazada",
                    })
                  }
                >
                  Rechazar
                </button>
                <button className="buttonEliminar"
                  type="eliminar"
                  onClick={() => handleDeletePostulacion(postulacion._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
