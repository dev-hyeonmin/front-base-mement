import { Button, Card, Modal, ModalProps, SelectorList, SelectorListRecordsProps, TextButton } from "@mement-frontend/ui";
import { useTranslation } from "react-i18next";

interface MenusModalProps extends ModalProps {
  branches: SelectorListRecordsProps[];
  onConfirm?: () => void;
}

const MenusModal = ({
  isOpen,
  onRequestClose,
  onConfirm,
  branches
}: MenusModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen}>
      <Card width="450px">
        <Card.Header
          title="메뉴 선택"
          suffix={<TextButton label="전체 선택/해제" skin="primary" size="small" />} />
        <Card.Content>
          <SelectorList data={branches} multiple={true} name="menusIds"/>
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

export default MenusModal;