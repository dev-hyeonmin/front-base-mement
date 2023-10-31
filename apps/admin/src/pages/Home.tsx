import { Button, CalendarInput, Checkbox, CustomCalendar, Input, Modal, TableList, TableListColumnProps, UploadFile } from "@mement-frontend/ui";
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

const Home = () => {
  const [useModal, setUseModal] = useState(false);
  const openModal = () => {
    setUseModal(true);
  }

  const closeModal = () => {
    setUseModal(false);
  }

  return (
    <div className="body">
      <div className="box--secound">
        <CustomCalendar />
      </div>

      <div className="box--secound">
          <Input
            essential
            label="제목"
            placeholder="입력해주세요."
          />

          <Input
            readonly
            label="제목"
            placeholder="read-only"
          />

          <div>
            <Checkbox
              id="tempCheck1"
              label="안녕하세요 :)"
            />
            <Checkbox
              id="tempCheck2"
              label="컴포넌트 테스트 중입니다."
              active
            />
            <Checkbox
              id="tempCheck3"
              label="만들기 재밋다가도 갑자기 짜증이 나며 🤨"
              disabled
            />
            <Checkbox
              id="tempCheck3"
              label="집 가구 싶당 헤헤"
              disabled
              active
            />
          </div>

          <UploadFile
            id="tempFile"
            label="Upload File"
          />

          <CalendarInput
            label="날짜 입력"
            defaultValue={'2023-10-31'}
          />
      </div>

      <div className="box--secound">
        <Button label="open" primary onClick={() => openModal()} />
        {useModal &&
          <Modal
            title="해당 팝업에 대하여."
            content="해당 팝업에 대한 내용이 여기에 표시됩니다.<br/>단순 알람모달로 처리하고 있지만 좀 더 확장성 있게 수정할 예정입니다. 감사합니다."
            onClose={() => closeModal()}
          />
        }
      </div>

      <div className="box--secound">
        <TableList columns={columns} records={records} />
      </div>
    </div>
  );
}

export default Home;