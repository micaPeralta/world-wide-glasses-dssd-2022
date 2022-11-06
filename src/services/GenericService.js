import {API_ROOT} from "../helpers/Routes";

export interface res  {
    response: Response,
    data: any
}
export class GenericService {

     static baseUrl: string = API_ROOT;
     static init: {
         credentials: "include"
     }

     static get = (path: string)  => {
         return fetch(this.baseUrl + path, {...this.init})
     }

     static getJson = (path: string) => {
         return GenericService.get(path).then(response => response.clone().json())
     }

     static post = (path: string, data) => {
         return(
             fetch(this.baseUrl + path, {
                 ...this.init,
                 method: "POST",
                 body: JSON.stringify(data),
                 headers: {
                     'Content-Type': 'application/json',
                 }
             })
         )
     }

    static postJson = (path: string, data) => {
        return(
            fetch(this.baseUrl + path, {
                ...this.init,
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.clone().json())
        )
    }
}