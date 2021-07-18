import { DefaultApi, Configuration, Students } from "./rest-api";

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
