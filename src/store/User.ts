import { makeAutoObservable } from "mobx";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

class User {
  user: IUser = { firstName: "", lastName: "", email: "", status: "" };

  constructor() {
    makeAutoObservable(this);
  }

  auth = (jwt: string) => {
    const { data } = jwt_decode(jwt) as any;
    this.user = {
      firstName: data.firstName,
      lastName: data.lastName,
      status: data.status,
      email: data.email,
    };
  };

  isAuth() {
    if (this.user.status) return true;

    const jwt = Cookies.get("jwt");
    if (jwt) {
      this.auth(jwt);
      return true;
    }
    return false;
  }
}

const UserInstance = new User();

export default UserInstance;
