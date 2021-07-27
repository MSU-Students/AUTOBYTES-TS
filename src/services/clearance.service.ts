import IClearance from "src/interfaces/clearance.interface";
import { Clearance } from "./rest-api";
import { restApi } from "./rest-api.service";
class ClearanceService {
  async getClearance(): Promise<Clearance> {
    const response = await restApi.getClearances();
    return response.data;
  }

  async addClearance(payload: Clearance): Promise<Clearance> {
    const response = await restApi.addClearance(payload);
    return response.data;
  }

  async findById(id: string): Promise<Clearance> {
    const response = await restApi.getClearance(id);
    return response.data
  }

  async findOne(idNumber: string): Promise<Clearance> {
    const response = await restApi.getLiability(idNumber);
    return response.data
  }

  async updateClearance(id: string, payload: Clearance): Promise<Clearance> {
    const response = await restApi.updateClearance(id,payload)
    return response.data
  }
}

let clearanceService = new ClearanceService();
export default clearanceService;
