import Papa from 'papaparse';
import { User } from './rest-api';
import userService from './user.service';


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
          complete: async function(results) {
            console.log(results)
            const newStructure: User[] = results.data
              .filter((i:any) => (i.studentName && i.id)).map((i: any) => {
                return {
                    studentName: String(i.studentName),
                    id: String(i.id),
                    gender: String(i.gender),
                    address: String(i.address),
                    level: String(i.level),
                    acadAdviser: String(i.acadAdviser),
                    course: String(i.course)
                }  
            })
            console.log(newStructure);
            const res = await userService.addUsers(
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
