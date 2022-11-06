import {GenericService} from "./GenericService";
import {API_ROOT} from "../helpers/Routes";

export class CollectionsService extends GenericService {

    static localPath = API_ROOT + "/Collection"

    static getCollections = () => {
        return this.getJson(this.localPath + "/getAll");
    }

    static createCollection = (collection) => {
        return this.post(this.localPath, collection)
    }
}

