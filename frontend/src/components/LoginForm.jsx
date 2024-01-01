import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../services/auth.service";
import "../styles/LoginStyles.css";

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then((roles) => {
      const isAdmin = roles.some((role) => role.name === "admin");
      if (isAdmin) {
        navigate("/admin");
        return;
      }
      navigate("/");
    });
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     name="email"
    //     type="email"
    //     {...register('email', { required: true })}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     {...register('password', { required: true })}
    //   />
    //   {errors.exampleRequired && <span>This field is required</span>}
    //   <input type="submit" />
    // </form>

    <div className="loginBox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Iniciar Sesion</h2>

        <label htmlFor="uname">
          {" "}
          <b>Email</b>{" "}
        </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="correo@mail.com"
          {...register("email", { required: true })}
        />

        <br />

        <label htmlFor="psw">
          {" "}
          <b>Contraseña</b>{" "}
        </label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="contraseña"
          {...register("password", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <br />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
