export interface AUser {
    id?: string;
    fullName: string;
    userName: string;
    userType: string
  } 
  export interface IAuthState {
    currentUser?: AUser;
  }
  
  function state(): IAuthState {
    return {
      currentUser: undefined
    };
  }
  
  export default state;