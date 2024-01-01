import axios from "./root.service";

export const getPostulaciones = async () => {
  try {
    const response = await axios.get("/postulaciones");
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getPostulacion = async (id) => {
  try {
    const response = await axios.get(`/postulaciones/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const getPostulacionesByUser = async (userEmail) => {
  try {
    const response = await axios.get(`/postulaciones/user/${userEmail}`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const createPostulacion = async (postulacion) => {
  try {
    const formData = new FormData();
    formData.append("empresa", postulacion.empresa);
    formData.append("tipo", postulacion.tipo);
    for (let i = 0; i < postulacion.documentos.length; i++) {
      formData.append(`documentos[${i}]`, postulacion.documentos[i]);
    }
    // console.log(
    //   "Esto es la form Data",
    //   "Empresa:",
    //   formData.getAll("empresa"),
    //   "Tipo:",
    //   formData.getAll("tipo")
    // );
    // for (let i = 0; i < postulacion.documentos.length; i++) {
    //   console.log(`Documentos[${i}]:`, formData.getAll(`documentos[${i}]`));
    // }
    const response = await axios.post("/postulaciones", formData);
    if (response.status === 201) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const updatePostulacion = async (id, postulacion) => {
  try {
    const response = await axios.put(`/postulaciones/${id}`, postulacion);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const deletePostulacion = async (id) => {
  try {
    const response = await axios.delete(`/postulaciones/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};
