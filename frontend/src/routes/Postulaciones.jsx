import {getPostulaciones, deletePostulacion, updatePostulacion} from '../services/postulaciones.service'
import { useEffect, useState } from 'react';

export const Postulaciones = () => {
    const [postulaciones, setPostulaciones] = useState([]);
    
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
        <>
            <h1>Postulaciones</h1>
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
                    {postulaciones.map((postulacion) => (
                        <tr key={postulacion._id}>
                            <td>{postulacion.empresa.user.username}</td>
                            <td>{postulacion.empresa.user.email}</td>
                            <td>{postulacion.estado}</td>
                            <td>
                            {postulacion.documentos.map((path, index) => (
                                    <a key={index} href={`http://localhost:5000/${path.url}`} download>
                                        {path.nombre}
                                    </a>
                                ))}
                            </td>
                            <td>
                                <button onClick={() => handleUpdatePostulacion(postulacion._id, {...postulacion, estado: 'Aprobada'})}>Aprobar</button>
                                <button onClick={() => handleUpdatePostulacion(postulacion._id, {...postulacion, estado: 'Rechazada'})}>Rechazar</button>
                            </td>
                            <td>
                                <button onClick={() => handleDeletePostulacion(postulacion._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};