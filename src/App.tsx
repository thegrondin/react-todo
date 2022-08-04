import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Todo from "./containers/Todo";
import User from "./containers/User";

import {Layout, Menu, Breadcrumb, Switch} from "antd";
import Auth from "./containers/Auth";
import RequireAuth from "./features/auth/components/RequireAuth";
import AuthProvider from "./features/auth/provider/AuthProvider";
import useAuth from "./features/auth/use/useAuth";

const { Header, Content, Footer } = Layout;



function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
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
                            <Route path="/" element={<RequireAuth><Todo/></RequireAuth>}/>
                            <Route path="/user" element={<RequireAuth><User/></RequireAuth>}/>
                            <Route path="/auth" element={<Auth/>}/>
                        </Routes>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Thomas Dion-Grondin ©2022 Tous droits réservés</Footer>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    )

}

export default App;

/*

<Route path="/" element={<PrivateRoute redirect="/auth" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated}><Todo /></PrivateRoute>} />
                        <Route path="user" element={<PrivateRoute redirect="/auth" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated} ><User /></PrivateRoute>} />
                        <Route path="/auth" element={<PublicRoute redirect="/" isAuthenticated={authenticated} authRefresh={evaluateIsAuthenticated}><Auth /></PublicRoute>} />

 */
