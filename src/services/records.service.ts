import { DefaultApi, Configuration, Records } from "./rest-api";

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

class RecordsService {
  async getRecords(): Promise<Records> {
    const response = await restApi.getRecords();
    return response.data;
  }

  async addRecords(payload: Records): Promise<Records> {
    const response = await restApi.addRecords(payload);
    return response.data;
  }
}

let recordsService = new RecordsService();
export default recordsService;
