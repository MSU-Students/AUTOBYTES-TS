import { DefaultApi, Configuration, Archived } from "./rest-api";

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

class ArchivedService {
  async getArchives(): Promise<Archived> {
    const response = await restApi.getArchives();
    return response.data;
  }

  async addArchives(payload: Archived): Promise<Archived> {
    const response = await restApi.addArchived(payload);
    return response.data;
  }
}

let archivedService = new ArchivedService();
export default archivedService;
