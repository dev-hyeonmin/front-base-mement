import { ActionButton, Box, Button, Card, Cell, Input, Layout, Modal, Page, Radio, RecordsProps, Table, TableColumnProps, TextButton } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DeleteIcon from '../../public/delete.png';
import EditIcon from '../../public/edit.png';

const records = [
  {
    name: `Light grey hoodie`,
    SKU: '00224239',
    price: '$59.00',
    inventory: <Button label="temp" disabled />,
  },
  {
    name: `Black watch`,
    SKU: '00352464',
    price: '$229.00',
    inventory: 'In stock',
    highlight: true,
  },
  {
    name: 'Reading glasses',
    SKU: '00486430',
    price: '$69.00',
    inventory: 'In stock',
  },
  {
    name: 'Leather shoes',
    SKU: '00515642',
    price: '$129.00',
    inventory: 'Out of stock',
  },
];

const columns: TableColumnProps[] = [
  {
    title: 'Name',
    width: "300px",
    infoTooltipProps: { size: 'medium', content: "툴팁 내용을 입력해주세요 :) 감사합니다!" },
    render: (row: RecordsProps) => row.name
  },
  {
    title: 'SKU',
    render: (row: RecordsProps) => row.SKU,
  },
  {
    title: 'Inventory',
    align: 'center',
    render: (row: RecordsProps) => row.inventory,
  },
  {
    title: 'Price',
    render: (row: RecordsProps) => row.price,
  },
  {
    width: "100px",
    align: "center",
    render: (row: RecordsProps) => (
      <ActionButton
        secondaryActions={[
          {
            text: "edit",
            icon: <img src={EditIcon}/>,
            onClick: () => {}
          },
          {
            text: "delete",
            icon: <img src={DeleteIcon}/>,
            onClick: () => {}
          }
        ]}
      />
    ),
  }
];

interface FormState {
  name: string;
  email: string;
  role: 'admin' | 'branch';
}

const Account = () => {
  const methods = useForm<FormState>();
  const [modalStatus, setModalStatus] = useState(false);
  const toggleModal = () => {
    setModalStatus((currentValue) => !currentValue);
  }
  const onSubmit = async (data: FormState) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Account" subtitle="You can manage permissions or create an account.">
        <Page.Header.Action>
          <TextButton label="+ Add Account" skin="primary" onClick={() => toggleModal()} />
        </Page.Header.Action>
      </Page.Header>

      <Page.Content>
        <Table
          data={records}
          columns={columns}
          selectedIds={[0, 3]}
          showSelection
          draggable />
      </Page.Content>

      <Modal
        isOpen={modalStatus}
        onRequestClose={() => toggleModal()}
        shouldCloseOnOverlayClick>
        <Card className={["w-500", "border-none"]}>
          <Card.Header title="Add account" />
          <Card.SubHeader>Please enter the new user information to register.</Card.SubHeader>

          <Card.Content>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Layout>
                  <Box gap="30px">
                    <Radio id="admin" value="role" label="admin" selected />
                    <Radio id="branch" value="role" label="branch" />
                  </Box>

                  <Cell>
                    <Input
                      label="name"
                      value="name"
                      registerOption={{ required: "please enter user name" }} />
                  </Cell>

                  <Cell>
                    <Input
                      label="email"
                      type="email"
                      value="email"
                      registerOption={{ required: "please enter user email" }} />
                  </Cell>
                </Layout>

                <Card.Divider />

                <Layout justifyItems="end">
                  <Cell>
                    <Button
                      label="cancel"
                      onClick={() => toggleModal()} />

                    <Button
                      type="submit"
                      label="submit"
                      className={['ml-3']}
                      primary={methods.formState.isValid}
                      disabled={!methods.formState.isValid} />
                  </Cell>
                </Layout>
              </form>
            </FormProvider>
          </Card.Content>
        </Card>
      </Modal>

      {/* <Page.Footer divider fixed>
        <Page.Footer.Start></Page.Footer.Start>
        <Page.Footer.Center></Page.Footer.Center>
        <Page.Footer.End>
          <Button label="cancel" />
          <Button label="submit" primary />
        </Page.Footer.End>
      </Page.Footer> */}
    </Page >
  );
}

export default Account;