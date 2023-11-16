import { Box, ButtonProps, Card, Cell, EventActionItem, Layout, Page } from "@mement-frontend/ui";
import { SecondaryActionProps } from "@mement-frontend/ui/src/actions/ActionButton";
import { useState } from "react";
import DeleteIcon from '../../public/delete.png';
import SettingIcon from '../../public/settings.png';

const tempDegreeList = [
  {
    id: 1,
    title: "MUSE EVENT 11월 1차 이벤트",
    startDate: "2023-11-01",
    endDate: "2023-11-14",
  },
  {
    id: 2,
    title: "MUSE EVENT 11월 2차 이벤트",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  }
];

const tempEventGroupList = [
  {
    title: "🎁기간한정 EVENT🎁",
    startDate: "2023-11-01",
    endDate: "2023-11-14",
  },
  {
    title: "1회 체험 EVENT",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    title: "화/수/목 EVENT",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    title: "해피아워 EVENT",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    title: "탄력/리프팅",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    title: "스킨케어/필링",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
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
  }
];

const Events = () => {
  const [selectedDegreeId, setSelectedDegreeId] = useState(tempDegreeList[0].id);
  const [degreeList, setDegreeList] = useState(tempDegreeList);
  const [eventGroup, setEventGroup] = useState(tempEventGroupList);

  return (
    <Page>
      <Page.Header title="Events" subtitle="We manage information related to events.<br/> You can set the event duration and modify event details for the group." />

      <Page.Content>
        <Layout>
          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header
                title="Event Degrees"
                subtitle="Click to set an event group, and click on the settings to modify information for that level."
              />

              <Card.Content>
                <Box direction="vertical" gap="5px">
                  {degreeList.map((degree, index) =>
                    <EventActionItem
                      key={`action-item--degree-${index}`}
                      label={degree.title}
                      description={`${degree.startDate} - ${degree.endDate}`}
                      selected={degree.id === selectedDegreeId}>

                      <EventActionItem.ActionButton
                        icon={SettingIcon}
                        size='small'
                        numOfVisibleSecondaryActions={1}
                        primaryActions={degreePrimaryActions}
                        secondaryActions={degreeSecondaryActions} />
                    </EventActionItem>
                  )}
                </Box>
              </Card.Content>
            </Card>
          </Cell>

          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header>Event Groups</Card.Header>
              <Card.Content>
                <Box direction="vertical" gap="5px">
                  {eventGroup.map((degree, index) =>
                    <EventActionItem
                      key={`action-item--group-${index}`}
                      label={degree.title}
                      description={`${degree.startDate} - ${degree.endDate}`}>
                      <EventActionItem.ActionButton
                        icon={SettingIcon}
                        size='small'
                        numOfVisibleSecondaryActions={1}
                        primaryActions={degreePrimaryActions}
                        secondaryActions={degreeSecondaryActions} />
                    </EventActionItem>
                  )}
                </Box>
              </Card.Content>
            </Card>
          </Cell>

          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header>Event Items</Card.Header>

              <Card.Content>
                <Box direction="vertical" gap="5px">
                  {eventGroup.map((degree, index) =>
                    <EventActionItem
                      key={`action-item--item-${index}`}
                      label={`이벤트 상품 ${index}`} />
                  )}
                </Box>
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Page.Content>
    </Page >
  );
}

export default Events;