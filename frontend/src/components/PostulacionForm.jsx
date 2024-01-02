import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getEmpresasByUser } from "../services/empresa.service";
import { useEffect, useState } from "react";
import { createPostulacion } from "../services/postulaciones.service";
import "../styles/PostularStyles.css";

export default function PostulacionForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const userEmail = JSON.parse(localStorage.getItem("user")).email;

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    getEmpresasByUser(userEmail).then((response) => {
      setEmpresas(response.data);
    });
  }, []);

  const onSubmit = async (data) => {
    console.log("Esto es la data del front", data);
    const formData = new FormData();
    formData.append("empresa", data.empresa);
    formData.append("tipo", data.tipo);
    for (let i = 0; i < data.documentos.length; i++) {
      formData.append("documentos", data.documentos[i]);
    }

    await createPostulacion(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="postularPage">
        <div className="postularBox">
          <div className="form-group"> <br />
            <label htmlFor="empresa">Empresa</label> <br />
            <select
              className="form-control"
              id="empresa"
              {...register("empresa", { required: true })}
            >
              {empresas.map((empresa) => (
                <option key={empresa._id} value={empresa._id}>
                  {empresa.nombre}
                </option>
              ))}
            </select>
          </div> <br />
          <div className="form-group">
            <label htmlFor="descripcion">Tipo de Patente</label> <br />
            <select
              className="form-control"
              id="tipo"
              {...register("tipo", { required: true })}
            >
              <option value="Comercial">Comercial</option>
              <option value="De Alcoholes">De Alcoholes</option>
            </select>
          </div> <br />
          <div className="form-group">
            <label htmlFor="documentos">Documentos</label> <br />
            <input
              type="file"
              className="form-control-file"
              id="Documentos"
              multiple
              {...register("documentos", { required: true })}
            />
          </div> <br />
          <button type="submit" className="botonPostular">
            Postular
          </button>
        </div>
      </div>
    </form>
  );
}
