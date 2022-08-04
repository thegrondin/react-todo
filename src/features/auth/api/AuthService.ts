import {client} from "../../../api/utils";
import {User} from "../../user/api/UserService";

const login = async (email: string, password: string) : Promise<User> => {
    const response = await client('api/auth/local', {
        body: {
            identifier : email,
            password: password,
        }
    })

    if (response && response.jwt) {
        window.localStorage.setItem("auth_bearer", response.jwt)
    }

    return response.user as User
}

const register = async (email: string, password: string) => {

}


const AuthService = {
    login,
    register,
}

export default AuthService
