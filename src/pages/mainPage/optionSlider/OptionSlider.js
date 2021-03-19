import s from "./OptionSlider.module.scss";
import Card from "../../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Controller, Autoplay } from "swiper";

import "swiper/swiper.scss";

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
        {/* <SwiperSlide>
          <Card
            src={backpack}
            title='Водонепроницаемый Рюкзак'
            text='9 800 ₽'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src={kevlar}
            title="Спасательный жилет BRP Mens Airflow PFD"
            text='6 900 ₽'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src={audio}
            title="BRP Audio-Premium System"
            text='68 000 ₽'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src={paracord}
            title="Спасательное снаряжение"
            text='нет в наличии'
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

