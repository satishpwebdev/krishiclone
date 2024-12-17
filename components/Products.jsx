import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { IoIosArrowDown } from "react-icons/io";
const Products = () => {
  const [isOpen, setOpen] = useState(null);

  const ListArrays = [
    { title: "Brands", List:[
      { list: "Bayer" },
      { list: "Green Life" },
      { list: "Nacl" },
      { list: "Bharat Certis" },
      { list: "IFFCO Mc" },
      { list: "Crystal" }
    ]},
    { title: "Category",  List:[
      { list: "Catone" },
      { list: "Cattwo" },
      { list: "CatThree" },
      { list: "CatFour" },
      { list: "CatFive" },
      { list: "CatSix" } ]},
    { title: "Pre Or Post Emergence" },
    { title: "Selective on Non" },
    { title: "Cerfified Or Research" },
    { title: "Hybrid Or Op" },
    { title: "Target Pest" },
    { title: "Formulation" }
  ];

  const DropDownInbox = [
    { list: "Bayer" },
    { list: "Green Life" },
    { list: "Nacl" },
    { list: "Bharat Certis" },
    { list: "IFFCO Mc" },
    { list: "Crystal" }
  ];

  return (
    <>
      <section className="relative flex border-t border-solid border-border-200 border-opacity-70 md:flex-col lg:flex-row">
        <div className="hidden lg:block xl:block text-black ">
          <aside className="sidefiler-wrapper h-screen bg-light lg:sticky bg-white  lg:top-24 lg:block lg:w-72 xl:block xl:w-72">
            <div className="mx-4">
              <h2 className="text-cent font-semibold leading-5 py-4 text-orange-900">Rest Filter</h2>
              <div className="brands-acco ">
                <div className="flex items-center flex-col justify-between my-3">
                  {ListArrays.map((item, index) => (
                    <>
                      <button
                        onClick={() => {
                          const itemLength = item?.List?.map((item)=> item)
                          console.log("Hel", itemLength)
                          itemLength ? setOpen(true): setOpen(false)
                        }}
                        className="flex items-center justify-between w-full my-3 cursor-pointer"
                      >
                        <h2 className="text-[1.1rem] ">{item.title}</h2>
                        <IoIosArrowDown className="text-green-600" size={20}></IoIosArrowDown>
                      </button>
                      <div className="flex flex-col items-start ">
                        {item?.List?.map((list, ind) => (
                        console.log("idn", ind),
                          <>
                            {isOpen ===true && (
                              <label htmlFor="">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm">{list.list}</span>
                              </label>
                            )}
                          </>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className=" text-black sticky top-14 z-10 flex h-14 items-center justify-between border-b border-t border-border-200 bg-light px-5 py-3 md:top-16 md:h-16 lg:top-22 lg:hidden lg:px-7 xl:hidden">
            <button className="flex h-8 items-center rounded border border-border-200 bg-gray-100 bg-opacity-90 px-3 py-1 text-sm font-semibold text-heading transition-colors duration-200 hover:border-accent-hover hover:bg-accent hover:text-light focus:border-accent-hover focus:bg-accent focus:text-light focus:outline-0 md:h-10 md:px-4 md:py-1.5 md:text-base">
              Filter
            </button>
          </div>
        </div>
        <ProductList></ProductList>
      </section>
    </>
  );
};

export default Products;
