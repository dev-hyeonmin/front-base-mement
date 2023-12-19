import { AddItem, Box, Button, ButtonProps, Card, Cell, Checkbox, DatePicker, EventDraggableList, EventDraggableListItemProps, FormField, Input, Layout, Modal, SecondaryActionProps, TimeInput } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DeleteIcon from '../../../public/delete.png';
import { IEventGroup } from "../../api/events/types";
import { setFormValue } from "../../util";

const tempGroupList: IEventGroup[] = [
  {
    id: 1,
    title: "🎁기간한정 EVENT🎁",
    description: "해당 그룹 이벤트에 대한 간단한 설명입니다.",
    startDate: "2023-11-01",
    endDate: "2023-11-30",
    startHour: "10",
    endHour: "20",
    startMinuite: "00",
    endMinuite: "30",
    week0: true,
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
  },
  {
    id: 2,
    title: "1회 체험 EVENT",
    description: "해당 그룹 이벤트에 대한 간단한 설명입니다.",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
    startHour: "10",
    endHour: "20",
    startMinuite: "00",
    endMinuite: "30",
    week0: true,
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
  },
  {
    id: 3,
    title: "화/수/목 EVENT",
    description: "해당 그룹 이벤트에 대한 간단한 설명입니다.",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
    startHour: "10",
    endHour: "20",
    startMinuite: "00",
    endMinuite: "30",
    week0: true,
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
  },
  {
    id: 4,
    title: "해피아워 EVENT",
    description: "해당 그룹 이벤트에 대한 간단한 설명입니다.",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
    startHour: "10",
    endHour: "20",
    startMinuite: "00",
    endMinuite: "30",
    week0: true,
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
  },
  {
    id: 5,
    title: "스킨케어/필링",
    description: "해당 그룹 이벤트에 대한 간단한 설명입니다.",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
    startHour: "10",
    endHour: "20",
    startMinuite: "00",
    endMinuite: "30",
    week0: true,
    week1: true,
    week2: true,
    week3: true,
    week4: true,
    week5: true,
    week6: true,
  }
];
const weekArray = [
  {
    name: "week0",
    label: "일"
  },
  {
    name: "week1",
    label: "월"
  },
  {
    name: "week2",
    label: "화"
  },
  {
    name: "week3",
    label: "수"
  },
  {
    name: "week4",
    label: "목"
  },
  {
    name: "week5",
    label: "금"
  },
  {
    name: "week6",
    label: "토"
  }
];

const EventGroup = () => {
  const [groupList, setGroupList] = useState<EventDraggableListItemProps[]>(tempGroupList.map((group, index) => ({
    id: group.id,
    title: group.title,
    description: `${group.startDate} - ${group.endDate}`,
    selected: index == 0 ? true : false,
    onClick: () => { handleClick(index) },
  })));
  const degreePrimaryActions: ButtonProps[] = [
    {
      label: "Edit",
      skin: 'primary',
      size: 'small',
      onClick: (_, index) => {  selectData(index); setModalStatus(true);  }
    }
  ];
  const degreeSecondaryActions: SecondaryActionProps[] = [
    {
      icon: <img src={DeleteIcon} />,
      text: "delete",
      priority: "secondary",
      onClick: (_, index) => { deleteData(index); }
    }
  ];


  const methods = useForm<IEventGroup>();
  const errorStatus = methods.formState.errors;
  const [modalStatus, setModalStatus] = useState(false);

  const handleClick = (index: number) => {
    setGroupList((currentValue) => currentValue.map((group, groupIndex) => ({
      ...group,
      selected: index == groupIndex ? true : false,
    })));
  }

  const onEventGroupSubmit: SubmitHandler<IEventGroup> = async (data) => {
    if (data.id) {
      setGroupList(groupList.map((value) => {
        if (value.id === data.id) {
          return data;
        }

        return value;
      }));
    } else {

      setGroupList([...groupList, data]);
    }
    
    closeModal();
  };

  const selectData = (index: number | undefined) => {
    if (index == 0 || index) {
      const group = groupList[index];
      setFormValue(group, methods.setValue);
    }
  };

  const deleteData = (index: number | undefined) => {
    if (index == 0 || index) {
      if (!window.confirm("삭제하시겠습니까? :(")) {
        return;
      }
      setGroupList(() => groupList.filter((_, groupIndex) => index != groupIndex));
    }
  }

  const openModal = () => {
    methods.reset();
    setModalStatus(true);
  }
  const closeModal = () => {
    setModalStatus(false);
  }

  return (
    <>
      <Card className={['h-fluid']}>
        <Card.Header>Event Groups</Card.Header>
        <Card.Content>
          <AddItem size="tiny" onClick={() => openModal()}>
            Add Group
          </AddItem>

          <Box width="100%" height="390px" direction="vertical" scroll>
            <EventDraggableList
              data={groupList}
              setData={setGroupList}
              primaryActions={degreePrimaryActions}
              secondaryActions={degreeSecondaryActions} />
          </Box>
        </Card.Content>
      </Card>

      <Modal isOpen={modalStatus}>
        <Card className={['w-500']}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onEventGroupSubmit)}>
              <Card.Header title="Event Group" />
              <Card.Content>
                <Layout gap="15px">
                  <Cell>
                    <FormField label="title" status={errorStatus.title && "error"} statusMessage={errorStatus.title?.message} required>
                      <Input
                        value="title"
                        registerOption={{ required: "please enter event group title." }} />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="description"  status={errorStatus.description && "error"} statusMessage={errorStatus.description?.message} required>
                      <Input
                        value="description"
                        registerOption={{ required: "please enter event group description." }} />
                    </FormField>
                  </Cell>

                  <Cell>
                    <Box gap="37px">
                      {weekArray.map(week =>
                        <Checkbox
                          key={week.name}
                          value={week.name}
                          name={"week"}
                          label={week.label} />
                      )}
                    </Box>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="startDate">
                      <DatePicker
                        value="startDate"
                      />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="endDate">
                      <DatePicker
                        value="endDate"
                      />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="startTime">
                      <TimeInput value="startTime" />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="endTime">
                      <TimeInput value="endTime" />
                    </FormField>
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Divider />
              <Card.Footer align="right">
                <Box gap="5px">
                  <Button label="cancel" onClick={() => closeModal()} />
                  <Button label="submit" type="submit" skin="primary" priority="primary"/>
                </Box>
              </Card.Footer>
            </form>
          </FormProvider>
        </Card>
      </Modal>
    </>
  );
}

export default EventGroup;