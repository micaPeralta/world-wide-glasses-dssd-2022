import Cookies from "universal-cookie";

export class CookieUtils {

    static globalCookie = new Cookies();

    static P_TOKEN = 'provider-token';
    static B_GROUP_ID = 'group-id';
    static B_TOKEN = 'api-token';
    static B_SESSION_ID = 'session-id';


    static set(key: string, value: string) {
        this.globalCookie.set(key, value, {path: '/'})
    }

    static get(key: string): string {
        return this.globalCookie.get(key)
    }

    static remove(key: string): string {
        this.globalCookie.remove(key, {path: '/'})
    }
}