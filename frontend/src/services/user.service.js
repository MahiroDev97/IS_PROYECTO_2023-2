import axios from "./root.service";

export const getUsuarios = async () => {
  try {
    const response = await axios.get("/users");
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getUsuario = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const getUserByEmail = async (userEmail) => {
  try {
    const response = await axios.get(`/users/user/${userEmail}`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const createUsuario = async (usuario) => {
  try {
    const response = await axios.post("/users", usuario);
    if (response.status === 201) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const updateUsuario = async (id, usuario) => {
  try {
    const response = await axios.put(`/users/${id}`, usuario);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const deleteUsuario = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};
