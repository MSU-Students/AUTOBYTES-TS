import Papa from 'papaparse';
import { Students } from './rest-api';
import attendanceService from './attendance.service'
import studentsService from './students.service';
import IClearance from 'src/interfaces/clearance.interface';
import IAttendance from 'src/interfaces/attendance.interface';


class HelperService {
  async uploadMasterlist(file: File): Promise<any> {
    const name = file.name.split('.').find(e => e == 'csv' || e == 'json');
    const type = typeof name === 'string' ? name : '';
    if (type.toLowerCase() == 'csv') {
      return new Promise(resolve => {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: async function (results) {
            const newStructure: Students[] = results.data.map((i: any) => {
              return {
                studentName: String(i.studentName),
                idNumber: String(i.idNumber),
                gender: String(i.gender),
                address: String(i.address),
                level: String(i.level),
                acadAdviser: String(i.acadAdviser),
                course: String(i.course),
              }
            })
            resolve(newStructure);
          }
        });
      });
    } else if (type.toLowerCase() == 'json') {
    } else {
      return [];
    }
  }


  async uploadCSV(payload: any): Promise<any> {
    const name = payload.file.name.split('.').find((e: any) => e == 'csv' || e == 'json');
    const type = typeof name === 'string' ? name : '';
    if (type.toLowerCase() == 'csv') {
      return new Promise(resolve => {
        Papa.parse(payload.file, {
          header: true,
          skipEmptyLines: true,
          complete: async function (results) {
            const newStructure: IAttendance[] = results.data
              .filter((i: any) => (i.lastName && i.firstName)).map((i: any) => {
                return {
                  lastName: String(i.lastName),
                  firstName: String(i.firstName),
                  date: String(payload.date),
                  eventName: String(payload.eventName),
                  amount: String(payload.amount),
                  semester: String(payload.semester)
                }
              })
            await attendanceService.addAttendance(
              newStructure
            );
            resolve(newStructure);
          }
        });
      });
    } else if (type.toLowerCase() == 'json') {

    } else {
      return [];
    }
  }
}

const helperService = new HelperService();
export default helperService;
