import React from "react";
import Category from "../components/Category";
import Banner from "./Banner";
import FeaturedBrands from "./FeaturedBrands";
import Trending from "./Trending";
import Products from "./Products";
import TestSticky from "./TestSticky";
import BlogBanner from "./BlogBanner";

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden ">
        <div className="mx-2 md:mx-10">
          <Category />
        </div>
        <Banner />
        <div className="mx-2 md:mx-8">
          <FeaturedBrands />
          <Trending />
        </div>
      </div>
      <Products />
      <div className="md:mx-8 md:my-4 mx-4">
        <BlogBanner />
      </div>
    </>
  );
};

export default HomePage;
