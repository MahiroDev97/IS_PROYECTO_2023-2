import { getPostulaciones } from "../services/postulaciones.services"
import { useEffect, useState } from "react"

export const Postulaciones = () => {
    const [postulaciones, setPostulaciones] = useState([]);
    useEffect(() => {
        getPostulaciones().then((res) => {
            console.log(res)
            setPostulaciones(res);
        });
    }, []);

    return (
    <>
        <h1>Postulaciones</h1>
        <table>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {postulaciones.map((postulacion) => (
                    <tr key={postulacion._id}>
                        <td>{postulacion.user.username}</td>
                        <td>{postulacion.user.email}</td>
                        <td>{postulacion.estado}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
};
