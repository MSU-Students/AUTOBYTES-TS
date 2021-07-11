
export interface ArchivedStateInterface {
    createArchived: { [key: string]: any }[];
    archived: { [key: string]: string }[];
}

function state(): ArchivedStateInterface {
    return {
        archived: [],
        createArchived: []
    };
}

export default state;
