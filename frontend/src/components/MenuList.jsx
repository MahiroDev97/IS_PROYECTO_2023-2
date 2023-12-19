import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, FilePdfOutlined, UserOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const { Sider } = Layout;

function MenuList() {
    const { user } = useAuth();
    const Navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const handleLogout = () => {
        if (window.confirm("¿Estás seguro de que quieres cerrar la sesión?")) {
            logout();
            Navigate('/auth');
        }
    };

    return (
        <Sider style={{ height: '100vh' }} collapsible collapsed={collapsed} onCollapse={setCollapsed} collapsedWidth={80}>
            <Menu theme="dark">
                <Menu.Item key="inicio" icon={<HomeOutlined />}onClick={() => Navigate('/')}>Inicio</Menu.Item>
                <Menu.Item key="postular" icon={<FilePdfOutlined />} onClick={() => Navigate('/postular')}>Postular</Menu.Item>
                <Menu.Item key="mispostulaciones" icon={<UserOutlined />} onClick={() => Navigate('/postulaciones')}>Mis Postulaciones</Menu.Item>
                <Menu.Item key="salir" icon={<LogoutOutlined />} onClick={handleLogout}>Cerrar Sesion</Menu.Item>
                <Menu.Item key="user" icon={<UserOutlined />} style={{ background: 'none', color: 'inherit', cursor: 'pointer' }}>{user.email}</Menu.Item>
            </Menu>
        </Sider>
    );
};

export default MenuList;