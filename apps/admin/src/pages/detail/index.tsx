import {
  Box,
  Button,
  Card,
  Cell,
  FormField,
  Input,
  Layout,
  Page,
} from '@mement-frontend/ui';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface IFormProps {
  title: string;
  subTitle: string;
  content: string;
}

const ProductDetail = () => {
  const methods = useForm<IFormProps>();
  const editorRef = useRef<any>();
  const onSubmit: SubmitHandler<IFormProps> = async (data) => {    
    console.log(data);
  };
 
  const setEditorValue = (ref: any, name: any) => {
    const editor = ref?.current?.getInstance()?.getHTML();
    methods.setValue(name, editor);
  }

  return (
    <Page>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Page.Header title="Product detail" />

          <Page.Content fixed>
            <Layout>
              <Cell>
                <Card>
                  <Card.Header title="Title" />

                  <Card.Content>
                    <Layout gap="10px">
                      <Cell>
                        <FormField label="title" required>
                          <Input
                            value="title"
                            registerOption={{ required: 'Title is required.' }}
                          />
                        </FormField>
                      </Cell>

                      <Cell>
                        <FormField label="subTitle">
                          <Input value="subTitle" />
                        </FormField>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>

              <Cell>
                <Card>
                  <Card.Header title="Content" />

                  <Card.Content>
                    <Layout gap="10px">
                      <Cell>
                        <Editor ref={editorRef} onBlur={() => setEditorValue(editorRef, "content")}/>
                      </Cell>
                    </Layout>
                  </Card.Content>
                </Card>
              </Cell>
            </Layout>
          </Page.Content>

          <Page.Footer fixed divider>
            <Box align="right">
              <Button
                label="submit"
                type="submit"
                skin="primary"
                priority="primary"
              />
            </Box>
          </Page.Footer>
        </form>
      </FormProvider>
    </Page>
  );
};

export default ProductDetail;
