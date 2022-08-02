import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Todo from "./containers/Todo";
import User from "./containers/User";

import {Layout, Menu, Breadcrumb} from "antd";

const { Header, Content, Footer } = Layout;

function App() {

    return (
        <BrowserRouter>
            <Layout className="layout" >
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal">
                        <Menu.Item key="todo"><Link to="/">todo</Link></Menu.Item>
                        <Menu.Item key="user"><Link to="/user">user</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', width:"60%", marginLeft: "auto", marginRight : "auto"}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Routes>
                        <Route path="/" element={<Todo />} />
                        <Route path="user" element={<User />} />
                    </Routes>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Thomas Dion-Grondin ©2022 Tout droits réservés</Footer>
            </Layout>
        </BrowserRouter>
    )

}

export default App;


