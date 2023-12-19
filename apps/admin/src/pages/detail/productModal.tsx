import { Box, Button, Card, Modal, SelectorList } from "@mement-frontend/ui";
import { FormProvider, useForm } from "react-hook-form";

const tempProducsts = [
  {
    id: 1,
    name: "피코슈어프락셀(얼굴전체)"
  },
  {
    id: 2,
    name: "피코슈어프락셀(나비존)"
  },
  {
    id: 3,
    name: "핑크팻주사 80cc"
  },
  {
    id: 4,
    name: "핑크팻주사 40cc"
  },
  {
    id: 5,
    name: "오메가 8줄"
  },
  {
    id: 6,
    name: "오메가 6줄"
  },
  {
    id: 7,
    name: "피코슈어프락셀(얼굴전체)"
  },
  {
    id: 8,
    name: "피코슈어프락셀(얼굴전체)"
  },
  {
    id: 9,
    name: "피코슈어프락셀(얼굴전체)"
  },
  {
    id: 10,
    name: "피코슈어프락셀(얼굴전체)"
  }
]

interface IFromProps {
  searchQuery: string;
  selectedIds: string[];
}

interface DetailProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const DetailProductModal = ({
  isOpen,
  onClose,
  onSubmit
}: DetailProductModalProps) => {
  const method = useForm<IFromProps>();
  const onModalSubmit = (data: IFromProps) => {
    const filterSelectedItems = tempProducsts.filter(value => data.selectedIds.includes(value.id + ""));
    onSubmit(filterSelectedItems);
    method.reset();
  }

  return (
    <Modal isOpen={isOpen}>
      <Card className={['w-500']}>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onModalSubmit)}>
            <Card.Header title='Add Product' />
            <Card.SubHeader>
              해당 정규가(일반) 상품 리스트는 ... 에서 추가 삭제 하실 수 있습니다.
            </Card.SubHeader>

            <Card.Content>
              <SelectorList data={tempProducsts} multiple />
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