import { Button, Card, Input, LayoutFull, Text } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { usePostLogin } from "../api/auth/authentication";
import { IAuthenticationRequestDto } from "../api/auth/types";
import { setToken } from "../util";

interface FormState extends IAuthenticationRequestDto { }

const Login = () => {
  const methods = useForm<FormState>();
  const postLogin = usePostLogin();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    const result = await postLogin.mutateAsync(data);
    // console.log(result.data.result.token);

    setToken({accessToken: result.data.result.token});
    window.location.reload();
  };

  return (
    <LayoutFull className={["ui__align-center"]}>
      <Card className={["w-350", "border-none"]}>
        <Card.Header
          title="Mement Admin Login"
          subtitle="Welcome!👋 Mement integrated admin. Please enter your information to access the service."
          className={["align-center"]}/>

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
   
              <Text size="tiny" skin="disabled" className={["mt-10"]}>
                If you are unable to log in or wish to create an account, please contact the administrator. Thank you :)
              </Text>

              <Button
                type="submit"
                className={["mt-20"]}
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