import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createPostulacion } from "../services/postulaciones.service";
import { getEmpresasByUser } from "../services/empresa.service";
import { useEffect } from "react";
import { useState } from "react";

function PostulacionForm() {
    const navigate = useNavigate();
    const [empresas, setEmpresas] = useState([]);

    const {
        register,
        handleSubmit,
    } = useForm({ mode: 'onSubmit' });

    const userEmail = JSON.parse(localStorage.getItem("user")).email;
    
    useEffect(() => {
        getEmpresasByUser(userEmail).then((res) => {
            setEmpresas(res.data);
        });
    }, []);

    const onSubmit = (data) => {
        createPostulacion(data).then((res) => {
            console.log("Postulacion creada");
            console.log(res);
            navigate("/");
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("empresa")}>
                {empresas && empresas.length > 0 ? (
                    empresas.map((empresa) => (
                        <option key={empresa._id} value={empresa._id}>
                            {empresa.nombre} - Rut: {empresa.rut} 
                        </option>
                    ))
                ) : (
                    <option>No tiene empresas</option>
                )}
            </select>
            {/* Rest of your form */}
            <input type="submit" disabled={!empresas || empresas.length === 0} />
        </form>
    );
}

export default PostulacionForm;