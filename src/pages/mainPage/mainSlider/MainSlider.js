import s from "./MainSlider.module.scss";
import './MainSliderDefault.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
} from "swiper";

import "swiper/swiper.scss";
import SliderItem from "./sliderItem/SliderItem";
import extreme from "./../../../assets/images/mainSlider/extreme.png";


SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);


const MainSlider = (props) => {
  return (
    <div className={s.swiper_wrapper}>
      <Swiper className={s.s2}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        pagination={{clickable:true}}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem imgUrl={extreme} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
