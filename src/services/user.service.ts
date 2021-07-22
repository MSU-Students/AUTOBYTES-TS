import { User } from "./rest-api";
import { restApi } from "./rest-api.service";
class UserService {
  async getUsers(): Promise<User> {
    const response = await restApi.getUsers();
    return response.data;
  }

  async addUsers(payload: User): Promise<User> {
    const response = await restApi.addUser(payload);
    return response.data;
  }
}

let userService = new UserService();
export default userService;
