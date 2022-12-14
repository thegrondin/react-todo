import React from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import AuthService from "../api/AuthService";

import * as S from './styles';
import useAuth from "../use/useAuth";
import useUser from "../../user/use/useUser";
import {AuthActionCard} from "./styles";
import {Link} from "react-router-dom";
import {AuthActions} from "../../../containers/Auth";

function Login({setAction}: any) {

    const {actions: {setAuthenticated}} : any = useAuth();
    const {actions: {setUser}} : any = useUser();

    const onFinish = async (values: any) => {
        const user = await AuthService.login(values.username, values.password)
        setAuthenticated(!!user)
        setUser(user)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <S.AuthActionCard title="Login" style={{ width: 500 }}>
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

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                <Button onClick={() => setAction(AuthActions.REGISTER)}>Register</Button>
            </Form>
        </S.AuthActionCard>
    );
}


export default Login;