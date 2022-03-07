import axios from "axios";

const baseURL = "http://localhost:3005/notes";

const getAll = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};
const createNew = async (userInput) => {
  const note = { ...userInput, done: false };
  const res = await axios.post(baseURL, note);
  return res.data;
};

export default { getAll, createNew };
