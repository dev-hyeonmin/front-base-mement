import { Button, Card, Input, LayoutFull } from "@mement-frontend/ui";

const Login = () => {
  return (
    <LayoutFull className={["ui__align-center", "bg-color-D70"]}>
      <Card className={["w500",]}>
        {/* <Card.Header>로그인</Card.Header> */}
        <Card.Header title="로그인" subtitle="로그인 페이지 입니다."/>

        <Card.SubHeader>
          이메일과 비밀번호를 입력해주세요. 서브 헤더 부분입니다.
        </Card.SubHeader>

        <Card.Content>
          <Input 
            label="email"
            type="email"/>
          <Input 
            label="password"
            type="password"/>
          
          <Button className={["mt10"]} label="login" size="large" primary/>
        </Card.Content>
      </Card>
    </LayoutFull>
  )
};

export default Login;
