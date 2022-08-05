import react from 'react';
import * as S from './styles';
import UserCard from "./UserCard";
import {Button, Card, Divider, Typography} from "antd";

const {Text} = Typography;


function UserInfos() {
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
                    <Button>Logout</Button>
                </S.ActionItem>
            </S.ActionCard>
        </div>
    )
}

export default UserInfos;