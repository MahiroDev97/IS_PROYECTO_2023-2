import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';

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
    logout();
    navigate('/auth');
  };

  const { user, isAdmin } = useAuth();

  return (
    <div>
      <div>
        <h1>Aqui deberia ir un header</h1>
        <p>Estas logeado como: {user.email}</p>
        <button onClick={handleLogout}>Cerrar sesion</button>
        {isAdmin && <button onClick={() => navigate('/admin/postulaciones')}>Admin Postulaciones</button>}
        <button onClick={() => navigate('/admin')}>Admin</button>
        
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
