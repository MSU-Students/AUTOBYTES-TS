
export interface StudentStateInterface {
    createStudent: { [key: string]: any }[];
    students: { [key: string]: string }[];
}

function state(): StudentStateInterface {
    return {
        students: [],
        createStudent: []
    };
}

export default state;
