import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

import farol from '../../assets/images/logos-parceiros/logo-farol.png'
import jbs from '../../assets/images/logos-parceiros/logo-jbs.svg'
import olhosverdes from '../../assets/images/logos-parceiros/logo-olhosverdes.webp'
import patense from '../../assets/images/logos-parceiros/logo-patense.png'
import tecnoclean from '../../assets/images/logos-parceiros/logo-tecnoclean.webp'

export default function SliderParceiros() {
  return (
    <section className='py-16 bg-white'>
      <h2 className='py-5 text-4xl font-semibold text-center text-[#074d2c] '>
        Nossos principais clientes
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mt-5 flex justify-center parceiros"
      >
        <SwiperSlide className='w-fit flex justify-center'>
          <img src={farol} className='max-h-[82px] ' alt="" />
        </SwiperSlide>
        <SwiperSlide className='w-fit flex justify-center'>
          <img src={jbs} className='max-h-[82px] ' alt="" />
        </SwiperSlide>
        <SwiperSlide className='w-fit flex justify-center'>
          <img src={olhosverdes} className='max-h-[82px] ' alt="" />
        </SwiperSlide>
        <SwiperSlide className='w-fit flex justify-center'>
          <img src={patense} className='max-h-[82px] ' alt="" />
        </SwiperSlide>
        <SwiperSlide className='w-fit flex justify-center'>
          <img src={tecnoclean} className='max-h-[82px] ' alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}