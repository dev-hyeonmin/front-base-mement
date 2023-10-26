
const Guide = () => {
  return (
    <div className='intro-content inner guide-content'>
      <div className="guide-box01">
        <div className="emp-text">카톡 친구하세요!</div>
        <div className="normal-text">
          신속하고 친절한 카톡상담은 물론, <br />
          이벤트 소식을 간편하게 받아보실 수 있습니다.
        </div>
      </div>

      <div className="guide-box02">
        <dl>
          <dt className="emp-text">대표번호</dt>
          <dd className="normal-text">0000-0000</dd>
        </dl>

        <dl>
          <dt className="emp-text">카카오톡</dt>
          <dd className="normal-text">@카카오톡</dd>
        </dl>
      </div>

      <div className="guide-box03">
        <dl>
          <dt className="emp-text">평일</dt>
          <dd className="normal-text">AM10:30 ~ PM9:00</dd>
        </dl>

        <dl>
          <dt className="emp-text">토요일</dt>
          <dd className="normal-text">AM10:30 ~ PM9:00</dd>
        </dl>
      </div>
    </div>
  );
}

export default Guide;