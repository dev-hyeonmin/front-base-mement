import { Box, Button, Card, Cell, DropDown, FormField, Heading, Input, Layout, Modal, Text, TextButton } from "@mement-frontend/ui";
import { DropDownLayoutOptionProps } from "@mement-frontend/ui/src/components/form/DropDownLayout";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { usePostLogin } from "../api/member/authentication";
import { IMembersLoginRequestDto } from "../api/member/types";
import { language } from "../dummy";
import { setToken } from "../util";

interface FormState extends IMembersLoginRequestDto { }

const Login = () => {
  const { t, i18n } = useTranslation();
  const methods = useForm<FormState>();
  const errorStatus = methods.formState.errors;
  const postLogin = usePostLogin();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    // temp password : P@ssw0rd
    const result = await postLogin.mutateAsync(data);
    const accessToken = result.data.message.accessToken;

    setToken({ accessToken: accessToken });
    window.location.reload();
  };

  const changePassword = () => {
    alert(t('login.passwordAlertMessage'));
  }

  const chanageLanguage = (_: React.MouseEvent, option: DropDownLayoutOptionProps) => {
    i18n.changeLanguage(option.value + "");
  };

  return (
    <Modal isOpen={true} useBackground={false}>
      <Box direction="vertical" gap="5px">
        <Card width="400px">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Card.Header>
                <Box direction="vertical" gap="5px">
                  <Heading size="large" as="h3">Mement Admin</Heading>
                  <Text size="tiny" weight="normal">
                    {t('login.noticeMessage')} <br />
                    {t('login.adminEmail')}: 008minimo@mement.net
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
                        registerOption={{ required: t('login.statusMessageId') }} />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField
                      label="password"
                      required={true}
                      status={
                        errorStatus.password?.type == 'minLength' ? "warning" :
                          errorStatus.password?.type == 'required' ? "error" : undefined
                      }
                      statusMessage={errorStatus.password?.message}>
                      <Input
                        type="password"
                        value="password"
                        registerOption={{
                          required: t('login.statusMessagePassword'),
                          minLength: { value: 8, message: t('login.statusMessageMinPassword') }
                        }} />
                    </FormField>
                  </Cell>

                  <Cell>
                    <Box align="right" padding="0 3px 5px">
                      <TextButton label={t('login.forgetPassword')} size="small" skin="disabled" underline="always" onClick={() => changePassword()} />
                    </Box>
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer>
                <Button
                  type="submit"
                  label={t('login.login')}
                  size="large"
                  skin="primary"
                  priority="primary"
                  disabled={!methods.formState.isValid}
                  fluid />
              </Card.Footer>
            </form>
          </FormProvider>
        </Card>

        <Box align="right">
          <DropDown
            size="tiny"
            width="140px"
            options={language}
            defaultValue='한국어'
            onSelect={chanageLanguage} />
        </Box>
      </Box>

    </Modal >
  )
};

export default Login;