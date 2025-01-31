import { Button, Card, Modal, ModalProps, SelectorList, SelectorListRecordsProps, TextButton } from "@mement-frontend/ui";
import { useTranslation } from "react-i18next";

interface MultiSelectorModalProps extends ModalProps {
  title: string;
  name: string;
  data: SelectorListRecordsProps[];
  onConfirm?: () => void;
}

const MultiSelectorModal = ({
  isOpen,
  title,
  name,
  data,
  onRequestClose,
  onConfirm
}: MultiSelectorModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen}>
      <Card width="450px">
        <Card.Header
          title={title}
          suffix={<TextButton label="전체 선택/해제" skin="primary" size="small" />} />
        <Card.Content>
          <SelectorList data={data} multiple={true} name={name} />
        </Card.Content>

        <Card.Footer align="right">
          <Button label="닫기" onClick={onRequestClose} />

          <Button
            label="확인"
            skin="primary"
            priority="primary"
            onClick={onConfirm}
          />
        </Card.Footer>
      </Card>
    </Modal>
  );
}

export default MultiSelectorModal;