import { AddItem, ButtonProps, Card, Cell, DraggableList, Layout, Page } from "@mement-frontend/ui";
import { SecondaryActionProps } from "@mement-frontend/ui/src/actions/ActionButton";
import DeleteIcon from '../../public/delete.png';

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

const Events = () => {
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
                <DraggableList
                  data={tempDegreeList}
                  numOfVisibleSecondaryActions={1}
                  primaryActions={degreePrimaryActions}
                  secondaryActions={degreeSecondaryActions} />
              </Card.Content>
            </Card>
          </Cell>

          <Cell span={4}>
            <Card className={['h-fluid']}>
              <Card.Header>Event Groups</Card.Header>
              <Card.Content>
                <AddItem size="tiny">
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
    </Page >
  );
}

export default Events;