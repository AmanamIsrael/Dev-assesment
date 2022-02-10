import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const Get = async (url) => {
  try {
    return await axios.get(`${BASE_URL}`);
  } catch (error) {
    console.error(error);
  }
};

export const Post = async (data) => {
  try {
    return await axios.post(`${BASE_URL}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const Patch = async (data, id) => {
  try {
    return await axios.patch(`${BASE_URL}/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const Put = async (id, data) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const Delete = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
