import React, { useState, useEffect, useRef } from "react";
import { trending } from "@/constants/trending";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogBanner = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  return (
    <>
      <div className="relative w-full py-2">
        <button
          className={`swiper-button-prev-tn absolute top-[50%] md:top-[56%] left-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isBeginning ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Previous Slide"
          disabled={isBeginning}
        >
          <IoIosArrowBack className="text-black" />
        </button>

        <button
          className={`swiper-button-next-tn absolute top-[50%] md:top-[56%] right-2 z-10 rounded-full transform -translate-y-1/2 bg-white text-white px-1 py-1 ${
            isEnd ? "cursor-not-allowed opacity-50 hidden" : ""
          }`}
          aria-label="Next Slide"
          disabled={isEnd}
        >
          <IoIosArrowForward className="text-black" />
        </button>

        <div className="text-black mt-2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-tn",
              nextEl: ".swiper-button-next-tn"
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              600: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
              1200: { slidesPerView: 4, spaceBetween: 20 }
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
            {trending.slice(0, 25).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow">
                  <div className="relative h-30 md:h-38 lg:h-44 xl:h-50">
                    <img
                      src="https://krishibarters.com/_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Fkb_images%2F9473170d-2a05-4eb3-8bff-a927a3500896__original.jpeg&w=1920&q=75"
                      className=" h-full w-full inset-0 object-cover"
                      alt=""
                    />
                    <div className="p-3 md:p-2">
                      <div className="truncate text-xs py-4 text-body md:text-sm text-green-600 ">
                        <span className="truncate text-xs py-4 text-body md:text-sm"><strong>Administrator</strong></span>
                        <span className="truncate text-xs py-4 ml-4 text-body md:text-sm">{"20 Dec 2024"}</span>
                      </div>
                      <div className="text-sm font-semibold pb-4 capitalize text-heading md:text-base">
                        India's National Sustainability Goals: A Pathway to a Greener Future
                      </div>
                      <div className="capitalize">
                        <h2>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate commodi alias
                          beatae?
                        </h2>
                      </div>
                      <button className="float-right text-green-700 font-semibold py-4  no-underline transition text-accent duration-200 hover:underline focus:text-accent">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
