import {
  ActionButton,
  Page,
  RecordsProps,
  Table,
  TableColumnProps,
  TextButton
} from '@mement-frontend/ui';
import { useState } from 'react';
import DeleteIcon from '../../../public/delete.png';
import EditIcon from '../../../public/edit.png';
import { useGetBranches } from '../../api/branch';
import { useGetMembers } from '../../api/members/members';
import { useGetMenus } from '../../api/menu';
import AccountModal from './accountModal';

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
  const members = useGetMembers({ page:3, perPage: 9 }).data?.data.message;
  const branches = useGetBranches().data?.data.message;
  const menus = useGetMenus().data?.data.message;
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

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
            onClick={() => openModal()}
          />
        </Page.Header.Action>
      </Page.Header>

      <Page.Content>
        {(members) &&
          <Table data={members} columns={columns} />
        }
      </Page.Content>

      {(branches && menus) &&
        <AccountModal
          isOpen={modalStatus}
          onRequestClose={() => closeModal()}
          branches={branches}
          menus={menus}/>
      }
    </Page>
  );
};

export default Account;
