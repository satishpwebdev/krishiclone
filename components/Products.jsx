import React from "react";
import ProductList from "./ProductList";
const Products = () => {
  return (
    <>
      <section className="relative flex border-t border-solid border-border-200 border-opacity-70 md:flex-col lg:flex-row">
        <div className="hidden lg:block xl:block text-black ">
          <aside className="sidefiler-wrapper h-screen bg-light lg:sticky  lg:top-20 lg:block lg:w-72 xl:block xl:w-72">
            Filterrrr
          </aside>
        </div>
        <div className=" text-black sticky top-14 z-10 flex h-14 items-center justify-between border-b border-t border-border-200 bg-light px-5 py-3 md:top-16 md:h-16 lg:top-22 lg:hidden lg:px-7 xl:hidden">
          <button className="flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 px-3 py-1 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-0 md:h-10 md:px-4 md:py-1.5 md:text-base">
            Filter
          </button>
        </div>
        <ProductList></ProductList>
      </section>
    </>
  );
};

export default Products;
