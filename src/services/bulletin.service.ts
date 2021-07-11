import { DefaultApi, Configuration, Bulletin } from "./rest-api";

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

class BulletinService {
  async getBulletin(): Promise<Bulletin> {
    const response = await restApi.getBulletins();
    return response.data;
  }

  async addingBulletin(payload: Bulletin): Promise<Bulletin> {
    const response = await restApi.addBulletin(payload);
    return response.data;
  }
}

let bulletinService = new BulletinService();
export default bulletinService;
