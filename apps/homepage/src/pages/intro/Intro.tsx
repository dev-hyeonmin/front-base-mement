import Text from "../../components/text/Text";

const Intro = () => {
  return (
    <div className='intro-content inner main-content'>
      <div className="intro-section">
        <Text title content="친절한 의료진" />
        <Text content="의료인과 스탭들의 친절함은 많은 고객분들이 뮤즈를 다시 찾아주시는 이유 중 하나입니다." />
      </div>

      <div className="intro-section">
        <Text title content="다양한 시술 & 이벤트" />
        <Text content="고객님의 요구에 항상 귀기울이는 뮤즈에서는 정말 다양한 종류의 시술을 준비하고 있습니다. 끊임없이 진행되는 이벤트와 합리적인 가격 혜택을 통해, 고객님께서 더 만족 하실 수 있도록 항상 고민하고 있습니다." />
      </div>

      <div className="intro-section">
        <Text title content="투명한 제품, 정품/정량 사용" />
        <Text content="정품 정량의 투명하고 바른 시술은 뮤즈의 첫번째 모토입니다.<br/>더 합리적인 가격으로 시술을 할 수 있도록 고민하는 것 뿐만 아니라 정품, 정량의 신뢰를 잃지 않도록 항상 노력하고 있습니다." />
      </div>

      <div className="intro-section">
        <Text title content="다양한 시술 & 이벤트" />
        <Text content="다양한 음료, 고객 만족을 위한 디테일 <br/>커피는 로스팅된지 5일이 지난 원두는 사용하지 않습니다. 신맛/ 쓴맛 취향에 맞게 준비되어 있습니다. 대기하시는 동안, 그리고 시술 후에도 테이크아웃 하실 수 있도록 모든 층에 준비되어 있습니다." />
      </div>
    </div>
  );
}


export default Intro;