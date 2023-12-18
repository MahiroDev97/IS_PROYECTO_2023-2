import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
<<<<<<< HEAD
=======
import 
>>>>>>> 7f16cf1155fca65e385ff63d0287e34436a8decf

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        type="email"
        {...register('email', { required: true })}
      />
      <input
        type="password"
        name="password"
        {...register('password', { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
