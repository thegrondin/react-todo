import React from 'react';
import {Button, Card, Checkbox, Form, Input} from "antd";
import AuthService from "../api/AuthService";
import UserService from "../../user/api/UserService";

import * as S from './styles';
import useAuth from "../use/useAuth";

function Login() {

    const {state: {authenticated}, actions: {setAuthenticated}} : any = useAuth();

    const onFinish = async (values: any) => {
        const user = await AuthService.login(values.username, values.password)
        setAuthenticated(!!user)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <S.LoginCard title="Login" style={{ width: 500 }}>
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
            </Form>
        </S.LoginCard>
    );
}


export default Login;