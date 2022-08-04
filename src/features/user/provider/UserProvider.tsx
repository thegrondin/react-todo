import {useEffect, useState} from 'react';
import UserContext from "../context/UserContext";
import UserService, {User} from "../api/UserService";

function AuthProvider({ children } : any) {

    const [user, setUser] = useState({} as User);

    useEffect(() => {
        UserService.getCurrentUser().then(_user => {
            if (_user) {
                setUser(_user);
            }
        });
    }, [setUser])

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