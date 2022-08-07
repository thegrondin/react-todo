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

const register = async (user : User, password : string) => {
    const response = await client('api/auth/local/register', {
        body: {
            username : user.username,
            password: password,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
        }
    })

    if (response && response.jwt) {
        window.localStorage.setItem("auth_bearer", response.jwt)
    }

    return response.user as User
}


const AuthService = {
    login,
    register,
}

export default AuthService
