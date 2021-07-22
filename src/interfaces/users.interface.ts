export default interface IUser {
    userName: string;
    password?: string;
    firstName: string;
    lastName: string;
    idNumber: string;
    disabled?: boolean;
    refreshToken?: string;
    userType: string;
}