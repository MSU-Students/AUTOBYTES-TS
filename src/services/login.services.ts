import { restApi } from "./rest-api.service";


class LoginService {

  async loginUser(username: string, password: string, userType: string) {
    const response = await restApi.login(username, password, userType);
    if (response.status == 201) {
      localStorage.setItem('access-token', response.data.accessToken || 'none');
      localStorage.setItem('refresh-token', String(response.data.refreshToken));
      return (await restApi.getProfile()).data;
    } else {
      return response;
    }
  }

  async logoutUser () {
    const response = await restApi.logout();
    localStorage.removeItem('access-token');
    return response;
  }
}
let loginService = new LoginService();
export default loginService;