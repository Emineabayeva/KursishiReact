import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const HaqqSlide :React.FC = () => {
  return (
    <section className="swiper-img py-5">
    <div className="container">
    <Swiper
     breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1388642146/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=OQ-BhHBcXxYxK2zz4JUQXR6SJ1NucnaVjHWu8ylksNI=" alt="" className='wh-100' /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1477483635/photo/adult-man-paying-with-credit-card-at-cafe-close-up-of-hands-with-credit-card-and-credit-card.jpg?s=612x612&w=0&k=20&c=Efzx0FsEOQuYwzBVIh78R-613vrsbVLiXXoMI5MCwyI=" alt="" className='wh-100' /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1281297414/photo/artificial-intelligence-and-communication-network-concept.jpg?s=612x612&w=0&k=20&c=litNhHogb68Z7JH3QTOzabiZKWDyaJHcFaCbb9qpEj4=" alt="" className='wh-100' /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1312767508/photo/businessman-using-tablet-online-banking-exchange-currency-and-payment-digital-marketing.jpg?s=612x612&w=0&k=20&c=r2ZUpvc5X6MXyQDWIiHyY5winELUodL3uIzxASJ9EM8=" alt="" className='wh-100' /></SwiperSlide>
        <SwiperSlide> <img src="https://media.istockphoto.com/id/1397833533/photo/man-hand-using-a-calculator-and-fill-in-the-income-tax-online-return-form-for-payment.jpg?s=612x612&w=0&k=20&c=S9chCAtj6z4SW7mf8q4jw8_MlCIxx_27pDgdghYhqY4=" alt="" className='wh-100' /></SwiperSlide>
        <SwiperSlide> <img src="https://www.istockphoto.com/photo/home-gm1393059175-449096989" alt="" className='wh-100' /></SwiperSlide>

      </Swiper>
    </div>
</section>
  )
}

export default HaqqSlide