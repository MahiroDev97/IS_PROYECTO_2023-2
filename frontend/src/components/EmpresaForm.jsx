import { useNavigate } from "react-router-dom";
import { createEmpresa } from "../services/empresa.service";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getUserByEmail } from "../services/user.service";
import { getEmpresaByRut } from "../services/empresa.service";
import { toast } from "react-toastify";
import "../styles/EmpresaForm.css";

export default function EmpresaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const userEmail = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    getUserByEmail(userEmail).then((response) => {
      setUser(response.data);
    });
  }, []);
  const userID = user._id;
  const onSubmit = async (data) => {
    data.user = userID;
    console.log("Esto es la data del front", data);
    const existingEmpresa = await getEmpresaByRut(data.rut);
    console.log(existingEmpresa);
    if (existingEmpresa.data !== null) {
      toast.error("La empresa ya existe.");
      return;
    }
    await createEmpresa(data)
      .then(() => {
        toast.success("Empresa creada con éxito.");
        navigate("/");
      })
      .catch(() => {
        console.log("Error al crear la empresa.");
      });
  };

  return (
    <div className="empresasbox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombreEmpresa">Nombre Empresa</label>
        <input
          type="text"
          name="nombreEmpresa"
          placeholder="Nombre de la empresa"
          {...register("nombre", { required: true })}
        />
        <label htmlFor="GiroEmpresa">Giro</label>
        <input
          type="text"
          name="GiroEmpresa"
          placeholder="Giro de la empresa"
          {...register("giro", { required: true })}
        />
        <label htmlFor="RutEmpresa">Rut</label>
        <input
          type="text"
          name="RutEmpresa"
          placeholder="Rut de la empresa"
          {...register("rut", { required: true })}
        />
        <label htmlFor="DireccionEmpresa">Direccion</label>
        <input
          type="text"
          name="DireccionEmpresa"
          placeholder="Direccion de la empresa"
          {...register("direccion", { required: true })}
        />
        <button type="submit">Crear Empresa</button>
      </form>
    </div>
  );
}
