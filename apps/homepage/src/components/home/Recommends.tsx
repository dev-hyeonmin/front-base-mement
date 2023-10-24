import { Link } from "react-router-dom";

const Recommends = () => {
  return (
    <div className="home-recommends">
      <div className="inner">
        <div className="home-recommends--card">
          <Link to={'/'}>
            <div className="recommends-card--tit">
              <b>HOT</b> 인기 시술 안내
            </div>
            <div className="recommends-card--cont">
              <div className="card-cont--box">
                {/* <img src="" /> */}
                <div className="card-cont--image"></div>

                <div className="card-cont--subtit">프리미엄 색소 토닝 레이저</div>
                <div className="card-cont--tit">피코플러스토닝</div>
              </div>

              <div className="card-cont--box">
                {/* <img src="" /> */}
                <div className="card-cont--image"></div>

                <div className="card-cont--subtit">프리미엄 색소 토닝 레이저</div>
                <div className="card-cont--tit">피코플러스토닝</div>
              </div>
            </div>
          </Link>
        </div>


        <div className="home-recommends--card">
          <Link to={'/'}>
            <div className="recommends-card--tit">
              <b>HOT</b> 인기 시술 안내
            </div>
            <div className="recommends-card--cont">
              <div className="card-cont--box">
                {/* <img src="" /> */}
                <div className="card-cont--image"></div>

                <div className="card-cont--subtit">프리미엄 색소 토닝 레이저</div>
                <div className="card-cont--tit">피코플러스토닝</div>
              </div>

              <div className="card-cont--box">
                {/* <img src="" /> */}
                <div className="card-cont--image"></div>

                <div className="card-cont--subtit">프리미엄 색소 토닝 레이저</div>
                <div className="card-cont--tit">피코플러스토닝</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Recommends;