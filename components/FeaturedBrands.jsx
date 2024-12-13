import React, { useRef, useState } from "react";
import { brands } from "@/constants/brands";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeaturedBrands = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  return (
    <>
      <div className="relative w-full py-2">
        <button
          className={`swiper-button-prev-fb absolute top-[50%] md:top-[56%] left-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isBeginning ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Previous Slide"
          disabled={isBeginning}
        >
          <IoIosArrowBack className="text-black"  />
        </button>

        <button
          className={`swiper-button-next-fb absolute top-[50%] md:top-[56%] right-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isEnd ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Next Slide"
          disabled={isEnd}
        >
          <IoIosArrowForward className="text-black"  />
        </button>

        <div className="text-black mt-2">
          <div className="font-semibold mb-1 mx-8 lg:py-4 text-lg">Featured Brands</div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: ".swiper-button-prev-fb",
              nextEl: ".swiper-button-next-fb"
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              600: { slidesPerView: 5, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 7, spaceBetween: 40 },
              1200: { slidesPerView: 7, spaceBetween: 20 }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="mySwiper"
          >
            {brands.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white rounded-full px-4 py-4 md:px-10 md:py-10 my-4 hover:shadow-lg hover:-translate-y-1 transform-gpu  hover:cursor-pointer ">
                    <img
                      className=" md:h-20 md:w-20  w-12 h-12  object-contain"
                      src={item.brand_image}
                      alt={item.brand_name[1]}
                    />
                  </div>

                  <h2 className="mt-3 font-semibold leading-5 line-clamp-2 text-green-600 text-sm">
                    {item.brand_name[1]}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedBrands;
