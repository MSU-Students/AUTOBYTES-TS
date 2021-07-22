import { Records } from "./rest-api";
import { restApi } from "./rest-api.service";

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
