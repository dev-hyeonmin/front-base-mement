import { Box, Button, Card, Cell, FileUpload, ImageViewer, Input, Layout, Modal } from "@mement-frontend/ui";
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
}:MainRecommendModalProps) => {
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
                  <Input label="title" value={`title`} />
                </Cell>

                <Cell span={4} rows={2}>
                  <FileUpload value={`recommendImage`}>
                    {({ openFileUploadDialog, deleteFile }) => (
                      <ImageViewer
                        imageFile={recommendMethods.watch('recommendImage')}
                        deafultImageUrl="http://museclinic.co.kr/new_homepage_files/main_NSeOvZY31693817874.jpg"
                        onAddImage={openFileUploadDialog}
                        onRemoveImage={deleteFile} />
                    )}
                  </FileUpload>
                </Cell>
                <Cell span={8}>
                  <Input label="Name" value={`recommendTitle`} />
                </Cell>
                <Cell span={8}>
                  <Input label="description" value={`recommendDescription`} />
                </Cell>

                <Cell span={4} rows={2}>
                  <FileUpload value={`recommendImage2`}>
                    {({ openFileUploadDialog, deleteFile }) => (
                      <ImageViewer
                        status="error"
                        imageFile={recommendMethods.watch('recommendImage2')}
                        onAddImage={openFileUploadDialog}
                        onRemoveImage={deleteFile} />
                    )}
                  </FileUpload>
                </Cell>
                <Cell span={8}>
                  <Input label="Name" value={`recommendTitle2`} />
                </Cell>
                <Cell span={8}>
                  <Input label="description" value={`recommendDescription2`} />
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