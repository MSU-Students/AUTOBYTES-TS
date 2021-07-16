
export interface AttendanceStateInterface {
    createAttendance: { [key: string]: any }[];
    attendances: { [key: string]: string }[];
}

function state(): AttendanceStateInterface {
    return {
        attendances: [],
        createAttendance: []
    };
}

export default state;
