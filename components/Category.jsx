import React, { useRef, useState } from "react";
import { data } from "@/constants/categoryList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Category = () => {
  
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative w-full py-10">
        <button
          className={`swiper-button-prev-cat absolute top-[56%] left-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isBeginning ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Previous Slide"
          disabled={isBeginning}
        >
          <IoIosArrowBack className="text-black"  />
        </button>

        <button
          className={`swiper-button-next-cat absolute top-[56%] right-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isEnd ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Next Slide"
          disabled={isEnd}
        >
          <IoIosArrowForward className="text-black"  />
        </button>

        <div className="text-black mt-12">
          <div className="font-semibold mb-1 mx-8 lg:py-4 text-lg">Featured Category</div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: ".swiper-button-prev-cat",
              nextEl: ".swiper-button-next-cat"
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
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="rounded-full hover:shadow-lg hover:-translate-y-1 transform-gpu my-4 hover:cursor-pointer"
                    src={item.category_image}
                    alt={item.category_name_default_en}
                  />
                  <h2 className="mt-3 font-semibold leading-5 line-clamp-2 text-green-600 text-sm">
                    {item.category_name_default_en}
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

export default Category;
