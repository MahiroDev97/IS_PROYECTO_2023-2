import axios from "./root.service";

export const getEmpresas = async () => {
  try {
    const response = await axios.get("/empresas");
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getEmpresa = async (id) => {
  try {
    const response = await axios.get(`/empresas/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const getEmpresasByUser = async (userEmail) => {
  try {
    const response = await axios.get(`/empresas/user/${userEmail}`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const createEmpresa = async (empresa) => {
  try {
    const response = await axios.post("/empresas", empresa);
    if (response.status === 201) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const updateEmpresa = async (id, empresa) => {
  try {
    const response = await axios.put(`/empresas/${id}`, empresa);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};

export const deleteEmpresa = async (id) => {
  try {
    const response = await axios.delete(`/empresas/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};
