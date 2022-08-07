import {API_URL} from "../config";
import UserService from "../features/user/api/UserService";

export const isAuthenticated = async () => {
    return await UserService.getCurrentUser() !== null;
}

export const client = async (
    endpoint : string,
    {body, ...customConfig} : any = {},
    baseUrl : boolean = true) => {
    const token = window.localStorage.getItem("auth_bearer")
    const headers = {'Content-Type': 'application/json'} as any
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    if (!customConfig.method) {
        customConfig.method = body ? 'POST' : 'GET'
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }
    if (body) {
        config.body = JSON.stringify(body)
    }

    const url = baseUrl ? `${API_URL}/${endpoint}` : endpoint

    return window
        .fetch(url, config)
        .then(async response => {
                return await response.json()
        })
}