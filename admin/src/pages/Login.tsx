import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
  const { register, handleSubmit, reset } = useForm<IForm>();

  const createEventsMutation = useMutation(login, {
    onSuccess: (data, variables) => {
      const token = data.result.token;
      const expires = new Date();
      expires.setHours(expires.getHours() + 24);

      setCookie('x-jwt', token, { expires });
      instance.defaults.headers['x-jwt'] = token;
      navigate('/');
    },
  });

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    createEventsMutation.mutate(data);
  }

  return (
    <div className="login-wrapper">
      <Toaster />
      <h3>ADMIN.</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          autoComplete="off"
          placeholder="email"
          {...register("email", { required: true })} />

        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
