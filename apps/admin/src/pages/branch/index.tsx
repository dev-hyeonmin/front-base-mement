import { ActionButton, Page, RecordsProps, Table, TableColumnProps, TextButton } from "@mement-frontend/ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from '../../../public/delete_warning.png';
import BranchModal from "./branchModal";

const Branch = () => {
  const { t } = useTranslation();
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedData, setSelectedData] = useState<any>();

  const openModal = () => {
    setModalStatus(true);
  }
  const closeModal = () => {
    setModalStatus(false);
  }

  // DATA
  const records = [
    {
      branchName: `강남점`,
      branchNameEng: `gangnam`,
      updateAt: '2024-01-01 10:33:10',
      registAt: '2024-01-01 00:00:00',
    },
    {
      branchName: `홍대점`,
      branchNameEng: `gangnam`,
      updateAt: '2024-01-01 10:33:10',
      registAt: '2024-01-01 00:00:00',
    },
    {
      branchName: '노원점',
      branchNameEng: `gangnam`,
      updateAt: '2024-01-01 10:33:10',
      registAt: '2024-01-01 00:00:00',
    },
    {
      branchName: '수원점',
      branchNameEng: `gangnam`,
      updateAt: '2024-01-01 10:33:10',
      registAt: '2024-01-01 00:00:00',
    },
  ];

  const columns: TableColumnProps[] = [
    {
      title: t('branch.colName'),
      render: (row: RecordsProps) => row.branchName
    },
    {
      title: t('branch.colEditAt'),
      align: 'center',
      width: "200px",
      render: (row: RecordsProps) => row.updateAt,
    },
    {
      title: t('branch.colRegistAt'),
      align: 'center',
      width: "200px",
      render: (row: RecordsProps) => row.registAt,
    },
    {
      width: "150px",
      align: "end",
      render: (row: RecordsProps) => (
        <ActionButton
          primaryActions={[
            {
              label: t('edit'),
              skin: 'primary',
              priority: 'primary',
              onClick: () => {
                setSelectedData(() => row);
                openModal();
              }
            }
          ]}
          numOfVisibleSecondaryActions={1}
          secondaryActions={[
            {
              icon: <img src={DeleteIcon} />,
              skin: 'warning',
              priority: "secondary",
              onClick: () => { }
            }
          ]}
        />
      ),
    }
  ];

  return (
    <Page>
      <Page.Header title={t('branch.title')} subtitle={t('branch.subtitle')}>
        <Page.Header.Action>
          <TextButton label={'+ ' + t('branch.add')} skin="primary" onClick={() => openModal()} />
        </Page.Header.Action>
      </Page.Header>

      <Page.Content>
        <Table
          data={records}
          columns={columns} />
      </Page.Content>

      <BranchModal
        isOpen={modalStatus}
        onRequestClose={() => closeModal()}
        selectedData={selectedData}/>
    </Page >
  );
}

export default Branch;