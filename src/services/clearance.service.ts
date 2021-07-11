import { DefaultApi, Configuration, Clearance } from "./rest-api";

const dev = "http://localhost:3000";

const restConfig = new Configuration({
  basePath: dev,
  baseOptions: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

const restApi = new DefaultApi(restConfig);

class ClearanceService {
  async getClearance(): Promise<Clearance> {
    const response = await restApi.getClearances();
    return response.data;
  }

  async addClearance(payload: Clearance): Promise<Clearance> {
    const response = await restApi.addClearance(payload);
    return response.data;
  }
}

let clearanceService = new ClearanceService();
export default clearanceService;
