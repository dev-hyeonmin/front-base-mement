import { Checkbox, Input, Panel, UploadFile } from "@mement-frontend/ui";

const Home = () => {
  return (
    <div className="body">
      <Panel
        title="소개페이지 설정"
        description="홈페이지의 소개페이지 관련된 설정 부분입니다.">

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
            id="tempCheck"
            label="안녕하세요 :)"
          />
          <Checkbox
            id="tempCheck"
            label="컴포넌트 테스트 중입니다."
          />
          <Checkbox
            id="tempCheck"
            label="만들기 재밋다가도 갑자기 짜증이 나며 🤨"
          />
        </div>

        <UploadFile 
          id="tempFile"
          label="Upload File"
        />
      </Panel>
    </div>
  );
}

export default Home;