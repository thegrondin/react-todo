import React from 'react';
import Login from "../features/auth/components/Login";
import * as S from './styles';
import useAuth from "../features/auth/use/useAuth";
import {Navigate} from "react-router-dom";

function Auth() {

    const {state: {authenticated}} : any = useAuth();

    return (
        <S.Container>
            {authenticated ? <Navigate to="/" /> : <Login />}
        </S.Container>
    );
}


export default Auth;