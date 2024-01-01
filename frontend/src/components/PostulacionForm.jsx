import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getEmpresasByUser } from "../services/empresa.service";
import { useEffect, useState } from "react";
import { createPostulacion } from "../services/postulaciones.service";

export default function PostulacionForm() {

    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const userEmail = JSON.parse(localStorage.getItem("user")).email;

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        getEmpresasByUser(userEmail).then((response) => {
            setEmpresas(response.data);
        });
    }, []);


    // console.log(empresas)
    const onSubmit = async (data) => {
        console.log("Esto es la data del front", data);
        await createPostulacion(data);
        navigate("/");
        
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <select className="form-control" id="empresa" {...register("empresa", { required: true })}>
                    {empresas.map((empresa) => (
                        <option key={empresa._id} value={empresa._id}>{empresa.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="descripcion">Tipo de Patente</label>
                <select className="form-control" id="tipo" {...register("tipo", { required: true })}>
                    <option value = "Comercial">Comercial</option>
                    <option value = "De Alcoholes">De Alcoholes</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="documentos">documentos</label>
                <input type="file" className="form-control-file" id="Documentos" multiple {...register("documentos", { required: true })} />
            </div>
            <button type="submit" className="btn btn-primary">Postular</button>
        </form>

    );


}