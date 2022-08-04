import {client} from "../../../api/utils";

interface User {
    id: string;
    blocked: boolean;
    createdAt: Date;
    email: string;
    provider: string;
    updatedAt: Date;
    username: string;
    firstname : string;
    lastname : string;
    avatar : string;
}

const getCurrentUser = async () : Promise<User | null> => {

    const response = await client(`api/users/me?populate=%2A`)
    console.log("response", response)

    if (response && response.id) {
        response.avatar = response.avatar.url
        return response as User
    }

    return null
}


const UserService = {
    getCurrentUser,
}

export default UserService
export type {User}