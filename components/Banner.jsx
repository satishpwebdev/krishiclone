import React from "react";
import { banner } from "@/constants/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <>
      <div className="relative w-full py-2">
        <button
          className="swiper-button-prev-custom absolute top-1/2 left-4 md:left-14 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1"
          aria-label="Previous Slide"
        >
          <IoIosArrowBack className="text-black"  />
        </button>

        <button
          className="swiper-button-next-custom absolute top-1/2 right-4 md:right-14 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 "
          aria-label="Next Slide"
        >
          <IoIosArrowForward className="text-black"  />
        </button>
        <div className="my-2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 1900
              // disableOnInteraction: false,
            }}
            //   navigation
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom"
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper "
          >
            {banner.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-[94%] rounded-md h-full object-cover "
                    src={item.img}
                    alt={item.category_name_default_en}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
