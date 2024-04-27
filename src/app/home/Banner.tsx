import Image from "next/image";
import bg from "@/assets/image/bg-1.jpg";

const Banner = () => {
  return (
    <div className="mt-2 relative">
      <Image src={bg} alt="banner Image" className="rounded-md " />
      <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold text-white absolute lg:top-[40%] lg:left-[20%] md:top-[30%] md:left-[10%] top-5 left-5 z-30 p-10 text-center shadow-2xl">
        WELCOME TO NGIT RESEARCH FOUNDATION
      </h1>
    </div>
  );
};

export default Banner;
