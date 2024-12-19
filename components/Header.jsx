import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
// import Logo from "../public/logokrishi.webp";
import Logo from "../public/willologo.png";
import Image from "next/image";
import Link from "next/link";
import TestSticky from "./TestSticky";
import { FcBusinessman } from "react-icons/fc";
import { CgMenuLeft } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-white shadow-md min-w-full fixed top-0 z-20">
      <div className="max-w-8xl mx-auto lg:px-4">
        <div className="flex items-center justify-between h-[3.9rem]">
          {/* Logo */}
          <div className="hidden lg:block flex-shrink-0  items-center px-1 ">
            <Link href={"/"}>
              <Image src={Logo} height={45}></Image>
            </Link>
          </div>

          {/* Search Bar */}

          <div className="hidden search-header-wrap mx-auto  px-4 md:h-10 lg:block xl:w-11/12 2xl:w-5/6 ">
            <div className="header-search relative flex h-10  md:h-10">
              <form className="w-full search-centrol  ">
                <div className="relative flex h-full">
                  <label htmlFor="search" className="sr-only">
                    search
                  </label>
                  <div className="relative w-full">
                    <input
                      id="search"
                      type="text"
                      autoComplete="off"
                      className="search item-center outline-none rounded-l-lg border-[1.2px] py-4 border-gray-300 px-6 flex h-full w-full  overflow-hidden text-black text-md text-heading placeholder-gray-300 "
                      name="search"
                      placeholder="Search your products from here"
                      defaultValue=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex bg-green-600 h-full min-w-[43px] items-center justify-center  bg-accent px-6 font-semibold text-light "
                  >
                    <svg viewBox="0 0 17.048 18" className="h-5 w-5 lg:h-6 lg:w-6">
                      <path
                        d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                        transform="translate(-367.297 -371.285)"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* LangKey  */}

          <div className="hidden search-header-wrap mx-auto md:h-10 lg:block  ">
            <div className="header-search relative flex rounded-lg text-black h-10 bg-gray-100  md:h-10">
              <select className="px-2 rounded-lg bg-white outline-none border-[1.3px]">
                <option value="eng">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-2 bg-gray-100  ">
              <div className=" text-center  px-4 py-1.5 rounded-lg bg-white border-[1.3px]">
                <Link href={"/about"}>About</Link>
              </div>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-1 bg-gray-100  ">
              <div className="whitespace-nowrap hover:bg-green-600   text-md text-center px-3 py-1.5 text-white rounded-lg bg-black ">
                <Link href={"/"}>Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-1 bg-gray-100  ">
              <div className="whitespace-nowrap hover:bg-green-600  text-md text-center px-3 py-1.5 text-white rounded-lg bg-black ">
                <Link href={"/"}>Login</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ">
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex outline-none items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="block h-6 w-6 outline-none" /> : <Menu className="block h-6 w-6 outline-none" />}
            </button> */}
            <nav className="fixed bottom-0 z-10 top-0 mt-1.5 flex items-center bg-white h-14 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-16">
              <div className="user-side flex flex-row-reverse ">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex  h-full menu-icon items-center justify-center p-2 focus:text-accent focus:outline-0"
                  tabIndex={0}
                >
                  <CgMenuLeft className="text-green-600" size={25} />
                </button>
                <button
                  className="flex h-full user-icon items-center justify-center p-2 focus:text-accent focus:outline-0"
                  tabIndex={0}
                >
                  <span className="sr-only">User</span>
                  <FcBusinessman className="text-green-500" size={22} />
                </button>
              </div>
              <div className="mobile-logo  ">
                <div className="flex-shrink-0 flex items-center  ">
                  <Link href={"/"}>
                    <Image src={Logo} height={37}></Image>
                  </Link>
                </div>
              </div>
              <div className="cart-side flex ">
                <button
                  className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                  tabIndex={0}
                >
                  <IoMdCart className="text-green-700" size={23} />
                </button>
                <button
                  className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                  tabIndex={0}
                >
                  <FaBell className="text-green-500" size={20} />
                </button>
              </div>
            </nav>
            {/* Bottom Navigation  */}
            <div className="visible h-12 md:h-14 lg:hidden">
              <nav className="fixed bottom-0 top-25 z-10 bg-white text-black flex h-12 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-14">
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        // <></>
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="px-4 pb-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
