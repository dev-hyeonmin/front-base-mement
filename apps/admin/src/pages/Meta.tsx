import { Box, Button, Card, Cell, Input, Layout, Page } from "@mement-frontend/ui";
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
                        <Input label="keywords" value="keyword" tooltip="검색엔진에 의해 검색되는 단어" />
                      </Cell>

                      <Cell>
                        <Input label="Description" value="description" tooltip="검색 결과에 표시되는 문자 지정" />
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
                        <Input label="Analytics Id" value="analyics" />
                      </Cell>

                      <Cell>
                        <Input label="AdWords Id" value="adWords" />
                      </Cell>

                      <Cell>
                        <Input label="KaKao Pixel Id" value="kakaoPixel" />
                      </Cell>

                      <Cell>
                        <Input label="Naver Pixel Id" value="naverPixel" />
                      </Cell>

                      <Cell>
                        <Input label="Kakao JS Key (Developer Only)" value="kakaoJSKey" readonly />
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
          <Button label="save" primary />
        </Box>
      </Page.Footer>
    </Page >
  );
}

export default Meta;