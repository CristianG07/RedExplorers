import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import { slice1, slice2, slice3, slice4, slice5, slice6, slice7 } from "../../assets/images";
import { Autoplay } from "swiper/modules";
import Button from "./Button";

export default function Carousel() {
   const imageSlice = [{ id: 1, image: slice1 }, { id: 2, image: slice2 }, { id: 3, image: slice3 }, { id: 4, image: slice4 }, { id: 5, image: slice5 }, { id: 6, image: slice6 }, { id: 7, image: slice7 }, { id: 8, image: slice1 }, { id: 9, image: slice2 }]

   return (
      <section className="my-10 relative">
         <Swiper
            slidesPerView={7}
            breakpoints={{
               320: {
                  slidesPerView: 3,
               },
               // when window width is >= 480px
               480: {
                  slidesPerView: 4,
               },
               // when window width is >= 640px
               640: {
                  slidesPerView: 5,
               },
               900: {
                  slidesPerView: 7,
               }
            }}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Autoplay]}
         >
            {imageSlice.map((item) => (
               <>
                  <SwiperSlide key={item.id}>
                     <img src={item.image} alt={item.id} />
                  </SwiperSlide>
               </>
            ))}
            <div className="absolute top-0 flex justify-center items-center w-full h-full z-10">
               <Button className="py-2 px-3.5 text-white text-xs">Follow @ instagram</Button>
            </div>
         </Swiper>
      </section >
   )
}
