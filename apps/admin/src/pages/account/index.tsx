import {
  ActionButton,
  Page,
  Pagination,
  RecordsProps,
  Table,
  TableColumnProps,
  TextButton
} from '@mement-frontend/ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import DeleteIcon from '../../../public/delete.png';
import EditIcon from '../../../public/edit.png';
import { useGetMembers } from '../../api/members/members';
import AccountModal from './accountModal';

interface FormState {
  name: string;
  email: string;
  role: 'admin' | 'branch';
}

const Account = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const members = useGetMembers({ page: 1, perPage: 9 }).data?.data.message;
  const [selectedId, setSelectedId] = useState<number>();
  const [page, setPage] = useState<number>(1);

  const [modalStatus, setModalStatus] = useState(false);
  const openModal = () => {
    setSelectedId(undefined);
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  const columns: TableColumnProps[] = [
    {
      title: t('account.colId'),
      render: (row: RecordsProps) => row.loginId,
    },
    {
      title: t('account.colName'),
      render: (row: RecordsProps) => row.username,
    },
    {
      title: t('account.colRole'),
      render: (row: RecordsProps) => row.role,
    },
    {
      title: t('account.colRegistAt'),
      render: (row: RecordsProps) => row.createdAt,
    },
    {
      width: '100px',
      align: 'center',
      render: (row: RecordsProps) => (
        <ActionButton
          secondaryActions={[
            {
              text: 'edit',
              icon: <img src={EditIcon} />,
              onClick: () => { onEdit(String(row.loginId)) },
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

  const onEdit = (userId: string) => {
    const member = members?.find((member) => member.loginId === userId);

    if (member) {
      setSelectedId(() => member.id);
      setModalStatus(true);
    }
  }

  useEffect(() => {
    const currentPage = searchParams.get('page');
    if (currentPage) {
      setPage(Number(currentPage));
    }
  }, [searchParams.get('page')])
  return (
    <Page>
      <Page.Header
        title={t('account.title')}
        subtitle={t('account.subtitle')}
      >
        <Page.Header.Action>
          <TextButton
            label={t('account.add')}
            skin="primary"
            onClick={() => openModal()}
          />
        </Page.Header.Action>
      </Page.Header>

      <Page.Content>
        {(members) &&
          <Table data={members} columns={columns} />
        }

        <Pagination currentPage={page} totalPages={15} />
      </Page.Content>

      <AccountModal
        isOpen={modalStatus}
        onRequestClose={() => closeModal()}
        selectedId={selectedId} />
    </Page>
  );
};

export default Account;
