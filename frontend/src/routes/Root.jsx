import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
//import "/styles/root.css";

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar la sesión?")) {
      logout();
      navigate('/auth');
    }
  };

  const { user } = useAuth();

  return (
    <div>
      <div>
      <Sidebar className='sidebar'>
        <Menu theme ="dark" className='menu'>

          <MenuItem className='menu-item'> Información </MenuItem>
          <MenuItem> Postular </MenuItem>
          <MenuItem> Mis Postulaciones </MenuItem>
          <MenuItem onClick={handleLogout}> Cerrar Sesion </MenuItem>
        </Menu>
      </Sidebar>
        <p>Estas logeado como: {user.email}</p>
        <button onClick={handleLogout}>Cerrar sesion</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;