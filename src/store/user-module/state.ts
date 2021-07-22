import { User } from "src/services/rest-api";

export interface UserStateInterface {
    createUser: User[];
    users: User[];
}

function state(): UserStateInterface {
    return {
        users: [],
        createUser: []
    };
}

export default state;
