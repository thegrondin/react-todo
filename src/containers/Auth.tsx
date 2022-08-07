import React from 'react';
import Login from "../features/auth/components/Login";
import * as S from './styles';
import useAuth from "../features/auth/use/useAuth";
import {Navigate} from "react-router-dom";
import Register from "../features/auth/components/Register";

export enum AuthActions {
    LOGIN = 'login',
    REGISTER = 'register'
}

function Auth() {

    const {state: {authenticated}} : any = useAuth();

    const [action, setAction] = React.useState(AuthActions.LOGIN);

    return (
        <S.Container>
            {
                authenticated ? <Navigate to="/" /> :
                action === AuthActions.LOGIN ?
                    <Login setAction={setAction} /> :
                    <Register setAction={setAction} />
            }
        </S.Container>
    );
}


export default Auth;