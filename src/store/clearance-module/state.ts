import IClearance from "src/interfaces/clearance.interface";

export interface ClearanceStateInterface {
    createClearance: IClearance[];
    clearance: IClearance[];
}

function state(): ClearanceStateInterface {
    return {
        clearance: [],
        createClearance: []
    };
}

export default state;
