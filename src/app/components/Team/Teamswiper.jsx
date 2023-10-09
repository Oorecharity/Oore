 "use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import ovieyi from "../../assets/ovieyi.png";
import mahmud from "../../assets/mahmud.png";
import dabs from "../../assets/dabs.png";
import steph from "../../assets/steph.png";
import tony from "../../assets/tony.png";
import efe from "../../assets/efe.jpg";
import calvin from "../../assets/calvin.png";
import soty from "../../assets/soty.jpeg";
import Swiperbtn from "../swiperbtn/Swiperbtn";

const TestimonialSwiper = () => {
  return (
    <section className="">
      <Swiper
        className="lg:w-[70%] w-[80%] m-auto"
        modules={[ Autoplay]}
        // pagination={true}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        <Swiperbtn/>
        <SwiperSlide>
          <div className="flex flex-col justify-center text-center">
            <div className="rounded">
              <Image
                src={efe}
                alt="ovieyi"
                placeholder="blur"
                className="rounded-lg"
              />
            </div>
            <div className="bg-black mt-2 rounded-md grid items-center p-4">
              <p className="text-lg pb-2 text-white">Onyeka Efe Joel</p>
              <p className="text-green">Co-Founder</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center text-center">
            <div>
              <Image
                src={calvin}
                alt="ovieyi"
                placeholder="blur"
                className="rounded"
              />
            </div>
            <div className="bg-black mt-2 rounded-md grid items-center p-4">
              <p className="text-lg pb-2 text-white">Uti Calvin Okechukwu</p>
              <p className="text-green">Co-Founder</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center text-center">
            <div>
              <Image
                src={soty}
                alt="ovieyi"
                placeholder="blur"
                className="rounded"
              />
            </div>
            <div className="bg-black mt-2 rounded-md grid items-center p-4">
              <p className="text-lg pb-2 text-white">Sotonye M. Bob-Manuel</p>
              <p className="text-green">Co-Founder</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center text-center">
            <div className="rounded">
              <Image
                src={ovieyi}
                alt="ovieyi"
                placeholder="blur"
              />
            </div>
            <div className="bg-black mt-2 rounded-md grid items-center p-4">
              <p className="text-lg pb-2 text-white">Ovieyi Chinedu Obioha</p>
              <p className="text-green">Project Manager</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center text-center">
            <div className="rounded">
              <Image
                src={mahmud}
                alt="mahmud"
                placeholder="blur"
              />
            </div>
            <div className="bg-black mt-2 rounded-md grid items-center p-4">
              <p className="text-lg pb-2 text-white">Bakale Mahmud</p>
              <p className="text-green">Backend Developer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col rounded justify-center text-center">
            <div className="rounded">
              <Image
                src={dabs}
                alt="dabs"
                placeholder="blur"
              />
            </div>
            <div className="bg-black mt-2 grid items-center p-4 rounded-md ">
              <p className="text-lg pb-2 text-white">Dabs Emmanuel Oyibo</p>
              <p className="text-green">Frontend Developer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col rounded justify-center text-center">
            <div className="rounded">
              <Image
                src={tony}
                alt="steph"
                placeholder="blur"
              />
            </div>
            <div className="bg-black mt-2 grid items-center p-4 rounded-md ">
              <p className="text-lg pb-2 text-white">Tony Benson</p>
              <p className="text-green">UI/UX & Graphics Designer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col rounded justify-center text-center">
            <div className="rounded">
              <Image
                src={steph}
                alt="steph"
                placeholder="blur"
              />
            </div>
            <div className="bg-black mt-2 grid items-center p-4 rounded-md ">
              <p className="text-lg pb-2 text-white">Nosakhare Steph Omosule</p>
              <p className="text-green">Social Media Manager</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestimonialSwiper;
