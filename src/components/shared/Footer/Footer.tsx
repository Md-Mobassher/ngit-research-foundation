import Image from "next/image";
import Link from "next/link";
import { socialData } from "./SocialData";
import assets from "@/assets";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300 lg:mt-20 md:mt-14 mt-10 mb-5 pt-5 pb-2 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex flex-wrap justify-between  lg:gap-10 gap-2 items-center py-3">
          <div>
            <Link href="/">
              <Image
                src={assets.logo.png}
                alt="ngit logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center">
              Contact Us Via
            </h3>
            <div className="flex flex-wrap mt-4">
              {socialData.map((item) => (
                <a
                  href={item.link}
                  key={item.title}
                  target={item.link.startsWith("http") ? "_blank" : ""}
                  rel={
                    item.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover filter grayscale transition duration-500 ease-in-out p-1 hover:grayscale-0"
                    width={50}
                    height={50}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="flex md:flex-row flex-col lg:gap-5 gap-2 items-center justify-between mt-3">
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()}. All right regerved to{" "}
            <Link
              href="/"
              className="text-slate-500 hover:text-blue-500 font-semibold"
            >
              North Girth Institute of Technology
            </Link>
          </p>
          <p className="text-center text-md">
            Design & Developed By{" "}
            <a
              href="https://mobassher.vercel.app"
              target="_blank"
              className="text-slate-500 hover:text-blue-500 font-semibold"
            >
              Md Mobassher Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
