import s from "./OptionSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Controller, Autoplay } from "swiper";

import "swiper/swiper.scss";
import Card from "../../../../components/card/Card";

SwiperCore.use([Navigation, Controller, Autoplay]);

export const OptionSlider = (props) => {
  return (
    <div className={s.swiper_wrapper}>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
