import {GenericService} from "./GenericService";

export class AuthService extends GenericService{

    static localPath =  "/Authentication"

    static login = (loginData) => {
        return this.post(this.localPath + "/login", loginData);
    }

    static logout = () => {
        return this.post(this.localPath + "/logout");
    }
}