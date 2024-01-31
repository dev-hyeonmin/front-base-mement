import { Box, Button, ButtonProps, Card, Cell, DatePicker, EventDraggableList, EventDraggableListItemProps, Input, Layout, Modal } from "@mement-frontend/ui";
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
  const [degreeList, setDegreeList] = useState<EventDraggableListItemProps[]>(tempDegreeList.map((degree, index) => ({
    title: degree.title,
    description: `${degree.startDate} - ${degree.endDate}`,
    selected: index == 0 ? true : false,
    onClick: () => { handleClick(index) },
    disabledDrag: true
  })));
  const degreePrimaryActions: ButtonProps[] = [
    {
      label: "Edit",
      skin: 'primary',
      size: 'small',
      onClick: (_, index) => { selectData(index); openModal(); }
    }
  ];

  const methods = useForm<FormState>();
  const [modalStatus, setModalStatus] = useState(false);

  const handleClick = (index: number) => {
    setDegreeList(degreeList.map((degree, degreeIndex) => ({
      ...degree,
      selected: index == degreeIndex ? true : false,
    })));
  }

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

  return (
    <>
      <Card className={['h-fluid']}>
        <Card.Header
          title="Event Degrees"
          subtitle="Click to set an event group, and click on the settings to modify information for that level."
        />

        <Card.Content>
          <EventDraggableList
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
                      value="title"
                      registerOption={{ required: "please enter event group title." }} />
                  </Cell>

                  <Cell span={6}>
                    <DatePicker
                      value="startDate"
                    />
                  </Cell>

                  <Cell span={6}>
                    <DatePicker
                      value="endDate"
                    />
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer align="right">
                <Box gap="5px">
                  <Button label="cancel" onClick={() => closeModal()} />
                  <Button label="submit" onClick={() => closeModal()} skin="primary" type="submit"/>
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