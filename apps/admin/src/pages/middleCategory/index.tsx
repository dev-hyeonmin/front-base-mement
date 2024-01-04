import { Box, Cell, Layout, Page } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IMainProps } from "../../api/main/types";


const CategoryMiddle = () => {
  const methods = useForm<IMainProps>();

  const onSubmit: SubmitHandler<IMainProps> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Main Page" />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Content fixed>
            <Layout gap="15px">
              <Cell>
              </Cell>
            </Layout>
          </Page.Content>

          <Page.Footer fixed divider>
            <Box align="right">
            </Box>
          </Page.Footer>
        </form>
      </FormProvider>
    </Page >
  );
}

export default CategoryMiddle;