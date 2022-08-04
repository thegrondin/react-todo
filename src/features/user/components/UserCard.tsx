import * as S from './styles';
import useUser from "../use/useUser";
import { Image, Typography} from "antd";
import {API_URL} from "../../../config";
const { Text } = Typography;


function UserCard() {

    const {state: {user}} : any = useUser();
    return (
        <S.Card style={{ width: 320}}>
            <S.Profile>
                <Image
                    src={API_URL + user.avatar}
                />
                <S.ProfileInfo>
                    <Text>{user.firstname} {user.lastname}</Text>
                    <Text>{user.username}</Text>
                </S.ProfileInfo>
            </S.Profile>
        </S.Card>
    )
}

export default UserCard;