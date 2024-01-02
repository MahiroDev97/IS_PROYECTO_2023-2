import { getEmpresasByUser } from "../services/empresa.service";
import { useEffect, useState } from "react";
import "../styles/MisEmpresas.css";
export const MisEmpresas = () => {
  const [misEmpresas, setMisEmpresas] = useState([]);

  const userEmail = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    getEmpresasByUser(userEmail).then((res) => {
      setMisEmpresas(res.data);
    });
  }, []);

  console.log(misEmpresas);
  return (
    <div className="mis-empresas">
      <h1>Mis Empresas</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Giro</th>
            <th>Rut</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(misEmpresas) && misEmpresas.length === 0 ? (
            <tr>
              <td colSpan="4">
                <h1>No tienes empresas</h1>
              </td>
            </tr>
          ) : (
            Array.isArray(misEmpresas) &&
            misEmpresas.map((misEmpresas) => (
              <tr key={misEmpresas._id}>
                <td>{misEmpresas.nombre}</td>
                <td>{misEmpresas.giro}</td>
                <td>{misEmpresas.rut}</td>
                <td>{misEmpresas.direccion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
