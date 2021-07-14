
export interface RecordsStateInterface {
    createRecords: { [key: string]: any }[];
    records: { [key: string]: string }[];
    types: string[];
}

function state(): RecordsStateInterface {
    return {
        records: [],
        createRecords: [],
        types: []
    };
}

export default state;
