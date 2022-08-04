import {useEffect, useState} from 'react';
import AuthContext from "../context/AuthContext";


const checkAuth = () => {
    return !!localStorage.getItem('auth_bearer');
}

function AuthProvider({ children } : any) {

    const [authenticated, setAuthenticated] = useState(checkAuth());

    useEffect(() => {
        setAuthenticated(checkAuth());
    }, [setAuthenticated]);


    const value = {
        state: { authenticated },
        actions: { setAuthenticated },
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider