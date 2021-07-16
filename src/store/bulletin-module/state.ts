import IBulletin from "src/interfaces/bulletin.interface";

export interface BulletinStateInterface {
    createBulletin: IBulletin[];
    bulletins: IBulletin[];
}

function state(): BulletinStateInterface {
    return {
        bulletins: [],
        createBulletin: []
    };
}

export default state;
