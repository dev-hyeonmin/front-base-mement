import { Box, Button, Page } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Intro = () => {
  const methods = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Intro Page" />

      <Page.Content fixed>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            
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

export default Intro;