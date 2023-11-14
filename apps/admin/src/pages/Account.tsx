import { Box, Button, Card, Cell, Input, Layout, Modal, Page, Radio, TableList, TableListColumnProps, TextButton } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const columns: TableListColumnProps[] = [
  {
    title: "mail",
    name: "mail",    
  },
  {
    title: "name",
    name: "name",
  },
  {
    title: "role",
    name: "role",
  },
  {
    title: "reg date",
    name: "regDate",
  },
  {
    title: "last login",
    name: "lastLogin",
    infoTooltip: "마지막으로 로그인 한 시점"
  }
]

const records = [
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "admin",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  },
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "admin",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  },
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "admin",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  },
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "admin",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  },
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "admin",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  },
  {
    mail: "mail@gmail.com",
    name: "Hong Gil Dong",
    role: "branch",
    regDate: "2023-11-14 00:00:00",
    lastLogin: "2023-11-14 00:00:00"
  }
]

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
        <TableList draggable action columns={columns} records={records} />
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