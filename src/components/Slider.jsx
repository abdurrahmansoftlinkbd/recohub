import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/D83XZWd/pexels-vladbagacian-1604024.jpg"
            text="Discover the Perfect Products with Community Insights"
            desc="Explore a platform where users share valuable insights and queries to help you find the best products effortlessly."
            btn="Get Started"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/vZyL3jp/drone-3202860-1280.jpg"
            text="Get Tailored Recommendations for What You Need"
            desc="Receive personalized product suggestions from a community of like-minded individuals who prioritize quality and value."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/cCWZh73/austin-distel-mp-N7xj-KQ-Ns-unsplash.jpg"
            text="Join a Community That Cares About Your Choices"
            desc="Be part of a network where users collaborate to provide honest recommendations and thoughtful feedback on products."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
