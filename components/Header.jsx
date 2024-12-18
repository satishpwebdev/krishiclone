import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
// import Logo from "../public/logokrishi.webp";
import Logo from "../public/willologo.png";
import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[3.9rem]">
          {/* Logo */}
          <div  className="flex-shrink-0 flex items-center px-1 ">
            <Link href={'/'}>
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
                      className="search item-center outline-none rounded-l-lg border-2 py-4 border-gray-200 px-6 flex h-full w-full  overflow-hidden text-black text-md text-heading placeholder-gray-300 "
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
              <select className="px-2 rounded-lg bg-gray-50 border-2">
                <option value="eng">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-2 bg-gray-100  ">
              <div className=" text-center px-4 py-1.5 rounded-lg bg-gray-50 border-2">
                <Link href={'/about'}>
               About
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-1 bg-gray-100  ">
              <div className="whitespace-nowrap hover:bg-green-600   text-md text-center px-3 py-1.5 text-white rounded-lg bg-black ">
                <Link href={'/'}>
               Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden search-header-wrap mx-auto  lg:block   ">
            <div className="header-search relative flex rounded-lg text-black mx-1 bg-gray-100  ">
              <div className="whitespace-nowrap hover:bg-green-600  text-md text-center px-3 py-1.5 text-white rounded-lg bg-black ">
                <Link href={'/'}>
               Login
                </Link>
              </div>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
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
          {/* Mobile Search */}
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
