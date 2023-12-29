import axios from "./root.service";

export const getPostulaciones = async () => {
  try {
    const response = await axios.get("/postulaciones");
    const { status, data } = response;
    if (status === 200) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getPostulacion = async (id) => {
  try {
    const response = await axios.get(`/postulaciones/${id}`);
    const { status, data } = response;
    if (status === 200) {
      return data.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const createPostulacion = async (postulacion) => {
  try {
    const response = await axios.post("/postulaciones", postulacion);
    const { status, data } = response;
    if (status === 201) {
      return data.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const updatePostulacion = async (id, postulacion) => {
  try {
    const response = await axios.put(`/postulaciones/${id}`, postulacion);
    const { status, data } = response;
    if (status === 200) {
      return data.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const deletePostulacion = async (id) => {
  try {
    const response = await axios.delete(`/postulaciones/${id}`);
    const { status } = response;
    if (status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
