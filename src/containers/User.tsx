import React from 'react';
import {Divider, List} from "antd";
import Login from "../features/auth/components/Login";
import UserInfos from "../features/user/components/UserInfos";


function User() {
    return (
        <div>
            <UserInfos />
        </div>
    );
}

export default User;