import { ActionButton, Box, Button, Calendar, Card, Cell, DatePicker, FormField, IconButton, Input, InputArea, Layout, Modal, Page, RecordsProps, Table, TableActionCell, TableColumnProps } from "@mement-frontend/ui";
import { IPopup } from "../api/popup/types";
import DeleteIcon from '../../public/delete.png';
import EditIcon from '../../public/edit.png';
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { setFormValue } from "../util";

const tempPopup = [
  {
    id: 1,
    title: '뮤즈 강남 이벤트 팝업',
    type: '',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    regDate: '2023-11-24',
    content: '',
    imgUrl: ''
  },
  {
    id: 2,
    title: '뮤즈 강남 상단 팝업',
    type: '',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    regDate: '2023-11-24',
    content: '',
    imgUrl: ''
  },
  {
    id: 3,
    title: '뮤즈 강남 해피콜 팝업',
    type: '',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    regDate: '2023-11-24',
    content: '',
    imgUrl: ''
  }
];

const Popup = () => {
  const columns: TableColumnProps[] = [
    {
      title: "title",
      render: (row: RecordsProps) => row.title
    },
    {
      title: "startDate",
      width: "140px",
      render: (row: RecordsProps) => row.startDate
    },
    {
      title: "endDate",
      width: "140px",
      render: (row: RecordsProps) => row.endDate
    },
    {
      title: "regDate",
      width: "140px",
      render: (row: RecordsProps) => row.regDate
    },
    {
      title: '',
      width: '100px',
      align: 'center',
      render: (row: RecordsProps) => {
        return (
          <ActionButton
            primaryActions={[
              {
                label: "edit",
                priority: 'primary',
                onClick: () => { openModal(row); }
              }
            ]}
            secondaryActions={[
              // {
              //   text: "edit",
              //   icon: <img src={EditIcon}/>,
              //   onClick: () => {}
              // },
              {
                text: "delete",
                skin: 'warning',
                priority: 'secondary',
                icon: <img src={DeleteIcon} />,
                onClick: () => { }
              }
            ]}
          />
        );
      }
    }
  ];

  const methods = useForm<IPopup>();
  const [modalStatus, setModalStatus] = useState(false);

  const onSubmit: SubmitHandler<IPopup> = async (data) => {
    console.log(data);
  };

  const openModal = (selectedPopup: RecordsProps) => {
      setFormValue(selectedPopup, methods.setValue);
      setModalStatus(true);
  }
  return (
    <Page>
      <Page.Header title="Popup Page" />

      <Page.Content>
        <Table columns={columns} data={tempPopup} />
      </Page.Content>

      <Modal isOpen={modalStatus}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Card className={['w-500']}>
              <Card.Header title="Popup Modal" />

              <Card.Content>
                <Layout gap="12px">
                  <Cell>
                    <FormField label="Title" required>
                      <Input value="title" placeholder="title" />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="startDate" required>
                      <DatePicker value="startDate" />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="endDate" required>
                      <DatePicker value="endDate" />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="content">
                      <InputArea value="content" />
                    </FormField>
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer>
                <Box gap="5px">
                  <Button label="cancel" onClick={() => setModalStatus(false)} />
                  <Button label="submit" priority="primary" skin="primary" />
                </Box>
              </Card.Footer>
            </Card>
          </form>
        </FormProvider>
      </Modal>
    </Page >
  );
}

export default Popup;