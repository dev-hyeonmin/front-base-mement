import { Box, Button, Card, Cell, FileUpload, FormField, ImageViewer, Input, Layout, Modal } from "@mement-frontend/ui";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IMainRecommend } from "../../api/main/types";
import { setFormValue } from "../../util";

interface MainRecommendModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: IMainRecommend;
}

const MainRecommendModal = ({
  isOpen,
  onClose,
  data
}: MainRecommendModalProps) => {
  const recommendMethods = useForm<IMainRecommend>();

  useEffect(() => {
    if (data) {
      setFormValue(data, recommendMethods.setValue);
    }
  }, [data])

  const onRecommendSubmit: SubmitHandler<IMainRecommend> = async (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen}>
      <Card className={['w-500']}>
        <FormProvider {...recommendMethods}>
          <form onSubmit={recommendMethods.handleSubmit(onRecommendSubmit)}>
            <Card.Header
              title="Edit Recommend Detail" />

            <Card.Content>
              <Layout>
                <Cell>
                  <FormField label="title">
                    <Input value={`title`} />
                  </FormField>
                </Cell>

                <Cell span={4} rows={2}>
                  <FileUpload value={`recommendImage`}>
                    {({ openFileUploadDialog, deleteFile }) => (
                      <ImageViewer
                        imageFile={recommendMethods.watch('recommendImage')}
                        onAddImage={openFileUploadDialog}
                        onRemoveImage={deleteFile} />
                    )}
                  </FileUpload>
                </Cell>
                <Cell span={8}>
                  <FormField label="Name">
                    <Input value={`recommendTitle`} />
                  </FormField>
                </Cell>
                <Cell span={8}>
                  <FormField label="description">
                    <Input value={`recommendDescription`} />
                  </FormField>
                </Cell>

                <Cell span={4} rows={2}>
                  <FileUpload value={`recommendImage2`}>
                    {({ openFileUploadDialog, deleteFile }) => (
                      <ImageViewer
                        imageFile={recommendMethods.watch('recommendImage2')}
                        onAddImage={openFileUploadDialog}
                        onRemoveImage={deleteFile} />
                    )}
                  </FileUpload>
                </Cell>
                <Cell span={8}>
                  <FormField label="recommendTitle2">
                    <Input value={`recommendTitle2`} />
                  </FormField>
                </Cell>
                <Cell span={8}>
                  <FormField label="description2">
                    <Input value={`recommendDescription2`} />
                  </FormField>
                </Cell>
              </Layout>
            </Card.Content>

            <Card.Footer align="right">
              <Box gap="5px">
                <Button label="cancel" onClick={() => onClose()} />
                <Button label="submit" type="submit" skin="primary" priority="primary" />
              </Box>
            </Card.Footer>
          </form>
        </FormProvider>
      </Card>
    </Modal>
  );
}

export default MainRecommendModal;