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
