import { Archived } from "./rest-api";
import { restApi } from "./rest-api.service";

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
