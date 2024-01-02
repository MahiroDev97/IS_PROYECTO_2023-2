import { Outlet, json, Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import { AuthProvider, useAuth } from "../context/AuthContext";
import "../styles/NavBar.css";
import { toast, ToastContainer } from "react-toastify";

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
      <ToastContainer />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const { user, isAdmin, isUser } = useAuth();

  return (
    <>
      <nav>
        {isUser && (
          <Link to="/" className="title">
            Inicio
          </Link>
        )}
        {isAdmin && (
          <Link to="/admin" className="title">
            Inicio
          </Link>
        )}
        <ul>
          <li>{isUser && <NavLink to="/postular">Postular</NavLink>}</li>

          <li>
            {isAdmin && (
              <NavLink to="/admin/postulaciones">Evaluar Postulaciones</NavLink>
            )}
          </li>
          <li>
            {isUser && (
              <NavLink to="/mispostulaciones">Mis Postulaciones</NavLink>
            )}
          </li>
          <li>
            {isUser && <NavLink to="/crearempresa">Registrar Empresa</NavLink>}
          </li>
          <li>{isUser && <NavLink to="/misempresas">Mis Empresas</NavLink>}</li>
          <li>
            <Link onClick={handleLogout}>Cerrar Sesión</Link>
          </li>
          <li>
            <p>{user.email}</p>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

    // <div>
    //   <div>
    //     <h1>Aqui deberia ir un header</h1>
    //     <p>Estas logeado como: {user.email}</p>
    //     <button onClick={() => navigate('/')}>Home</button>
    //     {isAdmin && <button onClick={() => navigate('/admin/postulaciones')}>Admin Postulaciones</button>}
    //     {isUser && <button onClick={() => navigate('/postular')}>Postular</button>}
    //     {isUser && <button onClick={() => navigate('/mispostulaciones')}>Mis Postulaciones</button>}
    //     <button onClick={handleLogout}>Cerrar sesion</button>
    //   </div>
    //   <Outlet />
    // </div>
  );
}

export default Root;
