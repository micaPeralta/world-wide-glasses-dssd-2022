export interface res {
    response: Response,
    data: any
}

export class GenericService {

    static init: {
        credentials: "include"
    }

    static get = (path: string, headers?) => {
        return fetch(path, {
            ...this.init, headers: {...headers}
        })
    }

    static getJson = (path: string, headers?) => {
        return GenericService.get(path, headers).then(response => response.clone().json())
    }

    static post = (path: string, data) => {
        return (
            fetch(path, {
                ...this.init,
                method: "POST",
                body: JSON.stringify(data || {}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        )
    }

    static postJson = (path: string, data) => {
        return (
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