import { Button, Card, Checkbox, Input, ModalBackground, Page, TableList, TableListColumnProps, TextButton } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const columns: TableListColumnProps[] = [
  {
    title: "column1",
    name: "column1",
    align: "left",
    infoTooltip: "툴팁 내용 적어주시면 됩니다~"
  },
  {
    title: "column2",
    name: "column2",
    infoTooltip: "표에서는 기본 중앙 정렬로 해두었는데 변수 추가할지는 모르겠음!"
  },
  {
    title: "column3",
    name: "column3",
  },
  {
    title: "column4",
    name: "column4",
  }
]

const records = [
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: <Checkbox id="chbox01" label="안뇽" />,
    column4: <Button primary label="text" />,
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

      {modalStatus &&
        <ModalBackground>
          <Card className={["w-500", "border-none"]}>
            <Card.Header title="Add account" />
            <Card.SubHeader>Please enter the new user information to register.</Card.SubHeader>

            <Card.Content>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>

                  <Input
                    label="name"
                    value="name"
                    registerOption={{ required: "please enter user name" }} />

                  <Input
                    label="email"
                    type="email"
                    value="email"
                    registerOption={{ required: "please enter user email" }} 
                    className={['mt-10']}/>


                  <Card.Divider />
                  
                  <Button
                    label="cancel"
                    onClick={() => toggleModal()  }/>

                  <Button
                    type="submit"
                    label="submit"
                    className={['ml-3']}
                    primary = {methods.formState.isValid} />
                </form>
              </FormProvider>
            </Card.Content>
          </Card>
        </ModalBackground>
      }

      <Page.Footer divider fixed>
        <Page.Footer.Start></Page.Footer.Start>
        <Page.Footer.Center></Page.Footer.Center>
        <Page.Footer.End>
          <Button label="cancel" />
          <Button label="submit" primary />
        </Page.Footer.End>
      </Page.Footer>
    </Page>
  );
}

export default Account;