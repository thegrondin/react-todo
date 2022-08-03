import {client} from "../../../api/utils";

interface User {
    id: string;
    blocked: boolean;
    createdAt: Date;
    email: string;
    provider: string;
    updatedAt: Date;
    username: string;
}

const getCurrentUser = async () : Promise<User | null> => {

    const response = await client(`api/users/me`)

    if (response && response.id) {
        return response as User
    }

    return null
}


const UserService = {
    getCurrentUser,
}

export default UserService
export type {User}