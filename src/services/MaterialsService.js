import {GenericService} from "./GenericService";
import {CookieUtils} from "../helpers/CookieUtils";
import {PROVIDER_ROOT} from "../helpers/Routes";

export class MaterialsService extends GenericService {

    // static localPath = PROVIDER_ROOT_DEV
    static localPath = PROVIDER_ROOT

    static getMaterials = () => {
        console.log("token ", CookieUtils.P_TOKEN, CookieUtils.get(CookieUtils.P_TOKEN))
        return this.getJson(this.localPath + "/materials", {"Authorization": CookieUtils.get(CookieUtils.P_TOKEN)});
    }
}