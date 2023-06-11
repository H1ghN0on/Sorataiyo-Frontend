import { AxiosInstance } from "axios";
import { User } from "store";

export type ApplicationModelType = {
  x: number;
  y: number;
  radius: number;
  instrument: number;
  status: string;
  user: number;
  name: string;
};

export type ApplicationViewType = {
  id: number;
  x: number;
  y: number;
  radius: number;
  status: string;
  user: string;
  name: string;
  Instrument: InstrumentType;
  createdAt: string;
};

type InstrumentType = {
  name: string;
  id: number;
};

interface IGetInstrumentsResult {
  status: boolean;
  instruments: InstrumentType[];
}

interface ICreateApplicationResult {
  status: boolean;
  application?: any;
  message?: string;
}

interface IGetApplicationsResult {
  status: boolean;
  applications: ApplicationViewType[];
}

const ApplicationApi = (instance: AxiosInstance) => {
  return {
    getInstruments: async (): Promise<IGetInstrumentsResult | null> => {
      try {
        const data = await instance.get("/applications/get-instruments");
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
      params: Omit<ApplicationModelType, "user">
    ): Promise<ICreateApplicationResult | null> => {
      try {
        const data = await instance.post("/applications/create", { ...params });
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
    getApplications: async (): Promise<IGetApplicationsResult | null> => {
      try {
        const data = await instance.get("/applications/get");
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
