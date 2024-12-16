import React from "react";
import { trending } from "@/constants/trending";
const ProductList = () => {



  

//Discount handler
  function discount(item){
    let discount = (item.prices.mrp - item.prices.selling_price) / item.prices.mrp * 100;
    return discount.toFixed(2);
  }
  return (
    <>
      <div className="flex w-full flex-col">
        <h3 className="px-4 py-4 font-bold text-gray-700  text-heading lg:px-8 lg:py-0 lg:pt-4 lg:text-2xl">
          Products
        </h3>
        <div className="w-full px-4 pb-8 lg:p-8 ">
          <div className="grid md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] grid-cols-2 gap-4">
            {trending.slice(0, 30).map((item) => (
              <article className="product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow">
                <div className="relative flex h-40 w-auto cursor-pointer items-center justify-center sm:h-40 bg-white">
                  <img
                    className="product-image absolute h-full w-full inset-0 transparent object-contain"
                    src={item.images[0]}
                    sizes=""
                    alt=""
                  />
                  <div className="flex flex-row-reverse ">
                    <div className="class absolute top-4 left-4">
                      <button className="mt-0.5 flex h-10 w-10 shrink-0 items-center text-green-600  justify-center rounded-full border  transition-colors border-green-600 wishlist-icon">
                        <svg
                          viewBox="0 -28 512.001 512"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="currentColor"
                          class="h-5 w-5 text-accent"
                        >
                          <path d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="absolute text right-0 top-0">
                      <div className="absolute right-[-50px] top-[32px] w-[170px] rotate-45 transform bg-green-900 py-1 text-center font-semibold text-white">
                        <div className="discount-value text-sm text">
                          {discount(item)}
                          <span className="discount-text">% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <header className="price-wrap text-black p-2 md:p-2 bg-white">
                  <div className="mb-2 flex items-center gap-2">
                    <span class="text-sm font-semibold text-heading md:text-base text-green-600">₹ {item.prices.selling_price.toFixed(2)} </span>
                    <span class="text-xs text-muted line-through decoration-2 ltr:ml-2 rtl:mr-2 md:text-sm">
                      ₹ {item.prices.mrp.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 class="mb-4 line-clamp-3 cursor-pointer truncate text-xs uppercase text-body md:text-sm">
                      {item.name}
                    </h3>
                    <h3 class="mb-4 cursor-pointer truncate text-xs text-body md:text-sm"></h3>
                  </div>
                  <h3 className="text-orange-900 mb-4 font-semibold cursor-pointer  truncate text-xs text-body md:text-sm">
                    {item.product_info.brand_info.name["en"]}
                  </h3>
                </header>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
