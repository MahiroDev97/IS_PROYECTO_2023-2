import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import '../login.scss';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Login() {
  const navigate = useNavigate();

  if (localStorage.getItem('user')) {
    return (
      <>
        <h2>Ya estas logeado!</h2>
        <button onClick={() => navigate('/')}>Ir a home</button>
      </>
    );
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <div className="App">
        <div className="container">
          <div className="card_area">
            <h1 className="container_title">Postulaciones Patentes Comerciales</h1>
            <p className="container_para">Choose one of the option to go</p>
            <div className="input_card">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className="card_button">
              <button class="button-28">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Login;
