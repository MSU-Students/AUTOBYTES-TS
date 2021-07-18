import IBulletin from "src/interfaces/bulletin.interface";

export interface BulletinStateInterface {
    createBulletin: IBulletin[];
    bulletins: IBulletin[];
    // getBulletin: IBulletin;
}

function state(): BulletinStateInterface {
    return {
        // getBulletin: {
        //     title: '',
        //     date: '',
        //     bulletinFrom: '',
        //     bulletinSemester: '',
        //     bulletinType: '',
        //     url: '',
        // },
        bulletins: [],
        createBulletin: []
    };
}

export default state;
