import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";
import assets from "@/assets";
import MobileMenu from "./MobileMenu";
import { navItemsData } from "./navItemData";
import { socialData } from "../Footer/SocialData";

const Navbar = () => {
  return (
    <>
      {/* header top */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="flex items-center text-sm ">
            <div className="flex justify-center items-center lg:gap-2 gap-1 mr-2">
              <FaMobileAlt /> <p> +8801737632508</p>
            </div>

            <div className="md:flex justify-center items-center lg:gap-2 gap-1 hidden ">
              <div className="divider divider-horizontal  m-0 p-0 "></div>
              <MdOutlineLocationOn className="size-5" />{" "}
              <p>
                House-50/11, Road-07, Babukha, Masterpara, Rangpur Sadar,
                Rangpur
              </p>
            </div>
          </div>

          {/* <div className="flex ">
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

            <div className="divider m-0 p-0 w-0 divider-horizontal border-gray-300"></div>
          </div> */}
          <div className="flex">
            {socialData.map((item) => (
              <a
                href={item.link}
                key={item.title}
                target={item.link.startsWith("http") ? "_blank" : ""}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover filter grayscale transition duration-500 ease-in-out p-1 hover:grayscale-0"
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* header */}
      <header className=" sticky top-0 z-50 bg-white border-b border-t border-gray-300 py-[2px] shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
          <div className="w-[200px] ">
            <Link href="/">
              <Image src={assets.logo.png} alt="logo" width={70} height={70} />
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
