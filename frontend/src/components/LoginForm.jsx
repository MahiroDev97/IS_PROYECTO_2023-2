import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../login.scss";

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="App">
      <div className="container">
        <div className="card_area">
          <h1 className="container_title">Postulaciones Patentes Comerciales</h1>
          <p className="container_para">Por Favor Inicie Sesión</p>
          <div className="input_card">
            <input
              name="email"
              type="email"
              {...register('email', { required: true })}
              className="input"
            />
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
              className="input"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="card_button">
            <input type="submit" className="button-28" />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default LoginForm;

