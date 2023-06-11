import { AxiosInstance } from "axios";
import { User } from "store";

export type ApplicationType = {
  x: number;
  y: number;
  radius: number;
  instrument: number;
  status: string;
  user: number;
  name: string;
};

interface IGetInstrumentsResult {
  status: boolean;
  instruments: {
    name: string;
    id: number;
  }[];
}

interface ICreateApplicationResult {
  status: boolean;
  application?: any;
  message?: string;
}

const ApplicationApi = (instance: AxiosInstance) => {
  return {
    getInstruments: async (): Promise<IGetInstrumentsResult | null> => {
      try {
        const data = await instance.get("/applications/get-instruments");
        console.log(data);
        if (!data) return null;
        return data.data;
      } catch (error: any) {
        console.log(error);
        if (error.response.status === 401) {
          User.logout();
          return null;
        }
        return null;
      }
    },
    createApplication: async (
      params: Omit<ApplicationType, "user">
    ): Promise<ICreateApplicationResult | null> => {
      try {
        const data = await instance.post("/applications/create", { ...params });
        console.log(data);
        if (!data) return null;
        return data.data;
      } catch (error: any) {
        console.log(error);
        if (error.response.status === 401) {
          User.logout();
          return null;
        }
        return null;
      }
    },
  };
};

export default ApplicationApi;
