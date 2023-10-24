import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

const Keywords = () => {
  return (
    <div className="home-keywords">
      <div className='inner'>
        <div className="home-keywords--subtit">좌우로 넘겨보세요!</div>
        <div className="home-keywords--tit">오늘 상담/예약 많은시술</div>

        <div className='home-keywords--slide'>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={5}
            loop={true}
          >
            <SwiperSlide>Keyword 1</SwiperSlide>
            <SwiperSlide>Keyword 2</SwiperSlide>
            <SwiperSlide>Keyword 3</SwiperSlide>
            <SwiperSlide>Keyword 4</SwiperSlide>
            <SwiperSlide>Keyword 5</SwiperSlide>

            <SwiperSlide>Keyword 1</SwiperSlide>
            <SwiperSlide>Keyword 2</SwiperSlide>
            <SwiperSlide>Keyword 3</SwiperSlide>
            <SwiperSlide>Keyword 4</SwiperSlide>
            <SwiperSlide>Keyword 5</SwiperSlide>

            <SwiperSlide>Keyword 1</SwiperSlide>
            <SwiperSlide>Keyword 2</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Keywords;