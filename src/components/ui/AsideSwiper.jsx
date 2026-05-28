import { arrow_left, arrow_right, car_beach } from "../../assets/images";
import ButtonSwiper from "./ButtonSwiper";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function AsideSwiper() {
   return (
      <div className="lg:max-w-[445px] h-96 bg-gray-300">
         <Swiper
            className="h-full relative"
            slidesPerView={1}
            loop
         >
            <SwiperSlide>
               <div className="h-full flex flex-col gap-16 p-6 text-white bg-primary/30 ">
                  <img className="absolute top-0 left-0 h-full w-full object-fill -z-10" src={car_beach} alt="car image" />
                  <span className="text-xl md:text-2xl">September 17, 2018 - Tips & Tricks</span>
                  <h4 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-12">Finding Love & home in Tbilisi, Georgia</h4>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="h-full flex flex-col gap-16 p-6 text-white bg-primary/30 ">
                  <img className="absolute top-0 left-0 h-full w-full object-fill -z-10" src={car_beach} alt="car image" />
                  <span className="text-xl md:text-2xl">September 17, 2018 - Tips & Tricks</span>
                  <h4 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-12">Finding Love & home in Tbilisi, Georgia</h4>
               </div>
            </SwiperSlide>
            <div className="absolute bottom-12 left-6 flex gap-5 z-20">
               <ButtonSwiper btnType="prev">
                  <img src={arrow_left} alt="arrow left icon" />
               </ButtonSwiper>
               <ButtonSwiper btnType="next">
                  <img src={arrow_right} alt="arrow right icon" />
               </ButtonSwiper>
            </div>
         </Swiper>
      </div >
   )
}
