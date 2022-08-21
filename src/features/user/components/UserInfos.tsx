import react from 'react';
import * as S from './styles';
import UserCard from "./UserCard";
import {Button, Card, Divider, Typography} from "antd";
import AuthService from "../../auth/api/AuthService";

const {Text} = Typography;


function UserInfos() {

    const handleLogout = async (e: any) => {
        await AuthService.logout()

        window.location.href = "/"
    }

    return (
        <div style={{display : 'flex'}}>
            <UserCard title={true}/>
            <S.ActionCard title="Actions" >
                <S.ActionItem>
                    <Text>Edit your profile</Text>
                    <Button>Edit</Button>
                </S.ActionItem>
                <Divider/>
                <S.ActionItem>
                    <Text>Change your password</Text>
                    <Button>Change password</Button>
                </S.ActionItem>
                <Divider/>
                <S.ActionItem>
                    <Text>Logout from account</Text>
                    <Button onClick={handleLogout}>Logout</Button>
                </S.ActionItem>
            </S.ActionCard>
        </div>
    )
}

export default UserInfos;