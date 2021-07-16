
export interface MediaStateInterface {
    createMedia: { [key: string]: any }[];
    media: { [key: string]: any }[];
}

function state(): MediaStateInterface {
    return {
        media: [],
        createMedia: [],
    };
}

export default state;
