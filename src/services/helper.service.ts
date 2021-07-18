import Papa from 'papaparse';
import { Students } from './rest-api';
import attendanceService from './attendance.service'
import studentsService from './students.service';


class HelperService {
  async uploadContacts(file: File): Promise<any> {
    const name = file.name.split('.').find(e => e == 'csv' || e == 'json');
    const type = typeof name === 'string' ? name : '';
    if (type.toLowerCase() == 'csv') {
      return new Promise(resolve => {
        console.log(file);
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: async function (results) {
            const newStructure: Students[] = results.data
              .filter((i: any) => (i.studentName && i.id)).map((i: any) => {
                return {
                  studentName: String(i.studentName),
                  idNumber: String(i.idNumber),
                  gender: String(i.gender),
                  address: String(i.address),
                  level: String(i.level),
                  acadAdviser: String(i.acadAdviser),
                  course: String(i.course)
                }
              })
            const res = await studentsService.addStudents(
              newStructure
            );

            resolve(newStructure);
          }
        });
      });
    } else if (type.toLowerCase() == 'json') {
      console.log('this is ', type);
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
            const newStructure: any = results.data
              .filter((i: any) => (i.lastName && i.firstName)).map((i: any) => {
                return {
                  lastName: String(i.lastName),
                  firstName: String(i.firstName),
                  date: String(payload.date),
                  eventName: String(payload.eventName),
                  amount: String(payload.amount)
                }
              })
            const res = await attendanceService.addAttendance(
              newStructure
            );

            resolve(newStructure);
          }
        });
      });
    } else if (type.toLowerCase() == 'json') {
      console.log('this is ', type);
    } else {
      return [];
    }
  }
}

const helperService = new HelperService();
export default helperService;
