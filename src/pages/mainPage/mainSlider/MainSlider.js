
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
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        pagination={{clickable:true,
                      background: 'red'}}
        scrollbar={{ draggable: true }}
        dot={{backgroundColor: 'red'}}
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
