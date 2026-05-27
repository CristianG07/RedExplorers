import { useSwiper } from 'swiper/react';

export default function ButtonSwiper({ children, btnType = "" }) {
   const swiper = useSwiper()

   if (btnType === "prev") {
      return <button className='bg-white py-4 px-3' onClick={() => swiper.slidePrev()}>{children}</button>
   }

   if (btnType === "next") {
      return <button className='bg-white py-4 px-3' onClick={() => swiper.slideNext()}>{children}</button>
   }
}
