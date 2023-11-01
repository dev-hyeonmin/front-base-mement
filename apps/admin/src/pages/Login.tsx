import { Button, Card, Input, LayoutFull } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const methods = useForm<FormState>();
  const onSubmit: SubmitHandler<FormState> = (data) => console.log(data);

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
                registerOption={{ required: "please enter your password", minLength: 6 }} />

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