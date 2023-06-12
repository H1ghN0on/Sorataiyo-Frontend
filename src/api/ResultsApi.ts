import { AxiosInstance } from "axios";
import { User } from "store";

interface IGetSessionResultParams {
  id: number;
}

interface IGetResultsForUserResult {
  status: boolean;
  applications: any[];
}

interface IGetSessionResultResult {
  status: boolean;
  session: any;
  name: string;
}

const ResultsApi = (instance: AxiosInstance) => {
  return {
    getUserSessions: async (): Promise<IGetResultsForUserResult | null> => {
      try {
        const data = await instance.get(`/results/sessions`);
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
    getSessionResults: async (
      params: IGetSessionResultParams
    ): Promise<IGetSessionResultResult | null> => {
      try {
        const data = await instance.get(`/results/sessions/${params.id}`);
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

export default ResultsApi;
