import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../styles/slider.css";

const Slider = ({
  customClass = "",
  spaceBetween = 100,
  slidesPerView = 1.5,
  children,
}) => {
  return (
    <Swiper
      loop
      navigation
      centeredSlides
      grabCursor
      pagination={{
        clickable: true,
      }}
      className={`max-w-[1200px] ${customClass}`}
      effect="coverflow"
      modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
      }}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          spaceBetween: spaceBetween,
          slidesPerView: slidesPerView,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

Slider.Content = SwiperSlide;

export default Slider;
