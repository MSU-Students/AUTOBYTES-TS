import { Bulletin } from "./rest-api";
import { restApi } from "./rest-api.service";

class BulletinService {
  async getBulletins(): Promise<Bulletin> {
    const response = await restApi.getBulletins();
    return response.data;
  }

  async addBulletin(payload: Bulletin): Promise<Bulletin> {
    const response = await restApi.addBulletin(payload);
    return response.data;
  }

  async getBulletin(id: string): Promise<Bulletin> {
    console.log(id);
    const response = await restApi.getBulletin(id);
    return response.data;
  }
  async updateBulletin(id: string, payload: Bulletin): Promise<Bulletin> {
    const response = await restApi.updateBulletin(id, payload);
    return response.data;
  }
}

let bulletinService = new BulletinService();
export default bulletinService;
