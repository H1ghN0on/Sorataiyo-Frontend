import axios from "axios";
import Cookies from "js-cookie";
import { UserApi, ApplicationApi, ResultsApi } from "./apis";

export const Api = () => {
  let token = Cookies.get("jwt");

  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return {
    ...UserApi(instance),
    ...ApplicationApi(instance),
    ...ResultsApi(instance),
  };
};
