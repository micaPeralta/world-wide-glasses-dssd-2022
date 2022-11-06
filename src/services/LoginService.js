import {GenericService} from "./GenericService";
import {API_ROOT} from "../helpers/Routes";

export class AuthService extends GenericService {

    static localPath = API_ROOT + "/Authentication"

    static login = (loginData) => {
        return this.post(this.localPath + "/login", loginData);
    }

    static logout = () => {
        return this.post(this.localPath + "/logout");
    }
}