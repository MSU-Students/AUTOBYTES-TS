import { Attendance } from "./rest-api";
import { restApi } from "./rest-api.service";

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
