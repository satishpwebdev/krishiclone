import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductCarousel = ({ imageData, mainImg }) => {
  return (
    <div className="text-white text-[20px] max-w-[1024px] mx-auto sticky top-[125px] focus:outline-none ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        thumbWidth={50}
        className="productCarousel"
      >
        {imageData[0]?.assets?.imgs[0]?.web?.map((item, index) => (
          <div ca>
            <img
              src={index == 0 ? mainImg : item?.src}
              key={index}
              className="w-32 h-auto aspect-[4/4]  object-contain focus:outline-none"
              alt="krishiclone"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
