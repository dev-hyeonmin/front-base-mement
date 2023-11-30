import { Box, Button, ButtonProps, Card, Cell, DatePicker, DraggableList, Input, Layout, Modal } from "@mement-frontend/ui";
import { DraggableListItemProps } from "@mement-frontend/ui/src/components/lists/draggableList/DraggableListItem";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IEventDegree } from "../../api/events/types";
import { setFormValue } from "../../util";

const tempDegreeList: IEventDegree[] = [
  {
    id: 1,
    title: "MUSE EVENT 11월 1차 이벤트",
    startDate: "2023-11-01",
    endDate: "2023-11-14"
  },
  {
    id: 2,
    title: "MUSE EVENT 11월 2차 이벤트",
    startDate: "2023-11-15",
    endDate: "2023-11-30"
  }
];

interface FormState extends IEventDegree { }

const EventDegree = () => {
  const [degreeList, setDegreeList] = useState<DraggableListItemProps[]>(tempDegreeList.map((degree) => ({
    title: degree.title,
    description: `${degree.startDate} - ${degree.endDate}`,
    onClick: () => { },
    disabledDrag: true
  })));
  const degreePrimaryActions: ButtonProps[] = [
    {
      label: "Edit",
      primary: true,
      size: 'small',
      onClick: (_, index) => { selectData(index); openModal(); }
    }
  ];
  // const degreeSecondaryActions: SecondaryActionProps[] = [
  //   {
  //     icon: <img src={DeleteIcon} />,
  //     priority: "secondary",
  //     onClick: (_, index) => { deleteDegree(index); }
  //   }
  // ];

  const methods = useForm<FormState>();
  const [modalStatus, setModalStatus] = useState(false);

  const onEventGroupSubmit: SubmitHandler<FormState> = async (data) => {
    console.log(data);
    closeModal();
  };

  const openModal = () => {
    setModalStatus(true);
  }

  const closeModal = () => {
    setModalStatus(false);
  }

  const selectData = (index: number | undefined) => {
    if (index == 0 || index) {
      const degree = tempDegreeList[index];
      setFormValue(degree, methods.setValue);
    }
  };

  // const deleteDegree = (index: number | undefined) => {
  //   if (index == 0 || index) {
  //     if (!window.confirm("삭제하시겠습니까? :(")) {
  //       return;
  //     }
  //     setDegreeList(() => degreeList.filter((_, degreeIndex) => index != degreeIndex));
  //   }
  // }


  return (
    <>
      <Card className={['h-fluid']}>
        <Card.Header
          title="Event Degrees"
          subtitle="Click to set an event group, and click on the settings to modify information for that level."
        />

        <Card.Content>
          <DraggableList
            data={degreeList}
            setData={setDegreeList}
            primaryActions={degreePrimaryActions}/>
        </Card.Content>
      </Card>

      <Modal isOpen={modalStatus}>
        <Card className={['w-500']}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onEventGroupSubmit)}>
              <Card.Header title="Event Degree" />

              <Card.Content>
                <Layout gap="15px">
                  <Cell>
                    <Input
                      label="title"
                      value="title"
                      registerOption={{ required: "please enter event group title." }} />
                  </Cell>

                  <Cell span={6}>
                    <DatePicker
                      label="startDate"
                      value="startDate"
                    />
                  </Cell>

                  <Cell span={6}>
                    <DatePicker
                      label="endDate"
                      value="endDate"
                    />
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer align="right">
                <Box gap="5px">
                  <Button label="cancel" onClick={() => closeModal()} />
                  <Button label="submit" onClick={() => closeModal()} primary type="submit"/>
                </Box>
              </Card.Footer>
            </form>
          </FormProvider>
        </Card>
      </Modal>
    </>
  );
}

export default EventDegree;