import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api/axios";
import { login } from "../api/users";
import { setCookie } from "../libs/cookies";


interface IForm {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IForm>({ reValidateMode: "onSubmit" });

  const createEventsMutation = useMutation(login, {
    onSuccess: (data) => {
      const token = data.result.token;
      const expires = new Date();
      expires.setHours(expires.getHours() + 24);

      setCookie('x-jwt', token, { expires });
      toast('Hello, Welcome!',{icon: '😎'});
      instance.defaults.headers['x-jwt'] = token;

      setTimeout(() => {
        navigate('/');
      }, 1500);      
    },
    onError: (error: any, context) => {
      const errorContext = error.response.data.error;
      toast.error(errorContext);
    }
  });

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    createEventsMutation.mutate(data);
  }

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h3>ADMIN.</h3>
        <h6>Enter your email and password :D</h6>

        <form onSubmit={handleSubmit(onSubmit)}>
          <dl>
            <dt>Email</dt>
            <dd>
              <input
                type="text"
                autoComplete="off"
                placeholder="mement@gmail.com"
                {...register("email",
                  { required: "Email is a required field." }
                )} />

              {errors.email && <p>{errors.email?.message}</p>}
            </dd>

            <dt>Password</dt>
            <dd>
              <input
                type="password"
                placeholder="password"
                {...register("password",
                  { required: "Password is a required field." }
                )} />

              {errors.password && <p>{errors.password?.message}</p>}
            </dd>
          </dl>

          <button type="submit" className={isValid ? 'active' : ''}>Login</button>
        </form>

        <Link to={'/'}>Did you forget your password?</Link>
      </div>
      <Toaster />
    </div>
  );
}
