import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { CgMenuLeft } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Logo from "../public/willologo.png";
import Link from "next/link";
import Image from "next/image";

const TestSticky = () => {
  return (
    <>
      <nav className="fixed bottom-0 z-10 top-0 flex items-center bg-white h-14 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-16">
        <div className="user-side flex flex-row-reverse ">
          <button
            className="flex  h-full menu-icon items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <CgMenuLeft className="text-green-500" size={25} />
          </button>
          <button
            className="flex h-full user-icon items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <span className="sr-only">User</span>
            <FcBusinessman className="text-green-500" size={22} />
          </button>
        </div>
        <div className="mobile-logo">
          <div className="flex-shrink-0 flex items-center px-1 ">
            <Link href={"/"}>
              <Image src={Logo} height={25}></Image>
            </Link>
          </div>
        </div>
        <div className="cart-side flex ">
          <button
            className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
           <IoMdCart className="text-green-600" size={23} />
          </button>
          <button
            className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <FaBell className="text-green-600" size={20} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default TestSticky;
