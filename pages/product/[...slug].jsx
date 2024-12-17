import React, { useState, useEffect } from "react";
import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";
import products from "@/constants/productDummy";

import axios from "axios";
// import { localUrl } from "../../constants/url";
import Header from "@/components/Header";

const index = ({ products }) => {
  const footer = "footer";
  const about = "footer";
  const router = useRouter();

  return (
    <>
      <Header></Header>
      <h1>Loading Product</h1>
      <ProductDetails products={products} />
    </>
  );
};
export default index;

export async function getServerSideProps(context) {
  try {
    // const productId = context?.query?.slug[1];
    // const res = await axios.get(`${localUrl}/singletest/${productId}`);
    // const products = res?.data?.data || dummyProducts;

    return {
      props: {
        products
      }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        products: []
      }
    };
  }
}
