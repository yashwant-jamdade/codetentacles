import API from "../API/API";
import endpoints from "../API/endpoints";

class UserServices {
  static getUser(user) {
    return API.post(endpoints.api.endpoints.login, user);
  }

  static getUserList() {
    return API.get(endpoints.api.endpoints.userList);
  }

  static deleteUser(id) {
    return API.get(endpoints.api.endpoints.deleteUser + id);
  }

  static getCountryList() {
    return API.get(endpoints.api.endpoints.countryList);
  }

  static getStateList(id) {
    return API.get(endpoints.api.endpoints.stateList + id);
  }

  static createUser(user) {
    return API.post(endpoints.api.endpoints.createUser, user);
  }
}
export default UserServices;
