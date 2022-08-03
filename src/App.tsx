import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Todo from "./containers/Todo";
import User from "./containers/User";

import {Layout, Menu, Breadcrumb, Switch} from "antd";
import Auth from "./containers/Auth";
import PrivateRoute from "./components/PrivateRouge";
import {isAuthenticated} from "./api/utils";
import PublicRoute from "./components/PublicRoute";

const { Header, Content, Footer } = Layout;

function App() {

    const evaluateIsAuthenticated = () => {
        isAuthenticated().then((res) => {
            return setAuthenticated(res);
        });
    }

    const [authenticated, setAuthenticated] = React.useState(false);
    useEffect(() => {
        evaluateIsAuthenticated();
    }, [authenticated]);

    evaluateIsAuthenticated();

    return (
        <BrowserRouter>
            <Layout className="layout" style={{ minHeight: "100vh" }}>
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
                        <Route path="/" element={<PrivateRoute redirect="/auth" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated}><Todo /></PrivateRoute>} />
                        <Route  path="user" element={<PrivateRoute redirect="/auth" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated} ><User /></PrivateRoute>} />
                        <Route path="/auth" element={<PublicRoute redirect="/" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated}><Auth /></PublicRoute>} />
                    </Routes>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Thomas Dion-Grondin ©2022 Tous droits réservés</Footer>
            </Layout>
        </BrowserRouter>
    )

}

export default App;


