import { Box, Button, Card, Modal } from "../..";
import { CommonProps } from "../../common";

export interface MessageModalLayoutProps extends CommonProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const MessageModalLayout = ({
  isOpen,
  title,
  content,
  primaryButtonText = "Cancel",
  secondaryButtonText = "Confirm",
}: MessageModalLayoutProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Card className={['ui-msg-modal', 'w-500']}>
        <Card.Header title={title} />

        <Card.Content>
          {content}
        </Card.Content>

        <Card.Footer align="right">
          <Box gap="10px">
            <Button label={secondaryButtonText} size="small" />
            <Button label={primaryButtonText} size="small" priority="primary"/>
          </Box>
        </Card.Footer>
      </Card>
    </Modal>
  )
}