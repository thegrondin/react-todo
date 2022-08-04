import {useEffect, useState} from 'react';
import UserContext from "../context/UserContext";
import {User} from "../api/UserService";

function AuthProvider({ children } : any) {

    const [user, setUser] = useState({} as User);

    const value = {
        state: { user },
        actions: { setUser },
    };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthProvider