import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosShareAlt } from "react-icons/io";
import { useRouter } from "next/router";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";

const ProductDetails = ({ products }) => {
  const footer = "footer";
  const about = "footer";
  const router = useRouter();
  const { slug } = router.query;
  const [name, setName] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [showText, setShowText] = useState([]);
  const [isShow, setShow] = useState(false);
  const [shadeName, setShadeColor] = useState("Red");
  const [mainImg, setMainImg] = useState([]);
  const [select, setSelect] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (slug) {
      setName(slug[0]);
    }
  }, [router.query]);

  const DetailsType = ["Description"];

  useEffect(() => {
    if (DetailsType[descIndex] == "Description") {
      setShowText(products[0]?.description);
    }

    if (DetailsType[descIndex] == "Benefits") {
      setShowText(text.desc);
    }

    if (DetailsType[descIndex] == "Validity") {
      setShowText(text.val);
    }
  }, [descIndex]);

  const handleMouseOver = (color, img) => {
    setShadeColor(color);
    setMainImg(img);
  };

  useEffect(() => {
    setMainImg(products[0]?.assets?.imgs[0]?.web[0]?.src);
    setImages(products[0]?.assets?.imgs[0]?.web);
    setShadeColor(products[0]?.attrs?.value);
  }, [products]);

  console.log("query", router.query);

  return (
    <>
      <section className="w-full py-10 bg-gray-100 text-black">
        <div className="flex flex-col lg:flex-row  lg:gap-[27px] px-2 gap-[10px] md:px-[4rem] lg:mx-4 ">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5 max-w-[550px] md:min-w-[550px] mx-auto lg:mx-0 ">
            <ProductCarousel imageData={products} mainImg={mainImg} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[] py-2 font-sans lg:ml-4 ">
            {/* PRODUCT TITLE */}
            <div className="text-[22px] md:text-[32px] mt-2 md:mt-12  font-fjal  flex w-full justify-between font-normal font-sans mb-1 leading-tight">
              <div className="text-green-600 tracking-tight">{products[0]?.name}</div>
              <div className="flex items-center hover:text-green-600 mx-2  ">
                <IoIosShareAlt size={32} className=""></IoIosShareAlt>
                <h6 className="text-sm  font-fira px-1 italic">Share</h6>
              </div>
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-sm lg:text-[1rem] font-fira lg:mb-3 mb-2 w-full">
              {/* <h2 className="text-gray-500 text-[0.9rem]">{products[0]?.item_specification}</h2> */}
            </div>

            {/* shade name  */}
           

            {/* Shade Color  */}
            <div className="">
              

              <div className="product extra info font-poppins text-black">
                <div className=" flex items-center mb-1 mt-5 lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-fira Condensed font-semibold mb text-black">
                      Brand : <span className="px-2">{products[0]?.brand}</span>
                    </h5>
                  </div>
                </div>

                <div className=" flex items-center mb-1 mt- lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-firaCondensed font-semibold mb">
                      Skin Type : <span className="px-2">{products[0]?.attrs[0]?.value}</span>
                    </h5>
                  </div>
                </div>

                <div className=" flex items-center mb-1 mt- lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-firaCondensed font-semibold mb">
                      Finish Type : <span className="px-2">{products[0]?.attrs[1]?.value}</span>
                    </h5>
                  </div>
                </div>

                <div className=" flex items-center mb-1 mt- lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-firaCondensed font-semibold mb">
                      Material : <span className="px-2">{products[0]?.attrs[2]?.value}</span>
                    </h5>
                  </div>
                </div>

                <div className=" flex items-center mb-1 mt- lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-firaCondensed font-semibold mb ">
                      Product Benefits :{" "}
                      <span className="px-2 ">{products[0]?.attrs[3]?.value?.substring(0, 30)}</span>
                    </h5>
                  </div>
                </div>

                <div className=" flex items-center mb-1 mt- lg:">
                  <div className="flex  gap-4 items-center justify-center">
                    <h5 className="text-sm font-firaCondensed font-semibold mb">
                      Ingredients : <span className="px-2">{products[0]?.attrs[4]?.value}</span>
                    </h5>
                  </div>
                </div>
              </div>

              {/* ends here  */}
            </div>

            {/* quality check */}
            

            <div className="allDetails my-2">
              <div className="flex justify-between w-full gap-2">
                {DetailsType?.map((item, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className={` ${
                        index == 2
                          ? "md:w-[160px] lg:w-[140px] w-[90px]"
                          : " md:w-[160px] lg:w-[140px] w-[100px] "
                      } h-[35px] hover:bg-green-600  focus:text-[#fff]   focus:bg-green-600   transition-colors  drop-shadow-sm lg:text-[16px] lg:font-bold text-[#fff]  lg:border-[0px]  rounded-sm   lg:h-[40px] sm:mb-[0px] mb-[2px]  text-[13px] cursor-pointer ${
                        descIndex == index
                          ? " text-[#fff] bg-green-600 transition-colors "
                          : " text-[#000] bg-[#9fd78b] transition-colors "
                      } `}
                      onClick={() => {
                        setDescIndex(index);
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              <div
                className={` w-full font-sans text-sm lg:text-md flex flex-wrap border-[0px] border-green-300 lg:mt- tex justify-start lg:px-[0rem] `}
              >
                <div className="whitespace-normal px-1 mt-0.5 bg-green-200 lg:px-1.5 lg:py-1 border-t-[7px] border-green-600 rounded-sm">
                  {showText?.map((item, index) =>
                    item?.val
                      ?.split(/\d+.\s*/)
                      ?.filter(Boolean)
                      ?.map((desc) => <li key={item?.id}>{desc}</li>)
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        {/* See More Product Slider  */}
        <div className="see more md:mt-4 ">
          <div className="text-center flex justify-center text-[15px]  md:text-[22px] mb-4 mt-2 lg:mx-2  font-fjal ">
            <div className="relative lg:w-[30%] w-ful w-[60%]  flex items-center justify-center md:py-4  py-5">
              <Image
                // src={Also}
                alt="pinkline_also_like"
                className="absolute md:top-0 top-1 left-0 w-full h-full rounded-full object-cover  md:object-cover"
              />
              {/* <p className="relative  text- text-black md:m-[10px] md:mr-12 mr-12 ">You May Also Like</p> */}
            </div>
          </div>
          {/* <RelatedProducts productId={products[0]?.category} /> */}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
