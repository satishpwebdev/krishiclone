import React from "react";
import Category from "../components/Category";
import Banner from "./Banner";
import FeaturedBrands from "./FeaturedBrands";
import Trending from "./Trending";
import Products from "./Products";
import TestSticky from "./TestSticky";

const HomePage = () => {
  return (
    <>
      <div className="overflow-hidden ">
        <div className="mx-2 md:mx-10">
          <Category />
        </div>
        <Banner />
        <FeaturedBrands />
        <Trending />
      </div>
      <Products />
    </>
  );
};

export default HomePage;
