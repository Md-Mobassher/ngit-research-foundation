"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const navItem = (
  <>
    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/about">
        About
      </Link>
    </div>
    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/research">
        Research
      </Link>
      {/* <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                     <li><Link className='rounded-lg' href='/people'>People</Link></li>
                     <li><Link className='rounded-lg' href='/publications'>Publications</Link></li>
                </ul> */}
    </div>

    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/people">
        People
      </Link>
    </div>
    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/publications">
        Publications
      </Link>
    </div>
    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/resource">
        Resources
      </Link>
    </div>
    <div className="bg-white px-5 py-2 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white">
      <Link className="rounded-lg" href="/more">
        More
      </Link>
    </div>
  </>
);

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        {/*  large device menu */}
        <div className="hidden md:block">
          <div className="flex justify-end items-center">{navItem}</div>
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="-mr-2 flex md:hidden p-2 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" text-slate-700  rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? (
              <ImCross className="size-7 hover:text-blue-500" />
            ) : (
              <GiHamburgerMenu className="size-8 hover:text-blue-500" />
            )}
            {isOpen && (
              <div className="flex flex-col pt-5 w-60 top-10 right-0 shadow-md rounded-md absolute ">
                {navItem}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
