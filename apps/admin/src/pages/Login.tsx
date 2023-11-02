import { Button, Card, Input, LayoutFull } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostLogin } from "../api/auth/authentication";
import { IAuthenticationRequestDto } from "../api/auth/types";
import { setToken } from "../util";

interface FormState extends IAuthenticationRequestDto { }

const Login = () => {
  const navigate = useNavigate();
  const methods = useForm<FormState>();
  const postLogin = usePostLogin();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    const result = await postLogin.mutateAsync(data);
    // console.log(result.data.result.token);

    setToken({accessToken: result.data.result.token});
    window.location.reload();
  };

  return (
    <LayoutFull className={["ui__align-center", "bg-color-D70"]}>
      <Card className={["w500",]}>
        {/* <Card.Header>로그인</Card.Header> */}
        <Card.Header title="로그인" subtitle="로그인 페이지 입니다." />

        <Card.SubHeader>
          이메일과 비밀번호를 입력해주세요. 서브 헤더 부분입니다.
        </Card.SubHeader>

        <Card.Content>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {/* <input {...methods.register("email")} /> */}

              <Input
                label="email"
                type="email"
                value="email"
                registerOption={{ required: "please enter your email" }} />

              <Input
                className={["mt-10"]}
                label="password"
                type="password"
                value="password"
                registerOption={{
                  required: "please enter your password",
                  minLength: { value: 4, message: "Password must be at least 6 characters long  " }
                }} />

              <Button
                type="submit"
                className={["mt-10"]}
                label="login"
                size="large"
                primary
                fluid />
            </form>
          </FormProvider>
        </Card.Content>
      </Card>
    </LayoutFull>
  )
};

export default Login;