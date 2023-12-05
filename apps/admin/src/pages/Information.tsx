import { Box, Button, Card, Cell, Input, Layout, Page } from "@mement-frontend/ui";
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
                        <Input label="Branch Name" placeholder="Branch Name" value="name" />
                      </Cell>

                      <Cell span={6}>
                        <Input label="Director" placeholder="Director" value="director" />
                      </Cell>

                      <Cell span={6}>
                        <Input label="Business number" placeholder="000-00-000000" value="businessNumber" />
                      </Cell>

                      <Cell span={6}>
                        <Input label="Call Number" placeholder="0000-0000" value="number" />
                      </Cell>

                      <Cell>
                        <Input label="Address" placeholder="Republic of Korea, Seoul, Gangnam " value="address" />
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
                        <Input label="KaKao display name" value="kakao" />
                      </Cell>

                      <Cell span={8}>
                        <Input label="KaKao URL" value="kakaoUrl" />
                      </Cell>

                      <Cell span={4}>
                        <Input label="Wechat display name" value="wechat" />
                      </Cell>

                      <Cell span={8}>
                        <Input label="Wechat URL" value="wechatUrl" />
                      </Cell>

                      <Cell span={4}>
                        <Input label="Line display name" value="line" />
                      </Cell>

                      <Cell span={8}>
                        <Input label="Line URL" value="lineUrl" />
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
          <Button label="save" primary/>
        </Box>
      </Page.Footer>
    </Page >
  );
}

export default Information;