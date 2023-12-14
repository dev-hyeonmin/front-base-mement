import { Box, Button, Card, Cell, FormField, Input, Layout, Page } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Information = () => {
  const methods = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Basic Information" subtitle="This is a page that manages basic information about a branch. Please be aware of modifications." />

      <Page.Content fixed>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Layout gap="15px">
              <Cell>
                <Card>
                  <Card.Header>
                    Information
                  </Card.Header>

                  <Card.Content>
                    <Layout>
                      <Cell span={6}>
                        <FormField label="Branch Name">
                          <Input placeholder="Branch Name" value="name" />
                        </FormField>
                      </Cell>

                      <Cell span={6}>
                        <FormField label="Director">
                          <Input placeholder="Director" value="director" />
                        </FormField>
                      </Cell>

                      <Cell span={6}>
                        <FormField label="Business number">
                          <Input placeholder="000-00-000000" value="businessNumber" />
                        </FormField>
                      </Cell>

                      <Cell span={6}>
                        <FormField label="Call Number">
                          <Input placeholder="0000-0000" value="number" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="Address">
                          <Input placeholder="Republic of Korea, Seoul, Gangnam " value="address" />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header>
                    SNS Information
                  </Card.Header>

                  <Card.SubHeader>
                    If you want to add another SNS, please tell the developer. Thank you.
                  </Card.SubHeader>

                  <Card.Content>
                    <Layout>
                      <Cell span={4}>
                        <FormField label="KaKao display name" infoContent="화면에 나타낼 카카오 상담 명칭을 입력해주세요.">
                          <Input value="kakao" />
                        </FormField>
                      </Cell>

                      <Cell span={8}>
                        <FormField label="KaKao URL">
                          <Input value="kakaoUrl" />
                        </FormField>
                      </Cell>

                      <Cell span={4}>
                        <FormField label="Wechat display name">
                          <Input value="wechat" />
                        </FormField>
                      </Cell>

                      <Cell span={8}>
                        <FormField label="Wechat URL">
                          <Input value="wechatUrl" />
                        </FormField>
                      </Cell>

                      <Cell span={4}>
                        <FormField label="Line display name">
                          <Input value="line" />
                        </FormField>
                      </Cell>

                      <Cell span={8}>
                        <FormField label="Line URL">
                          <Input value="lineUrl" />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>
            </Layout>
          </form>
        </FormProvider>
      </Page.Content>

      <Page.Footer divider fixed>
        <Box align="right">
          <Button label="save" skin="primary" priority="primary" />
        </Box>
      </Page.Footer>
    </Page >
  );
}

export default Information;