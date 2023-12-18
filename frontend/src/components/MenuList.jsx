import {Menu} from 'antd';
import {FilePdfOutlined, HomeOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import { logout } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function MenuList() {    
    const { user } = useAuth();
    const Navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("¿Estás seguro de que quieres cerrar la sesión?")) {
            logout();
            Navigate('/auth');
        }
    };

    return (
        <Menu theme="dark">
            <Menu.Item key="inicio" icon={<HomeOutlined />}>Inicio</Menu.Item>
            <Menu.Item key="postular" icon={<FilePdfOutlined />}>Postular</Menu.Item>
            <Menu.Item key="mispostulaciones" icon={<UserOutlined />}>Mis Postulaciones</Menu.Item>
            <Menu.Item key="salir" icon={<LogoutOutlined />} onClick={handleLogout}>Cerrar Sesion</Menu.Item>
            <Menu.Item key="user" icon={<UserOutlined />} style={{ background: 'none', color: 'inherit', cursor: 'pointer' }}>{user.email}</Menu.Item>
        </Menu>
    );
};

export default MenuList;