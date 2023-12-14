import { Box, Button, Card, Cell, FormField, Input, Layout, Page } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Meta = () => {
  const methods = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Meta Information" subtitle="Manage meta tag information and other key values page." />

      <Page.Content fixed>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Layout gap="15px">
              <Cell>
                <Card>
                  <Card.Header>
                    Metatag
                  </Card.Header>

                  <Card.Content>
                    <Layout>
                      <Cell>
                        <FormField label="keywords">
                          <Input value="keyword" tooltip="검색엔진에 의해 검색되는 단어" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="Description">
                          <Input value="description" tooltip="검색 결과에 표시되는 문자 지정" />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header>
                    Key
                  </Card.Header>

                  <Card.SubHeader>
                    If you want to add anothers, please tell the developer. Thank you.
                  </Card.SubHeader>

                  <Card.Content>
                    <Layout>
                      <Cell>
                        <FormField label="Analytics Id">
                          <Input value="analyics" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="AdWords Id">
                          <Input value="adWords" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="KaKao Pixel Id">
                          <Input value="kakaoPixel" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="Naver Pixel Id">
                          <Input value="naverPixel" />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="Kakao JS Key (Developer Only)">
                          <Input value="kakaoJSKey" readonly />
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

export default Meta;