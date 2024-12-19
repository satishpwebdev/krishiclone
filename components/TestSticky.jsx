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
      <div className="visible h-12 md:h-14 lg:hidden">
        <nav className="fixed bottom-0 top-25 z-10 bg-red-500 flex h-12 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-14">
          <button
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <span className="sr-only">User</span>
            <svg width="16.577" height="18.6" viewBox="0 0 16.577 18.6">
              <g transform="translate(-95.7 -121.203)">
                <path
                  d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
                  transform="translate(7819 -2793.5)"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
              </g>
            </svg>
          </button>
          <button
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <span className="sr-only">Home</span>
            <svg width="17.996" height="20.442" viewBox="0 0 17.996 20.442">
              <g transform="translate(-30.619 0.236)">
                <path
                  d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
                  transform="translate(0 0)"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.4"
                />
              </g>
            </svg>
          </button>
          <button
            className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
            tabIndex={0}
          >
            <span className="sr-only">Cart</span>
            <svg width={18} height={18} viewBox="0 0 18 18">
              <g transform="translate(-127 -122)">
                <path
                  d="M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z"
                  transform="translate(125 120)"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
};

export default TestSticky;
