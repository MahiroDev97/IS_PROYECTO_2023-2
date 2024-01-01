import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import "../styles/LoginStyles.css";

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem("user")) {
    return (
      <>
        <h2>Ya estas logeado!</h2>
        <button onClick={() => navigate("/")}>Ir a home</button>
      </>
    );
  }

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
}

export default Login;
