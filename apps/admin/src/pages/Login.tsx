import { Box, Button, Card, Cell, FormField, Heading, Input, Layout, Modal, Text, TextButton } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { usePostLogin } from "../api/member/authentication";
import { IMembersLoginRequestDto } from "../api/member/types";
import { setToken } from "../util";

interface FormState extends IMembersLoginRequestDto { }

const Login = () => {
  const methods = useForm<FormState>();
  const errorStatus = methods.formState.errors;
  const postLogin = usePostLogin();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    // temp password : P@ssw0rd
    const result = await postLogin.mutateAsync(data);
    setToken({ accessToken: result.data.message.accessToken });
    window.location.reload();
  };

  const changePassword = () => {
    alert("준비중입니다. 관리자에게 문의 바랍니다.");
  }

  return (
    <Modal isOpen={true} useBackground={false}>
      <Card width="400px">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Card.Header>
              <Box direction="vertical" gap="5px">
                <Heading size="large" as="h3">Mement Admin</Heading>
                <Text size="tiny" weight="normal">
                  계정이 없을 경우 관리자에게 문의 부탁드립니다. <br />
                  관리자 이메일: 008minimo@mement.net
                </Text>
              </Box>
            </Card.Header>

            <Card.Content>
              <Layout gap="10px">
                <Cell>
                  <FormField
                    label="user id"
                    required={true}
                    status={errorStatus.loginId && "error"}
                    statusMessage={errorStatus.loginId?.message}>
                    <Input
                      type="text"
                      value="loginId"
                      registerOption={{ required: "Please enter your id." }} />
                  </FormField>
                </Cell>

                <Cell>
                  <FormField
                    label="password"
                    required={true}
                    status={
                      errorStatus.password?.type == 'minLength' ? "warning" :
                      errorStatus.password?.type == 'required'  ? "error" : undefined
                    }
                    statusMessage={errorStatus.password?.message}>
                    <Input
                      type="password"
                      value="password"
                      registerOption={{
                        required: "Please enter your password.",
                        minLength: { value: 8, message: "Password must be at least 8 characters long." }
                      }} />
                  </FormField>
                </Cell>

                <Cell>
                  <Box align="right" padding="0 3px 5px">
                    <TextButton label="비밀번호를 잊으셨나요?" size="small" skin="disabled" underline="always" onClick={() => changePassword()} />
                  </Box>
                </Cell>
              </Layout>
            </Card.Content>

            <Card.Footer>
              <Button
                type="submit"
                label="login"
                size="large"
                skin="primary"
                priority="primary"
                disabled={!methods.formState.isValid}
                fluid />
            </Card.Footer>
          </form>
        </FormProvider>
      </Card>
    </Modal >
  )
};

export default Login;