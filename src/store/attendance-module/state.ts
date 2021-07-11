
export interface AttendanceStateInterface {
    createAttendance: { [key: string]: any }[];
    attendance: { [key: string]: string }[];
}

function state(): AttendanceStateInterface {
    return {
        attendance: [],
        createAttendance: []
    };
}

export default state;
