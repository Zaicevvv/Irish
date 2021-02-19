import axios from "axios";
import config from "../config";
import { getToken, removeToken } from "./tokenCRUD";
import { removeUser } from "./currentUserCRUD";
import history from "../history";
import { ROUTE_TO_LOGIN } from "../constants/routes";

const api = axios.create({
  baseURL: config.REACT_APP_BASE_URL,
  crossDomain: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (cfg) => {
    const token = getToken();

    // eslint-disable-next-line no-param-reassign
    if (token) cfg.headers.Authorization = token;
    return cfg;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      removeToken();
      removeUser();
      // eslint-disable-next-line no-undef
      history.push(ROUTE_TO_LOGIN);
    }

    return Promise.reject(error);
  }
);

export default api;
