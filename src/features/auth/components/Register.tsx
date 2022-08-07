import react from 'react';
import * as S from './styles';
import {Form, Input} from "antd";
import AuthService from "../api/AuthService";
import {User} from "../../user/api/UserService";
import useAuth from "../use/useAuth";
import useUser from "../../user/use/useUser";

function Register({setAction}: any) {

    const {actions: {setAuthenticated}} : any = useAuth();
    const {actions: {setUser}} : any = useUser();

    const onFinish = async (values: any) => {

        const newUser = {
            username: values.username,
            lastname: values.lastname,
            firstname: values.firstname,
            email: values.email,
        } as User

        const user = await AuthService.register(newUser, values.password)
        setAuthenticated(!!user)
        setUser(user)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <S.AuthActionCard>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Firstname"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your firstname!' }]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Lastname"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your lastname!' }]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password />
                </Form.Item>
            </Form>
        </S.AuthActionCard>
    );
}


export default Register;