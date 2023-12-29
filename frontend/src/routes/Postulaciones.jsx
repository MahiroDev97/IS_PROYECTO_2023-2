import { getPostulaciones } from "../services/postulaciones.service"
import { useEffect, useState } from "react"

export const Postulaciones = () => {
    const [postulaciones, setPostulaciones] = useState([]);
    useEffect(() => {
        getPostulaciones().then((res) => {
            
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
                        <td>
                        {postulacion.documents.map((path, index) => (
                                <a key={index} href={`http://localhost:5000/${path.path}`} download>
                                    Documento {index + 1}
                                </a>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
};
