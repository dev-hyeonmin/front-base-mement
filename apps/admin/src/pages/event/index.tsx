import { Card, Cell, Layout, Page } from "@mement-frontend/ui";
import EventDegree from "./EventDegree";
import EventGroup from "./EventGroup";

const Events = () => {
  return (
    <Page>
      <Page.Header title="Events" subtitle="We manage information related to events.<br/> You can set the event duration and modify event details for the group." />

      <Page.Content>
        <Layout>
          <Cell span={4}>
            <EventDegree />
          </Cell>

          <Cell span={4}>
            <EventGroup />
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