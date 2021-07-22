import { Students } from "./rest-api";
import { restApi } from "./rest-api.service";

class StudentsService {
  async getStudents(): Promise<Students[]> {
    const response = await restApi.getStudents();
    return response.data;
  }

  async addStudents(payload: Students[]): Promise<Students[]> {
    const response: any = await restApi.addStudents(payload);
    return response.data;
  }
}

let studentsService = new StudentsService();
export default studentsService;
