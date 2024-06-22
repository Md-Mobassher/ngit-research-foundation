import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";
import assets from "@/assets";
import MobileMenu from "./MobileMenu";
import { navItemsData } from "./navItemData";

const Navbar = () => {
  return (
    <>
      {/* header top */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  justify-between items-center ">
          <div className="flex items-center text-sm ">
            <div className="flex justify-center items-center lg:gap-2 gap-1">
              <FaMobileAlt /> <p> +880-170000000</p>
            </div>
            <div className="divider divider-horizontal  m-0 p-0 "></div>
            <div className="flex justify-center items-center lg:gap-2 gap-1">
              <MdOutlineLocationOn className="size-5" />{" "}
              <p>House- 22, 6th Floor, Road- 08, Sector- 09, Uttara, Dhaka</p>
            </div>
          </div>

          <div className="flex ">
            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>
            <Link href="/">
              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <FaFacebookF />
              </div>
            </Link>

            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

            <Link href="/">
              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <FaLinkedinIn />
              </div>
            </Link>

            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

            <Link href="/">
              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <AiOutlineYoutube />
              </div>
            </Link>

            <div className="divider m-0 p-0 w-0 divider-horizontal"></div>
          </div>
        </div>
      </div>

      {/* header */}
      <header className=" sticky top-0 z-50 bg-white border-b border-t">
        <div className="flex justify-between items-center container mx-auto px-4">
          <div className="w-[200px] ">
            <Link href="/">
              <Image src={assets.logo} alt="logo" width={70} height={70} />
            </Link>
          </div>
          <div>
            <nav className="lg:flex md:flex hidden flex-wrap">
              {navItemsData.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className=" text-md font-semibold  py-2 px-4 hover:text-white hover:bg-blue-500 rounded-md"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;