import { Box, Button, Card, Cell, FormField, Input, Layout, Modal } from "@mement-frontend/ui";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IBranch } from "../../api/branch/types";

interface BranchModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedData?: any;
}

const BranchModal = ({
  isOpen,
  onRequestClose,
  selectedData
}: BranchModalProps) => {
  const { t } = useTranslation();
  const methods = useForm<IBranch>();
  const errorStatus = methods.formState.errors;
  const onSubmit = async (data: IBranch) => {
    console.log(data);
    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      methods.setValue("name", selectedData.branchName);
      methods.setValue("nameEng", selectedData.branchNameEng);
    } else {
      methods.reset();
    }
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick>
      <Card className={["w-500", "border-none"]}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Card.Header title={t('branch.add')} subtitle={t('branch.modalSubHeader')}/>

            <Card.Content>
              <Layout>
                <Cell>
                  <FormField
                    required
                    label={t('branch.colName')}
                    status={errorStatus.name && "error"}
                    statusMessage={errorStatus.name?.message}>
                    <Input
                      value="name"
                      registerOption={{ required: t('requireMessage') }} />
                  </FormField>
                </Cell>

                <Cell>
                  <FormField
                    required
                    label={t('branch.colNameEng')}
                    infoContent={t('branch.colNameEngTooltip')}
                    status={errorStatus.nameEng && "error"}
                    statusMessage={errorStatus.nameEng?.message}>
                    <Input
                      value="nameEng"
                      registerOption={{ required: t('requireMessage') }} />
                  </FormField>
                </Cell>
              </Layout>
            </Card.Content>

            <Card.Footer align="right">
              <Box gap="10px">
                <Button label={t('close')} onClick={onRequestClose} />
                <Button label={t('submit')} type="submit" priority="primary"
                  skin={methods.formState.isValid ? "primary" : "default"}
                  disabled={!methods.formState.isValid} />
              </Box>
            </Card.Footer>
          </form>
        </FormProvider>
      </Card>
    </Modal>
  );
}

export default BranchModal;