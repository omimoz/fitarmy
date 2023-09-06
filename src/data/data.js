import axios from "axios";

export const getService = async () => {
  const res = await axios.get(`core/services.json`);
  return res.data;
};
