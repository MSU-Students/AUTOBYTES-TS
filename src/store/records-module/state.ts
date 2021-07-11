
export interface RecordsStateInterface {
    createRecords: { [key: string]: any }[];
    records: { [key: string]: string }[];
}

function state(): RecordsStateInterface {
    return {
        records: [],
        createRecords: []
    };
}

export default state;
