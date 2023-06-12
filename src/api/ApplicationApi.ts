import { AxiosInstance } from "axios";
import { User } from "store";

export type ApplicationModelType = {
  id: number;
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
  modifiedAt: string;
};

type InstrumentType = {
  name: string;
  id: number;
};

interface IGetApplicationByIdParams {
  id: number;
}

interface IUpdateApplicationStatusParams {
  id: number;
  review: string;
  status: "rejected" | "accepted" | "completed";
}

interface ICompleteApplicationParams {
  id: number;
}

interface IDeleteApplicationParams {
  id: number;
}

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

interface IGetApplicationByIdResult {
  status: boolean;
  application: ApplicationViewType | null;
}

interface IUpdateApplicationStatusResult {
  status: boolean;
}

interface ICompleteApplicationResult {
  status: boolean;
}

interface IDeleteApplicationResult {
  status: boolean;
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
      params: Omit<ApplicationModelType, "user" | "id">
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
    getAdminApplications: async (): Promise<IGetApplicationsResult | null> => {
      try {
        const data = await instance.get("/applications/admin/get");
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
    getApplicationById: async (
      params: IGetApplicationByIdParams
    ): Promise<IGetApplicationByIdResult | null> => {
      try {
        const data = await instance.get(`/applications/get/${params.id}`);
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
    updateApplicationStatus: async (
      params: IUpdateApplicationStatusParams
    ): Promise<IUpdateApplicationStatusResult | null> => {
      try {
        const data = await instance.post(`/applications/status/update`, { ...params });
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
    completeApplication: async (
      params: ICompleteApplicationParams
    ): Promise<ICompleteApplicationResult | null> => {
      try {
        const data = await instance.get(`/applications/complete/${params.id}`);
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
    updateApplication: async (
      params: Omit<ApplicationModelType, "user">
    ): Promise<ICreateApplicationResult | null> => {
      try {
        const data = await instance.post("/applications/update", { ...params });
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
    deleteApplication: async (
      params: IDeleteApplicationParams
    ): Promise<IDeleteApplicationResult | null> => {
      try {
        const data = await instance.delete(`/applications/delete/${params.id}`);
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
