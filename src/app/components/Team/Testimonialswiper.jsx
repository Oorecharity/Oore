import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from "../../assets/person_1.jpg.webp"
import img2 from "../../assets/person_2.jpg.webp"
import img3 from "../../assets/person_3.jpg.webp"
import img4 from "../../assets/person_4.jpg.webp"


const Testimonialswiper = () => {
  return (
    <section>
          <Swiper className='lg:w-[82%] w-[85%] m-auto'
              modules={[ Pagination, Autoplay]}
              pagination={true}
              spaceBetween={100}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                  900: {
                      slidesPerView: 2,
                  },
              }}
          >

              <SwiperSlide>
                  <div className='lg:flex lg:space-x-4 mb-16'>
                        <img src={img1} alt="image1" className="object-fill w-44 rounded" />
                        <div>
                            <p className='text-xl pb-2'>Mark Johnson</p>
                            <p className="text-gray-500 italics">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore quas fugit quidem aut voluptatum quos nesciunt cum quo voluptate?</p>
                        </div>
                    </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className='lg:flex lg:space-x-4 mb-16'>
                      <img src={img2} alt="image1" className="object-fill w-44 rounded" />
                      <div>
                          <p className='text-xl pb-2'>Katie Johnson</p>
                          <p className="text-gray-500 italics">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore quas fugit quidem aut voluptatum quos nesciunt cum quo voluptate?</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className='lg:flex lg:space-x-4 mb-16'>
                      <img src={img2} alt="image1" className="object-fill w-44 rounded" />
                      <div>
                          <p className='text-xl pb-2'>Jane Mars</p>
                          <p className="text-gray-500 italics">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore quas fugit quidem aut voluptatum quos nesciunt cum quo voluptate?</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className='lg:flex lg:space-x-4 mb-16'>
                      <img src={img3} alt="image1" className="object-fill w-44 rounded" />
                      <div>
                          <p className='text-xl pb-2'>Shane Holmes</p>
                          <p className="text-gray-500 italics">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore quas fugit quidem aut voluptatum quos nesciunt cum quo voluptate?</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                  <div className='lg:flex lg:space-x-4 mb-16'>
                      <img src={img4} alt="image1" className="object-fill w-44 rounded" />
                      <div>
                          <p className='text-xl pb-2'>Mark Johnson</p>
                          <p className="text-gray-500 italics">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore quas fugit quidem aut voluptatum quos nesciunt cum quo voluptate?</p>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>
    </section>
  )
}

export default Testimonialswiper