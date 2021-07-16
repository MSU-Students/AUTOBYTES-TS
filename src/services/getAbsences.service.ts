import IAttendance from "src/interfaces/attendance.interface"
import IBulletin from "src/interfaces/bulletin.interface"
import IUser from "src/interfaces/user.interface"
import studentService from "src/services/student.service"
import attendanceService from "./attendance.service"
import bulletinService from "./bulletin.service"

class AbsentsServices {
    studentLists: IUser[] = []
    student!: IUser[]
    eventLists: IBulletin[] = []
    events!: IBulletin[]
    attendanceLists: IAttendance[] = []
    attendance!: IAttendance[]

    async getUsers () {
        await studentService.getUsers()
        this.studentLists = this.student
        console.log("check",this.studentLists)
    }

    async getEvents () {
        await bulletinService.getBulletins()
        this.eventLists = this.events
    }

    async getAttendances () {
        await attendanceService.getAttendance()
        this.attendanceLists = this.attendance
    }

    async getAbsences(eventLists: IBulletin, attendanceLists: IAttendance) {
        const dateMatch = eventLists.date
    }
}
const absentsServices = new AbsentsServices
export default absentsServices