import axios from "axios";

const API = axios.create({
  baseURL: `https://restcountries.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const fetcher = async (url) => {
  try {
    const res = await API.get(url);
    return { status: res.status, data: res.data };
  } catch (e) {
    return { status: e.response.status, data: e.message };
  }
};

const fetchAll = async (data) => {
  try {
    const res = await axios.all(data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default { fetcher, fetchAll };
