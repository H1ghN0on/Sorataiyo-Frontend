import { AxiosInstance } from "axios";

export interface CheckEmailExistenceParams {
  email: string;
}

export interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

const UserApi = (instance: AxiosInstance) => {
  return {
    checkEmailExistence: async (params: CheckEmailExistenceParams) => {
      try {
        const { data } = await instance.post("/auth/check-email", { ...params });
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    register: async (params: RegisterParams) => {
      try {
        const { data } = await instance.post("/auth/register", { ...params });
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    login: async (params: LoginParams) => {
      try {
        const { data } = await instance.post("/auth/login", { ...params });
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  };
};

export default UserApi;
