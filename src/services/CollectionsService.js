import {GenericService} from "./GenericService";

export class CollectionsService extends GenericService{

    static localPath =  "/Collection"

    static getCollections = () => {
        return this.getJson(this.localPath + "/getAll");
    }

    static createCollection = (collection) => {
        return this.post(this.localPath, collection)
    }
}

