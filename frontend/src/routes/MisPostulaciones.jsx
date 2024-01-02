import { getPostulacionesByUser } from "../services/postulaciones.service";
import { useEffect, useState } from "react";
import "../styles/MisPostulaciones.css";
import { DetallePostulacionUsuario } from "../components/DetallePostulacionUsuario";
export const MisPostulaciones = () => {
  const [misPostulaciones, setMisPostulaciones] = useState([]);

  const [detalleAbierto, setDetalleAbierto] = useState(false);
  const [postulacionSeleccionada, setPostulacionSeleccionada] = useState(null);

  const handleAbrirDetalle = (postulacion) => {
    setDetalleAbierto(true);
    setPostulacionSeleccionada(postulacion);
  };

  const handleCerrarDetalle = () => {
    setDetalleAbierto(false);
    setPostulacionSeleccionada(null);
  };

  const userEmail = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    getPostulacionesByUser(userEmail).then((res) => {
      setMisPostulaciones(res);
    });
  }, []);

  return (
    <div className="misPostulaciones">
      {detalleAbierto && (
        <div className="modal">
          <DetallePostulacionUsuario
            postulacion={postulacionSeleccionada}
            cerrar={handleCerrarDetalle}
          />
        </div>
      )}
      <h1>Mis Postulaciones</h1>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Documentos</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(misPostulaciones) && misPostulaciones.length === 0 ? (
            <tr>
              <td colSpan="4">
                <h1>No tienes postulaciones</h1>
              </td>
            </tr>
          ) : (
            Array.isArray(misPostulaciones) &&
            misPostulaciones.map((misPostulaciones) => (
              <tr
                key={misPostulaciones._id}
                onClick={() => handleAbrirDetalle(misPostulaciones)}
              >
                <td>{misPostulaciones.empresa.user.username}</td>
                <td>{misPostulaciones.empresa.user.email}</td>
                <td>{misPostulaciones.estado}</td>
                <td>
                  {misPostulaciones.documentos.map((path, index) => (
                    <a
                      key={index}
                      href={`http://localhost:5000/${path.url}`}
                      download
                    >
                      {path.nombre}
                    </a>
                  ))}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
