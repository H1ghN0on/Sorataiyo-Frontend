import axios from "axios";
import cookies from "js-cookie";
import { UserApi } from "./apis";

export const Api = () => {
  let token = cookies.get("token");

  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return {
    ...UserApi(instance),
  };
};
