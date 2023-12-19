import { Box, Button, Card, Modal } from "@mement-frontend/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IDetailProduct } from "../../api/detail/types";
import { IMainRecommend } from "../../api/main/types";

interface DetailProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<IDetailProduct>;
  data?: IMainRecommend;
}

const DetailProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  data
}: DetailProductModalProps) => {
  const method = useForm<IDetailProduct>();

  return (
    <Modal isOpen={isOpen}>
      <Card className={['w-500']}>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <Card.Header title='Add Product' />
            <Card.SubHeader>
              해당 정규가(일반) 상품 리스트는 ... 에서 추가 삭제 하실 수 있습니다.
            </Card.SubHeader>

            <Card.Content>

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

export default DetailProductModal;