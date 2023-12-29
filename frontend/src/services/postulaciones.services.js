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
