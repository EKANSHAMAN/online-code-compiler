import axios from "axios";

const BASE_URL = "https://online-code-compiler-cr6y.onrender.com";

export const fetchSharedCode = (id) => {
  return axios.get(`${BASE_URL}/code/${id}`);
};

export const runCode = (code, language) =>  {
  return axios.post(`${BASE_URL}/run`, { code, language });
};
