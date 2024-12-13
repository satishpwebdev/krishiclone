import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
const index = () => {
  return (
    <>
      <div className="max-w-screen mx-auto  ">
        <Header />
        <div className="min-h-screen bg-gray-100">
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
