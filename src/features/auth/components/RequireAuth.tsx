import React, {useEffect} from 'react'
import useAuth from "../use/useAuth";
import {Navigate} from "react-router-dom";


function RequireAuth({ children } : any) {
    const {state: {authenticated}} : any = useAuth();

    return (
        authenticated ? children : <Navigate to="/auth" />
    )
}

export default RequireAuth