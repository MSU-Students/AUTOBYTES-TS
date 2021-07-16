import { DefaultApi, Configuration, Attendance } from "./rest-api";

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

class AttendanceService {
  async getAttendance(): Promise<Attendance[]> {
    const response = await restApi.getAttendances();
    return response.data;
  }

  async addAttendance(payload: Attendance[]): Promise<Attendance[]> {
    const response = await restApi.addAttendances(payload);
    return response.data;
  }
}

let attendanceService = new AttendanceService();
export default attendanceService;
