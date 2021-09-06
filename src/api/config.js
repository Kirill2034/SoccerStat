import axios from "axios";
import { toast } from "react-toastify";

const API_CLIENT = axios.create({
  headers: { "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN },
});

API_CLIENT.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      toast.error("Данные недоступны");
    }

    return Promise.reject(error);
  }
);

export { API_CLIENT };
