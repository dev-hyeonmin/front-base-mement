import {
  ActionButton,
  Box,
  Button,
  Card,
  Cell,
  FormField,
  Input,
  Layout,
  Modal,
  Page,
  Radio,
  RecordsProps,
  Table,
  TableColumnProps,
  TextButton,
} from '@mement-frontend/ui';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DeleteIcon from '../../public/delete.png';
import EditIcon from '../../public/edit.png';
import { useGetMembers } from '../api/member/member';
import { IMembersResponse } from '../api/member/types';

const columns: TableColumnProps[] = [
  {
    title: '아이디',
    render: (row: RecordsProps) => row.loginId,
  },
  {
    title: '이름',
    render: (row: RecordsProps) => row.username,
  },
  {
    title: '권한',
    render: (row: RecordsProps) => row.role,
  },
  {
    title: '등록일',
    render: (row: RecordsProps) => row.createdAt,
  },
  {
    width: '100px',
    align: 'center',
    render: (_: RecordsProps) => (
      <ActionButton
        secondaryActions={[
          {
            text: 'edit',
            icon: <img src={EditIcon} />,
            onClick: () => { },
          },
          {
            text: 'delete',
            icon: <img src={DeleteIcon} />,
            onClick: () => { },
          },
        ]}
      />
    ),
  },
];

interface FormState {
  name: string;
  email: string;
  role: 'admin' | 'branch';
}

const Account = () => {
  const getMembers = useGetMembers({ perPage: 10 });
  const [members, setMembers] = useState<IMembersResponse[]>();
  const methods = useForm<FormState>();
  const [modalStatus, setModalStatus] = useState(false);
  const toggleModal = () => {
    setModalStatus((currentValue) => !currentValue);
  };
  const onSubmit = async (data: FormState) => {
    console.log(data);
  };

  useEffect(() => {
    if (getMembers.data?.data.message) {
      setMembers(getMembers.data?.data.message);
    }
  }, [getMembers]);

  return (
    <Page>
      <Page.Header
        title="Account"
        subtitle="You can manage permissions or create an account."
      >
        <Page.Header.Action>
          <TextButton
            label="+ Add Account"
            skin="primary"
            onClick={() => toggleModal()}
          />
        </Page.Header.Action>
      </Page.Header>

      <Page.Content>
        {members &&
          <Table data={members} columns={columns} />
        }
      </Page.Content>

      <Modal
        isOpen={modalStatus}
        onRequestClose={() => toggleModal()}
        shouldCloseOnOverlayClick
      >
        <Card className={['w-500', 'border-none']}>
          <Card.Header title="Add account" />
          <Card.SubHeader>
            Please enter the new user information to register.
          </Card.SubHeader>

          <Card.Content>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Layout>
                  <Box gap="30px">
                    <Radio name="admin" value="role" label="admin" />
                    <Radio name="branch" value="role" label="branch" />
                  </Box>

                  <Cell>
                    <FormField label="name">
                      <Input
                        value="name"
                        registerOption={{ required: 'please enter user name' }}
                      />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="email">
                      <Input
                        type="email"
                        value="email"
                        registerOption={{ required: 'please enter user email' }}
                      />
                    </FormField>
                  </Cell>
                </Layout>

                <Card.Divider />

                <Layout justifyItems="end">
                  <Cell>
                    <Button label="cancel" onClick={() => toggleModal()} />

                    <Button
                      type="submit"
                      label="submit"
                      className={['ml-3']}
                      skin={methods.formState.isValid ? 'primary' : 'default'}
                      disabled={!methods.formState.isValid}
                    />
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
    </Page>
  );
};

export default Account;
