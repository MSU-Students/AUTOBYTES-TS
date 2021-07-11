
export interface BulletinStateInterface {
    createBulletin: { [key: string]: any }[];
    bulletin: { [key: string]: string }[];
}

function state(): BulletinStateInterface {
    return {
        bulletin: [],
        createBulletin: []
    };
}

export default state;
