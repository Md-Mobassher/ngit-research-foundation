import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

const Navbar = ({ children }: any) => {
  const menuItem = (
    <>
      <li>
        <Link className="rounded-lg" href="/about">
          About
        </Link>
      </li>
      <li className="dropdown  dropdown-hover hover:overflow-visible ">
        <Link className="rounded-lg" href="/research">
          Research
        </Link>
        {/* <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 <li><Link className='rounded-lg' href='/people'>People</Link></li>
                 <li><Link className='rounded-lg' href='/publications'>Publications</Link></li>
            </ul> */}
      </li>

      <li>
        <Link className="rounded-lg" href="/people">
          People
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" href="/publications">
          Publications
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" href="/resource">
          Resources
        </Link>
      </li>
      <li>
        <Link className="rounded-lg" href="/more">
          More
        </Link>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="hidden lg:block  shadow-lg ">
          <div className="flex  w-full border-b-2 justify-between items-center px-20">
            <div className="flex items-center text-sm ">
              <div className="flex justify-center items-center gap-2">
                <FaMobileAlt /> <p> +880-170000000</p>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex justify-center items-center gap-2">
                <MdOutlineLocationOn />{" "}
                <p>House- 22, 6th Floor, Road- 08, Sector- 09, Uttara, Dhaka</p>
              </div>
            </div>

            <div className="flex ">
              <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <Link href="/">
                  <FaFacebookF />
                </Link>
              </div>

              <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <Link href="/">
                  <FaLinkedinIn />
                </Link>
              </div>

              <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

              <div className="w-8 h-8 flex justify-center items-center hover:bg-primary hover:text-white">
                <Link href="/">
                  <AiOutlineYoutube />
                </Link>
              </div>

              <div className="divider m-0 p-0 w-0 divider-horizontal"></div>
            </div>
          </div>
        </div>

        <div className="w-full navbar sticky top-0 lg:px-20 shadow-md bg-base-100 z-20">
          <div className="flex-1 text-4xl font-semibold px-2 mx-2">
            <Link href="/">NGIT</Link>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">{menuItem}</ul>
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu menu-varticle p-4 overflow-y-auto w-60 bg-base-100">
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
