import { AddItem, Box, Button, ButtonProps, Card, Cell, Checkbox, DatePicker, DraggableList, Input, Layout, Modal, Page, SecondaryActionProps, TimeInput } from "@mement-frontend/ui";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DeleteIcon from '../../public/delete.png';
import { IEventGroup } from "../api/events/types";
import EventDegree from "./event/EventDegree";

const tempDegreeList = [
  {
    title: "MUSE EVENT 11월 1차 이벤트",
    description: "2023-11-01 - 2023-11-14",
    onClick: () => { },
    disabledDrag: true
  },
  {
    title: "MUSE EVENT 11월 2차 이벤트",
    description: "2023-11-15 - 2023-11-30",
    onClick: () => { },
    disabledDrag: true
  }
];

const tempEventGroupList = [
  {
    title: "🎁기간한정 EVENT🎁",
    description: "2023-11-01 - 2023-11-14"
  },
  {
    title: "1회 체험 EVENT",
    description: "2023-11-15 - 2023-11-30"
  },
  {
    title: "화/수/목 EVENT",
    description: "2023-11-15 - 2023-11-30"
  },
  {
    title: "해피아워 EVENT",
    description: "2023-11-15 - 2023-11-30"
  },
  {
    title: "탄력/리프팅",
    description: "2023-11-15 - 2023-11-30"
  },
  {
    title: "스킨케어/필링",
    description: "2023-11-15 - 2023-11-30"
  }
]

const degreePrimaryActions: ButtonProps[] = [
  {
    label: "Edit",
    primary: true,
    size: 'small',
    onClick: () => { }
  }
];

const degreeSecondaryActions: SecondaryActionProps[] = [
  {
    icon: <img src={DeleteIcon} />,
    priority: "secondary",
    onClick: () => { }
  },
  {
    icon: <img src={DeleteIcon} />,
    text: "delete",
    onClick: () => { }
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
]

interface FormState extends IEventGroup { }

const Events = () => {
  const methods = useForm<FormState>();
  const [groupModalStatus, setGroupModalStatus] = useState(false);
  const toggleGroupModalStatus = () => {
    setGroupModalStatus((currentValue) => !currentValue);
  };

  const addEventGroup = () => {
    alert('Add Event Group');
    setGroupModalStatus(false);
  };

  const onEventGroupSubmit: SubmitHandler<FormState> = async (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Page.Header title="Events" subtitle="We manage information related to events.<br/> You can set the event duration and modify event details for the group." />

      <Page.Content>
        <Layout>
          <Cell span={4}>
            <EventDegree />
          </Cell>

          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header>Event Groups</Card.Header>
              <Card.Content>
                <AddItem size="tiny" onClick={() => toggleGroupModalStatus()}>
                  Add Group
                </AddItem>

                <DraggableList
                  data={tempEventGroupList}
                  numOfVisibleSecondaryActions={1}
                  primaryActions={degreePrimaryActions}
                  secondaryActions={degreeSecondaryActions} />
              </Card.Content>
            </Card>
          </Cell>

          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header>Event Items</Card.Header>

              <Card.Content>
                {/* <Box direction="vertical" gap="5px">
                  {eventGroup.map((degree, index) =>
                    <EventActionItem
                      key={`action-item--item-${index}`}
                      label={`이벤트 상품 ${index}`} />
                  )}
                </Box> */}
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Page.Content>

      <Modal isOpen={groupModalStatus} shouldCloseOnOverlayClick onRequestClose={() => toggleGroupModalStatus()}>
        <Card className={['w-500']}>
          <Card.Header title="Event Group" />
          <Card.Content>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onEventGroupSubmit)}>
                <Layout gap="15px">
                  <Cell>
                    <Input
                      label="title"
                      value="title"
                      registerOption={{ required: "please enter event group title." }} />
                  </Cell>

                  <Cell>
                    <Input
                      label="description"
                      value="description"
                      registerOption={{ required: "please enter event group description." }} />
                  </Cell>

                  <Cell>
                    <Box gap="37px"> 
                    {weekArray.map(week =>
                      <Checkbox
                        key={week.name}
                        id={week.name}
                        value={week.name}
                        label={week.label} />
                    )}
                    </Box>
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

                  <Cell span={6}>
                    <TimeInput value="startTime" label="startTime"/>
                  </Cell>

                  <Cell span={6}>
                    <TimeInput value="endTime" label="endTime"/>
                  </Cell>
                </Layout>
              </form>
            </FormProvider>
          </Card.Content>

          <Card.Divider />
          <Card.Footer>
            <Button label="cancel" onClick={() => toggleGroupModalStatus()} />
            <Button label="submit" primary className={['ml-3']} onClick={() => addEventGroup()} />
          </Card.Footer>
        </Card>
      </Modal>
    </Page >
  );
}

export default Events;