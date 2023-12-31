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

export const createPostulacion = async (postulacion) => {
  try {
    const response = await axios.post("/postulaciones", postulacion);
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
