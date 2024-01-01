import { Outlet, json } from 'react-router-dom';
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

  const { user, isAdmin, isUser} = useAuth();


  return (
    <div>
      <div>
        <h1>Aqui deberia ir un header</h1>
        <p>Estas logeado como: {user.email}</p>
        <button onClick={() => navigate('/')}>Home</button>
        {isAdmin && <button onClick={() => navigate('/admin/postulaciones')}>Admin Postulaciones</button>}
        {isUser && <button onClick={() => navigate('/postular')}>Postular</button>}
        {isUser && <button onClick={() => navigate('/mispostulaciones')}>Mis Postulaciones</button>}
        <button onClick={handleLogout}>Cerrar sesion</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
