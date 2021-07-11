import { DefaultApi, Configuration, User } from "./rest-api";

const dev = "http://localhost:3000";

const restConfig = new Configuration({
  basePath: dev,
  baseOptions: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

const restApi = new DefaultApi(restConfig);

class UserService {
  async getUser(): Promise<User> {
    const response = await restApi.getUsers();
    return response.data;
  }

  async addUser(payload: User): Promise<User> {
    const response = await restApi.addUser(payload);
    return response.data;
  }
}

let userService = new UserService();
export default userService;
