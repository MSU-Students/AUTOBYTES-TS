
export interface StudentStateInterface {
    createStudent: { [key: string]: any }[];
    student: { [key: string]: string }[];
}

function state(): StudentStateInterface {
    return {
        student: [],
        createStudent: []
    };
}

export default state;
