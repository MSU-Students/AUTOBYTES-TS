
import IArchived from "src/interfaces/archive.interface"
export interface ArchivedStateInterface {
    createArchived: IArchived[];
    archived: IArchived[];
}

function state(): ArchivedStateInterface {
    return {
        archived: [],
        createArchived: []
    };
}

export default state;
