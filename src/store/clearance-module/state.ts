
export interface ClearanceStateInterface {
    createClearance: { [key: string]: any }[];
    clearance: { [key: string]: string }[];
}

function state(): ClearanceStateInterface {
    return {
        clearance: [],
        createClearance: []
    };
}

export default state;
