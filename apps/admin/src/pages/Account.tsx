import { Button, Checkbox, Page, TableList, TableListColumnProps } from "@mement-frontend/ui";
import { useState } from "react";

const columns: TableListColumnProps[] = [
  {
    title: "column1",
    name: "column1",
    align: "left",
    infoTooltip: "툴팁 내용 적어주시면 됩니다~"
  },
  {
    title: "column2",
    name: "column2",
    infoTooltip: "표에서는 기본 중앙 정렬로 해두었는데 변수 추가할지는 모르겠음!"
  },
  {
    title: "column3",
    name: "column3",
  },
  {
    title: "column4",
    name: "column4",
  }
]

const records = [
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: "$59.00",
    column4: "In stock",
  },
  {
    column1: "Light grey hoodie",
    column2: "00224239",
    column3: <Checkbox id="chbox01" label="안뇽" />,
    column4: <Button primary label="text" />,
  }
]

const Account = () => {
  return (
    <Page>
      <Page.Header title="Account" subtitle="You can manage permissions or create an account." />

      <Page.Content>
        {/* <TableList columns={columns} records={records} /> */}
      </Page.Content>

      <Page.Footer divider fixed>
        <Page.Footer.Start></Page.Footer.Start>
        <Page.Footer.Center></Page.Footer.Center>
        <Page.Footer.End>
          <Button label="cancel" />
          <Button label="submit" primary />
        </Page.Footer.End>
      </Page.Footer>
    </Page>
  );
}

export default Account;