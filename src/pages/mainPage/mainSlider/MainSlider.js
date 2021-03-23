
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
} from "swiper";

import SliderItem from "./sliderItem/SliderItem";
import extreme from "./../../../assets/images/mainSlider/extreme.png";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


import "./MainSlider.scss";



SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);


const MainSlider = (props) => {
  return (
    <div className='swiper_wrapper'>
      <Swiper 
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
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
